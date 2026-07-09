const CACHE_NAME = "tan-hiep-mobile-v4";

self.addEventListener("install", function(event) {
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.map(function(key) {
          return caches.delete(key);
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(fetch(event.request));
});
