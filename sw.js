"use strict";

const APP_VERSION = "1.3";

const CACHE_PREFIX = "tan-hiep-mobile-";

const CACHE_NAME =
  CACHE_PREFIX + "v" + APP_VERSION;


/* =========================================================
   INSTALL
========================================================= */

self.addEventListener(
  "install",
  function(event) {

    /*
     * Kích hoạt SW mới ngay.
     */
    self.skipWaiting();
  }
);


/* =========================================================
   ACTIVATE
========================================================= */

self.addEventListener(
  "activate",
  function(event) {

    event.waitUntil(
      (async function() {

        try {

          const keys =
            await caches.keys();

          /*
           * Chỉ xóa cache thuộc tan-hiep-mobile.
           *
           * Không được xóa cache của các app khác
           * trên thanhbds2011-droid.github.io.
           */
          const oldCaches =
            keys.filter(
              function(key) {

                return (
                  key.startsWith(
                    CACHE_PREFIX
                  ) &&
                  key !== CACHE_NAME
                );
              }
            );

          await Promise.all(
            oldCaches.map(
              function(key) {

                return caches.delete(
                  key
                );
              }
            )
          );

        } catch (error) {

          console.log(
            "Không thể dọn cache cũ:",
            error
          );
        }

        /*
         * SW mới điều khiển trang ngay.
         */
        await self.clients.claim();

      })()
    );
  }
);


/* =========================================================
   FETCH
========================================================= */

self.addEventListener(
  "fetch",
  function(event) {

    /*
     * Chỉ xử lý GET.
     */
    if (
      event.request.method !==
      "GET"
    ) {

      return;
    }

    let requestUrl;

    try {

      requestUrl =
        new URL(
          event.request.url
        );

    } catch (error) {

      return;
    }

    const scopeUrl =
      new URL(
        self.registration.scope
      );

    /*
     * Không can thiệp:
     * - ứng dụng GitHub Pages khác
     * - iframe của Văn bản
     * - iframe Công lệnh
     * - iframe Văn bản Đảng
     * - tài nguyên ngoài scope tan-hiep-mobile
     */
    if (
      requestUrl.origin !==
      scopeUrl.origin
    ) {

      return;
    }

    if (
      !requestUrl.pathname.startsWith(
        scopeUrl.pathname
      )
    ) {

      return;
    }

    /*
     * Tân Hiệp Mobile ưu tiên dữ liệu mới nhất.
     *
     * Không sử dụng cache-first cho index.html,
     * version.json hoặc sw.js.
     */
    event.respondWith(
      fetch(
        event.request,
        {
          cache: "no-store"
        }
      ).catch(
        function(error) {

          /*
           * Nếu mất mạng, thử request mặc định.
           * Không lưu phiên bản HTML cũ.
           */
          return fetch(
            event.request
          );
        }
      )
    );
  }
);


/* =========================================================
   MESSAGE
========================================================= */

self.addEventListener(
  "message",
  function(event) {

    if (
      event.data &&
      event.data.type ===
      "SKIP_WAITING"
    ) {

      self.skipWaiting();
    }
  }
);
