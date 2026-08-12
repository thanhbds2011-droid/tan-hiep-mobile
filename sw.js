<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
  />

  <title>Ứng dụng Tân Hiệp</title>

  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />

  <link rel="manifest" href="manifest.webmanifest?v=1.4" />
  <link rel="apple-touch-icon" href="icon-192.png?v=1.4" />

  <meta name="theme-color" content="#991b1b" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-title" content="Tân Hiệp" />
  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800;900&display=swap');

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    :root {
      --red: #991b1b;
      --red-2: #b91c1c;
      --red-soft: #fef2f2;

      --dark: #111827;
      --muted: #6b7280;
      --muted-2: #64748b;

      --line: #e5e7eb;

      --blue: #2563eb;
      --green: #047857;
      --orange: #ea580c;
      --purple: #7c3aed;

      --bg: #f8fafc;
      --white: #ffffff;

      --shadow:
        0 16px 38px rgba(15, 23, 42, 0.12);

      --bottom-nav-height: 78px;

      --live-header-height: 76px;

      --workspace-left:
        max(
          18px,
          calc((100vw - 1760px) / 2)
        );

      --workspace-rail-width: 88px;
      --workspace-frame-max: 1480px;
    }

    html,
    body {
      width: 100%;
      height: 100%;

      margin: 0;
      padding: 0;

      font-family:
        'Be Vietnam Pro',
        Arial,
        sans-serif;

      background: var(--bg);
      color: var(--dark);

      overflow: hidden;
    }

    body {
      overscroll-behavior: none;
    }

    button,
    input {
      font-family:
        'Be Vietnam Pro',
        Arial,
        sans-serif;
    }

    button {
      border: none;
      cursor: pointer;
    }

    button:focus-visible,
    input:focus-visible {
      outline:
        3px solid
        rgba(37, 99, 235, 0.24);

      outline-offset: 2px;
    }

    .app {
      position: relative;

      width: 100%;

      height: 100vh;
      height: 100dvh;

      display: flex;
      flex-direction: column;

      background:
        radial-gradient(
          circle at 0% 0%,
          rgba(185, 28, 28, 0.16),
          transparent 32%
        ),
        radial-gradient(
          circle at 100% 100%,
          rgba(37, 99, 235, 0.15),
          transparent 34%
        ),
        linear-gradient(
          180deg,
          #fff7f7 0%,
          #f8fafc 50%,
          #eef2ff 100%
        );

      overflow: hidden;
    }

    /* =========================================================
       HEADER
    ========================================================= */

    .app-header {
      position: relative;
      z-index: 60;

      flex: 0 0 auto;

      padding:
        calc(12px + env(safe-area-inset-top))
        16px
        12px;

      background:
        rgba(255, 255, 255, 0.94);

      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);

      border-bottom:
        1px solid
        rgba(229, 231, 235, 0.88);
    }

    .header-row {
      display: flex;
      align-items: center;

      gap: 12px;
    }

    .logo {
      width: 48px;
      height: 48px;

      flex: 0 0 auto;

      display: flex;
      align-items: center;
      justify-content: center;

      overflow: hidden;

      border-radius: 16px;

      background: #fff;

      box-shadow:
        0 10px 24px
        rgba(153, 27, 27, 0.18);

      color: var(--red);

      font-weight: 900;
    }

    .logo img {
      display: block;

      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    .header-text {
      min-width: 0;
      flex: 1;
    }

    .header-text h1 {
      margin: 0;

      color: var(--red);

      font-size: 17px;
      line-height: 1.25;

      font-weight: 900;

      letter-spacing: -0.35px;
    }

    .header-text p {
      margin: 3px 0 0;

      color: var(--muted);

      font-size: 11.5px;
      line-height: 1.35;

      font-weight: 600;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .status-dot {
      flex: 0 0 auto;

      display: inline-flex;
      align-items: center;

      gap: 5px;

      padding: 7px 10px;

      border-radius: 999px;

      background: #ecfdf5;
      color: var(--green);

      font-size: 11px;

      font-weight: 900;

      white-space: nowrap;
    }

    .status-dot.offline {
      background: #fff7ed;
      color: #c2410c;
    }

    /* =========================================================
       MAIN CONTENT
    ========================================================= */

    .content {
      position: relative;

      flex: 1;
      min-height: 0;

      overflow: hidden;

      padding-bottom:
        calc(
          var(--bottom-nav-height) +
          env(safe-area-inset-bottom)
        );
    }

    .view {
      display: none;

      width: 100%;
      height: 100%;

      overflow: hidden;
    }

    .view.active {
      display: block;
    }

    /* =========================================================
       HOME
    ========================================================= */

    .home-scroll {
      width: 100%;
      height: 100%;

      overflow-y: auto;

      padding:
        16px
        16px
        18px;

      -webkit-overflow-scrolling: touch;
    }

    .home-container {
      width: 100%;
      max-width: 900px;

      margin: 0 auto;
    }

    .section-title {
      margin: 2px 0 14px;
    }

    .section-title h2 {
      margin: 0;

      color: var(--dark);

      font-size: 22px;
      line-height: 1.25;

      font-weight: 900;

      letter-spacing: -0.5px;
    }

    .section-title p {
      margin: 6px 0 0;

      color: var(--muted);

      font-size: 13px;
      line-height: 1.5;

      font-weight: 600;
    }

    /* =========================================================
       HERO
    ========================================================= */

    .quick-panel {
      position: relative;

      overflow: hidden;

      margin-bottom: 16px;

      padding: 18px;

      border-radius: 28px;

      background:
        linear-gradient(
          135deg,
          #991b1b 0%,
          #7f1d1d 50%,
          #111827 100%
        );

      color: #fff;

      box-shadow: var(--shadow);
    }

    .quick-panel::before {
      content: "";

      position: absolute;

      width: 180px;
      height: 180px;

      top: -75px;
      right: -70px;

      border-radius: 50%;

      background:
        rgba(255, 255, 255, 0.10);
    }

    .quick-panel::after {
      content: "";

      position: absolute;

      width: 160px;
      height: 160px;

      right: 28px;
      bottom: -86px;

      border-radius: 50%;

      background:
        rgba(255, 255, 255, 0.07);
    }

    .quick-panel-content {
      position: relative;
      z-index: 2;
    }

    .quick-chip {
      display: inline-flex;
      align-items: center;

      gap: 8px;

      margin-bottom: 12px;

      padding: 8px 12px;

      border:
        1px solid
        rgba(255, 255, 255, 0.22);

      border-radius: 999px;

      background:
        rgba(255, 255, 255, 0.14);

      font-size: 12px;
      font-weight: 800;
    }

    .quick-panel h3 {
      margin: 0;

      font-size: 23px;
      line-height: 1.25;

      font-weight: 900;

      letter-spacing: -0.55px;
    }

    .quick-panel p {
      margin: 10px 0 0;

      color:
        rgba(255, 255, 255, 0.88);

      font-size: 13.5px;
      line-height: 1.65;

      font-weight: 500;
    }

    /* =========================================================
       APP CARDS
    ========================================================= */

    .app-grid {
      display: grid;

      grid-template-columns: 1fr;

      gap: 14px;
    }

    .app-card {
      width: 100%;

      min-height: 148px;

      display: flex;

      align-items: flex-start;

      gap: 15px;

      padding: 18px;

      text-align: left;

      border:
        1px solid
        rgba(229, 231, 235, 0.96);

      border-radius: 24px;

      background:
        rgba(255, 255, 255, 0.96);

      box-shadow:
        0 12px 30px
        rgba(15, 23, 42, 0.08);

      transition:
        transform 0.16s ease,
        box-shadow 0.16s ease,
        border-color 0.16s ease;
    }

    .app-card:hover {
      transform:
        translateY(-2px);

      border-color:
        rgba(153, 27, 27, 0.28);

      box-shadow:
        0 18px 42px
        rgba(15, 23, 42, 0.14);
    }

    .app-card:active {
      transform:
        scale(0.985);

      box-shadow:
        0 8px 20px
        rgba(15, 23, 42, 0.10);
    }

    .app-icon {
      width: 54px;
      height: 54px;

      flex: 0 0 auto;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 18px;

      font-size: 25px;
    }

    .app-icon.doc {
      background: #eff6ff;
      color: var(--blue);
    }

    .app-icon.car {
      background: #fff7ed;
      color: var(--orange);
    }

    .app-icon.party {
      background: #fef2f2;
      color: var(--red);
    }

    .app-content {
      flex: 1;

      min-width: 0;
    }

    .app-topline {
      display: flex;

      align-items: center;
      justify-content: space-between;

      gap: 8px;

      margin-bottom: 6px;
    }

    .app-card h3 {
      margin: 0;

      color: var(--dark);

      font-size: 18px;
      line-height: 1.3;

      font-weight: 900;

      letter-spacing: -0.4px;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      padding: 6px 9px;

      border-radius: 999px;

      font-size: 11px;
      font-weight: 900;

      white-space: nowrap;
    }

    .badge.open {
      background: #ecfdf5;
      color: var(--green);
    }

    .badge.lock {
      background: #fef2f2;
      color: var(--red);
    }

    .badge.internal {
      background: #fef2f2;
      color: var(--red);
    }

    .app-card p {
      margin: 0;

      color: var(--muted);

      font-size: 13px;
      line-height: 1.55;

      font-weight: 500;
    }

    .mini-tags {
      display: flex;
      flex-wrap: wrap;

      gap: 6px;

      margin-top: 10px;
    }

    .mini-tags span {
      display: inline-flex;

      align-items: center;
      justify-content: center;

      padding: 5px 8px;

      border:
        1px solid #e5e7eb;

      border-radius: 999px;

      background: #f9fafb;

      color: #4b5563;

      font-size: 10.5px;

      font-weight: 800;

      white-space: nowrap;
    }

    .mini-tags .tag-blue {
      background: #eff6ff;
      color: #1d4ed8;
      border-color: #dbeafe;
    }

    .mini-tags .tag-orange {
      background: #fff7ed;
      color: #c2410c;
      border-color: #fed7aa;
    }

    .mini-tags .tag-red {
      background: #fef2f2;
      color: #b91c1c;
      border-color: #fecaca;
    }

    .mini-tags .tag-green {
      background: #ecfdf5;
      color: #047857;
      border-color: #bbf7d0;
    }

    .mini-tags .tag-purple {
      background: #f5f3ff;
      color: #6d28d9;
      border-color: #ddd6fe;
    }

    .app-action {
      display: flex;

      align-items: center;
      justify-content: space-between;

      margin-top: 12px;

      color: var(--red);

      font-size: 13px;
      font-weight: 900;
    }

    /* =========================================================
       FOOTER
    ========================================================= */

    .footer {
      margin-top: 16px;

      padding-bottom: 6px;

      color: #8b95a5;

      text-align: center;

      font-size: 11px;
      line-height: 1.5;
    }

    .version {
      margin-top: 4px;

      color: #a7afbd;

      font-size: 10px;
    }

    /* =========================================================
       WORKSPACE / IFRAME
    ========================================================= */

    .workspace-stage {
      width: 100%;
      height: 100%;

      min-width: 0;
      min-height: 0;
    }

    .frame-wrap {
      position: relative;

      width: 100%;
      height: 100%;

      overflow: hidden;

      background: #fff;
    }

    .frame-loading {
      position: absolute;
      inset: 0;

      z-index: 3;

      display: none;

      align-items: center;
      justify-content: center;

      padding: 24px;

      background:
        linear-gradient(
          180deg,
          #ffffff,
          #f8fafc
        );

      color: var(--red);

      text-align: center;

      font-size: 14px;
      font-weight: 800;
    }

    .frame-loading::before {
      content: "";

      width: 22px;
      height: 22px;

      margin-right: 10px;

      border:
        3px solid
        rgba(153, 27, 27, 0.16);

      border-top-color:
        var(--red);

      border-radius: 50%;

      animation:
        frameSpin 0.75s linear infinite;
    }

    .frame-wrap.is-loading
    .frame-loading {
      display: flex;
    }

    .frame-wrap iframe {
      position: relative;
      z-index: 2;

      display: block;

      width: 100%;
      height: 100%;

      border: 0;

      background: #fff;

      opacity: 1;

      transition:
        opacity 0.18s ease;
    }

    .frame-wrap.is-loading iframe {
      opacity: 0;
    }

    @keyframes frameSpin {
      to {
        transform: rotate(360deg);
      }
    }

    /* =========================================================
       NAVIGATION - MOBILE DEFAULT
    ========================================================= */

    .bottom-nav {
      position: fixed;

      left: 0;
      right: 0;
      bottom: 0;

      z-index: 50;

      height:
        calc(
          var(--bottom-nav-height) +
          env(safe-area-inset-bottom)
        );

      display: grid;

      grid-template-columns:
        repeat(4, 1fr);

      gap: 6px;

      padding:
        8px
        8px
        calc(
          8px +
          env(safe-area-inset-bottom)
        );

      border-top:
        1px solid
        rgba(229, 231, 235, 0.95);

      background:
        rgba(255, 255, 255, 0.94);

      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);

      box-shadow:
        0 -10px 30px
        rgba(15, 23, 42, 0.08);
    }

    .nav-btn {
      min-width: 0;

      height: 100%;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;

      gap: 4px;

      padding: 5px;

      border-radius: 16px;

      background: transparent;

      color: var(--muted-2);

      font-size: 10.5px;
      font-weight: 800;

      transition:
        background 0.16s ease,
        color 0.16s ease,
        transform 0.16s ease;
    }

    .nav-btn:hover {
      background: #f8fafc;
    }

    .nav-btn:active {
      transform: scale(0.97);
    }

    .nav-btn .nav-icon {
      font-size: 20px;
      line-height: 1;
    }

    /*
     * Tất cả module chưa active dùng cùng màu trung tính.
     */
    .nav-btn.locked,
    .nav-btn.party {
      color: var(--muted-2);
    }

    .nav-btn.active,
    .nav-btn.active.locked,
    .nav-btn.active.party {
      background: var(--red-soft);
      color: var(--red);
    }

    /* =========================================================
       PASSWORD MODAL
    ========================================================= */

    .lock-layer {
      position: fixed;
      inset: 0;

      z-index: 99999;

      display: none;

      align-items: center;
      justify-content: center;

      padding: 18px;

      background:
        rgba(17, 24, 39, 0.64);

      pointer-events: auto;
      touch-action: auto;
    }

    .lock-box {
      position: relative;
      z-index: 100000;

      width: 100%;
      max-width: 370px;

      padding: 22px;

      border-radius: 26px;

      background: #fff;

      box-shadow:
        0 24px 60px
        rgba(0, 0, 0, 0.32);

      pointer-events: auto;
      touch-action: auto;
    }

    .lock-icon {
      width: 58px;
      height: 58px;

      margin: 0 auto 13px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 19px;

      background: #fef2f2;
      color: var(--red);

      font-size: 28px;
    }

    .lock-box h2 {
      margin: 0 0 8px;

      color: var(--dark);

      text-align: center;

      font-size: 20px;
      line-height: 1.25;

      font-weight: 900;
    }

    .lock-box p {
      margin: 0 0 16px;

      color: var(--muted);

      text-align: center;

      font-size: 13px;
      line-height: 1.5;

      font-weight: 500;
    }

    .password-input {
      position: relative;
      z-index: 100001;

      width: 100%;
      height: 52px;

      padding: 0 14px;

      border:
        1px solid #d1d5db;

      border-radius: 15px;

      outline: none;

      background: #fff;
      color: #111827;

      font-size: 16px;
      font-weight: 700;

      pointer-events: auto;
      touch-action: manipulation;

      -webkit-user-select: text;
      user-select: text;

      -webkit-appearance: none;
      appearance: none;
    }

    .password-input:focus {
      border-color: var(--red);

      box-shadow:
        0 0 0 4px
        rgba(185, 28, 28, 0.12);
    }

    .error-text {
      display: none;

      margin-top: 10px;

      color: var(--red);

      text-align: center;

      font-size: 13px;
      font-weight: 800;
    }

    .lock-actions {
      position: relative;
      z-index: 100001;

      display: flex;

      gap: 10px;

      margin-top: 15px;
    }

    .lock-actions button {
      flex: 1;

      height: 44px;

      border-radius: 14px;

      font-size: 14px;
      font-weight: 900;

      pointer-events: auto;
      touch-action: manipulation;
    }

    .btn-cancel {
      background: #f3f4f6;
      color: #374151;
    }

    .btn-open {
      background: var(--red);
      color: #fff;
    }

    /* =========================================================
       UPDATE MODAL
    ========================================================= */

    .update-layer {
      position: fixed;
      inset: 0;

      z-index: 90000;

      display: none;

      align-items: center;
      justify-content: center;

      padding: 18px;

      background:
        rgba(17, 24, 39, 0.64);
    }

    .update-box {
      width: 100%;
      max-width: 380px;

      padding: 22px;

      border-radius: 26px;

      background: #fff;

      box-shadow:
        0 24px 60px
        rgba(0, 0, 0, 0.32);
    }

    .update-icon {
      width: 58px;
      height: 58px;

      margin: 0 auto 13px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 19px;

      background: #eff6ff;
      color: #2563eb;

      font-size: 28px;
    }

    .update-box h2 {
      margin: 0 0 8px;

      color: #111827;

      text-align: center;

      font-size: 20px;
      line-height: 1.25;

      font-weight: 900;
    }

    .update-box p {
      margin: 0 0 16px;

      color: #6b7280;

      text-align: center;

      font-size: 13px;
      line-height: 1.5;

      font-weight: 500;
    }

    .update-actions {
      display: flex;

      gap: 10px;

      margin-top: 15px;
    }

    .update-actions button {
      flex: 1;

      height: 44px;

      border-radius: 14px;

      font-size: 14px;
      font-weight: 900;
    }

    .btn-later {
      background: #f3f4f6;
      color: #374151;
    }

    .btn-update {
      background: #991b1b;
      color: #fff;
    }

    .btn-update:disabled {
      opacity: 0.65;
      cursor: wait;
    }

    /* =========================================================
       TABLET
    ========================================================= */

    @media
    (min-width: 768px)
    and
    (max-width: 1023px) {

      .app-header {
        padding-left: 24px;
        padding-right: 24px;
      }

      .home-scroll {
        padding: 24px;
      }

      .home-container {
        max-width: 860px;
      }

      .quick-panel {
        padding: 28px;
      }

      .quick-panel h3 {
        font-size: 32px;
      }

      .app-grid {
        gap: 18px;
      }

      .app-card {
        min-height: 180px;

        padding: 23px;
      }

      .app-card h3 {
        font-size: 21px;
      }

      .bottom-nav {
        left: 50%;
        right: auto;
        bottom: 18px;

        width:
          min(
            560px,
            calc(100% - 32px)
          );

        height: 76px;

        padding: 8px;

        transform:
          translateX(-50%);

        border:
          1px solid
          rgba(229, 231, 235, 0.95);

        border-radius: 26px;
      }

      .content {
        padding-bottom: 104px;
      }
    }

    /* =========================================================
       DESKTOP - HOME
    ========================================================= */

    @media (min-width: 1024px) {

      .app {
        background:
          radial-gradient(
            circle at 0% 0%,
            rgba(185, 28, 28, 0.12),
            transparent 30%
          ),
          radial-gradient(
            circle at 100% 100%,
            rgba(37, 99, 235, 0.14),
            transparent 36%
          ),
          linear-gradient(
            180deg,
            #fff8f8 0%,
            #f8fafc 46%,
            #eaf0ff 100%
          );
      }

      .app-header {
        padding: 14px 32px;

        transition:
          padding 0.18s ease;
      }

      .header-row {
        width:
          min(
            1320px,
            calc(100vw - 64px)
          );

        margin: 0 auto;

        transition:
          width 0.18s ease;
      }

      .logo {
        width: 54px;
        height: 54px;

        border-radius: 18px;

        transition:
          width 0.18s ease,
          height 0.18s ease;
      }

      .header-text h1 {
        font-size: 19px;
      }

      .header-text p {
        font-size: 12px;
      }

      .status-dot {
        padding: 8px 13px;

        font-size: 12px;
      }

      .content {
        padding-bottom: 118px;

        transition:
          padding 0.18s ease;
      }

      .home-scroll {
        display: flex;

        align-items: flex-start;
        justify-content: center;

        padding:
          30px
          32px
          34px;
      }

      .home-container {
        width:
          min(
            1280px,
            calc(100vw - 96px)
          );

        max-width: none;

        display: grid;

        grid-template-columns:
          minmax(420px, 0.9fr)
          minmax(560px, 1.1fr);

        grid-template-areas:
          "hero cards"
          "footer footer";

        align-items: stretch;

        gap: 22px 28px;

        margin: 0 auto;
      }

      .section-title {
        display: none;
      }

      .quick-panel {
        grid-area: hero;

        min-height: 500px;
        height: 100%;

        display: flex;
        align-items: center;

        margin: 0;

        padding: 36px;

        border-radius: 30px;
      }

      .quick-chip {
        margin-bottom: 18px;

        padding: 9px 14px;

        font-size: 13px;
      }

      .quick-panel h3 {
        max-width: 560px;

        font-size: 42px;
        line-height: 1.16;

        letter-spacing: -1px;
      }

      .quick-panel p {
        max-width: 560px;

        margin-top: 16px;

        font-size: 15px;
        line-height: 1.7;
      }

      .app-grid {
        grid-area: cards;

        display: grid;

        grid-template-columns: 1fr;

        gap: 16px;

        margin: 0;
      }

      .app-card {
        min-height: 156px;

        align-items: center;

        gap: 18px;

        padding: 22px;

        border-radius: 28px;
      }

      .app-icon {
        width: 62px;
        height: 62px;

        margin-bottom: 0;

        border-radius: 22px;

        font-size: 28px;
      }

      .app-card h3 {
        font-size: 23px;
        line-height: 1.25;
      }

      .app-card p {
        max-width: 560px;

        font-size: 13.8px;
        line-height: 1.6;
      }

      .badge {
        padding: 7px 11px;

        font-size: 12px;
      }

      .mini-tags span {
        padding: 5px 9px;

        font-size: 11px;
      }

      .app-action {
        margin-top: 12px;

        font-size: 14px;
      }

      .footer {
        grid-area: footer;

        margin-top: 0;

        padding-top: 2px;
      }

      /*
       * Dock dưới chỉ dùng khi đang ở Trang chủ.
       */
      .bottom-nav {
        left: 50%;
        right: auto;

        bottom: 24px;

        width: 620px;
        height: 78px;

        padding: 8px;

        transform:
          translateX(-50%);

        border:
          1px solid
          rgba(229, 231, 235, 0.95);

        border-radius: 28px;
      }

      .nav-btn {
        border-radius: 20px;

        font-size: 11.5px;
      }

      .nav-btn .nav-icon {
        font-size: 22px;
      }

      /* =====================================================
         DESKTOP WORKSPACE MODE
         Khi mở Văn bản / Công lệnh / Đảng
      ===================================================== */

      .app.workspace-mode {
        background:
          linear-gradient(
            180deg,
            #f8fafc 0%,
            #eef3f9 100%
          );
      }

      /*
       * Header được thu gọn khi làm việc trong module.
       */
      .app.workspace-mode
      .app-header {
        padding:
          9px
          28px;
      }

      .app.workspace-mode
      .header-row {
        width:
          min(
            1600px,
            calc(100vw - 48px)
          );
      }

      .app.workspace-mode
      .logo {
        width: 44px;
        height: 44px;

        border-radius: 14px;
      }

      .app.workspace-mode
      .header-text h1 {
        font-size: 17px;
      }

      .app.workspace-mode
      .header-text p {
        font-size: 11px;
      }

      .app.workspace-mode
      .status-dot {
        padding: 7px 11px;

        font-size: 11px;
      }

      /*
       * Không chừa khoảng cho dock dưới.
       * Chừa bên trái cho module rail.
       */
      .app.workspace-mode
      .content {
        padding:
          18px
          22px
          18px
          calc(
            var(--workspace-left) +
            var(--workspace-rail-width) +
            18px
          );
      }

      .app.workspace-mode
      .view.active {
        overflow: visible;
      }

      .app.workspace-mode
      .workspace-stage {
        width: 100%;
        height: 100%;

        display: flex;

        align-items: stretch;
        justify-content: center;
      }

      /*
       * Khung ứng dụng con.
       */
      .app.workspace-mode
      .frame-wrap {
        width: 100%;
        max-width:
          var(--workspace-frame-max);

        height: 100%;

        border:
          1px solid
          rgba(203, 213, 225, 0.88);

        border-radius: 22px;

        background: #fff;

        box-shadow:
          0 18px 46px
          rgba(15, 23, 42, 0.10);

        overflow: hidden;
      }

      /*
       * Dock dưới biến thành module rail bên trái.
       */
      .app.workspace-mode
      .bottom-nav {
        top:
          calc(
            var(--live-header-height) +
            18px
          );

        bottom: 18px;

        left:
          var(--workspace-left);

        right: auto;

        width:
          var(--workspace-rail-width);

        height: auto;

        display: flex;

        flex-direction: column;

        align-items: stretch;
        justify-content: flex-start;

        gap: 8px;

        padding: 10px 8px;

        transform: none;

        border:
          1px solid
          rgba(203, 213, 225, 0.88);

        border-radius: 22px;

        background:
          rgba(255, 255, 255, 0.95);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        box-shadow:
          0 14px 34px
          rgba(15, 23, 42, 0.10);
      }

      .app.workspace-mode
      .nav-btn {
        flex: 0 0 auto;

        width: 100%;
        height: 72px;

        gap: 6px;

        padding: 8px 4px;

        border-radius: 16px;

        color: var(--muted-2);

        font-size: 10.5px;
        line-height: 1.25;

        text-align: center;
      }

      .app.workspace-mode
      .nav-btn .nav-icon {
        font-size: 22px;
      }

      .app.workspace-mode
      .nav-btn.active,
      .app.workspace-mode
      .nav-btn.active.locked,
      .app.workspace-mode
      .nav-btn.active.party {
        background: var(--red-soft);
        color: var(--red);

        box-shadow:
          inset 0 0 0 1px
          rgba(185, 28, 28, 0.06);
      }
    }

    /* =========================================================
       LARGE DESKTOP
    ========================================================= */

    @media (min-width: 1500px) {

      .home-container {
        width:
          min(
            1340px,
            calc(100vw - 140px)
          );

        grid-template-columns:
          minmax(500px, 1fr)
          minmax(680px, 1.05fr);

        gap: 24px 32px;
      }

      .quick-panel {
        min-height: 520px;

        padding: 42px;
      }

      .quick-panel h3 {
        font-size: 46px;
      }

      .app-card {
        min-height: 164px;
      }
    }

    /* =========================================================
       DESKTOP THẤP
    ========================================================= */

    @media
    (min-width: 1024px)
    and
    (max-height: 820px) {

      .home-scroll {
        align-items: flex-start;

        padding-top: 22px;
      }

      .quick-panel {
        min-height: 420px;

        padding: 30px;
      }

      .quick-panel h3 {
        font-size: 36px;
      }

      .app-card {
        min-height: 132px;

        padding: 18px;
      }

      .app-icon {
        width: 54px;
        height: 54px;

        font-size: 25px;
      }

      .app-card h3 {
        font-size: 21px;
      }

      .app-card p {
        font-size: 13px;
      }

      .mini-tags {
        margin-top: 7px;
      }

      .app-action {
        margin-top: 8px;
      }

      .app:not(.workspace-mode)
      .bottom-nav {
        bottom: 14px;
      }

      .app.workspace-mode
      .content {
        padding-top: 12px;
        padding-bottom: 12px;
      }

      .app.workspace-mode
      .bottom-nav {
        top:
          calc(
            var(--live-header-height) +
            12px
          );

        bottom: 12px;
      }

      .app.workspace-mode
      .nav-btn {
        height: 64px;
      }
    }

    /* =========================================================
       DESKTOP NHỎ
    ========================================================= */

    @media
    (min-width: 1024px)
    and
    (max-width: 1180px) {

      :root {
        --workspace-rail-width: 78px;
      }

      .app.workspace-mode
      .content {
        padding-right: 14px;

        padding-left:
          calc(
            var(--workspace-left) +
            var(--workspace-rail-width) +
            12px
          );
      }

      .app.workspace-mode
      .nav-btn {
        height: 68px;

        font-size: 9.5px;
      }

      .app.workspace-mode
      .nav-btn .nav-icon {
        font-size: 20px;
      }

      .app.workspace-mode
      .frame-wrap {
        border-radius: 18px;
      }
    }

    /* =========================================================
       GIẢM CHUYỂN ĐỘNG
    ========================================================= */

    @media
    (prefers-reduced-motion: reduce) {

      *,
      *::before,
      *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.001ms !important;
      }
    }
  </style>
</head>

<body>

  <div
    id="appShell"
    class="app"
  >

    <!-- =====================================================
         HEADER
    ====================================================== -->

    <header
      id="appHeader"
      class="app-header"
    >

      <div class="header-row">

        <div class="logo">

          <img
            src="icon-1024.png?v=1.4"
            alt="Logo Tân Hiệp"
            onerror="this.remove(); this.parentElement.textContent='TH';"
          />

        </div>

        <div class="header-text">

          <h1>
            Trung tâm Bảo trợ xã hội Tân Hiệp
          </h1>

          <p>
            Cổng điều hành số nội bộ
          </p>

        </div>

        <div
          id="networkStatus"
          class="status-dot"
        >
          ● Online
        </div>

      </div>

    </header>

    <!-- =====================================================
         CONTENT
    ====================================================== -->

    <main class="content">

      <!-- ===================================================
           HOME
      ==================================================== -->

      <section
        id="viewHome"
        class="view active"
      >

        <div class="home-scroll">

          <div class="home-container">

            <div class="section-title">

              <h2>
                Hệ thống điều hành nội bộ
              </h2>

              <p>
                Theo dõi nhiệm vụ, công lệnh,
                văn bản Đảng và tiến độ xử lý công việc.
              </p>

            </div>

            <section class="quick-panel">

              <div class="quick-panel-content">

                <div class="quick-chip">
                  🧩 Chuyển đổi số hành chính
                </div>

                <h3>
                  Hệ thống điều hành nhanh
                </h3>

                <p>
                  Tập trung các tiện ích phục vụ nhắc việc,
                  xử lý văn bản, quản lý công lệnh và quản lý
                  văn bản Đảng trên cùng một cổng điều hành
                  nội bộ của Trung tâm.
                </p>

              </div>

            </section>

            <section class="app-grid">

              <!-- VĂN BẢN -->

              <button
                class="app-card"
                type="button"
                onclick="moTab('vanban')"
              >

                <div class="app-icon doc">
                  📄
                </div>

                <div class="app-content">

                  <div class="app-topline">

                    <h3>
                      Nhắc việc, xử lý văn bản
                    </h3>

                    <span class="badge open">
                      Xem nhanh
                    </span>

                  </div>

                  <p>
                    Theo dõi tiến độ xử lý văn bản,
                    cảnh báo sắp hạn, quá hạn và tổng hợp
                    kết quả làm căn cứ đánh giá KPI.
                  </p>

                  <div class="mini-tags">

                    <span class="tag-blue">
                      Sắp hạn
                    </span>

                    <span class="tag-red">
                      Quá hạn
                    </span>

                    <span class="tag-green">
                      KPI
                    </span>

                  </div>

                  <div class="app-action">

                    <span>
                      Mở trong ứng dụng
                    </span>

                    <span>
                      →
                    </span>

                  </div>

                </div>

              </button>

              <!-- CÔNG LỆNH -->

              <button
                class="app-card"
                type="button"
                onclick="yeuCauMatKhauCongLenh()"
              >

                <div class="app-icon car">
                  🚗
                </div>

                <div class="app-content">

                  <div class="app-topline">

                    <h3>
                      Quản lý công lệnh
                    </h3>

                    <span class="badge lock">
                      Có mật khẩu
                    </span>

                  </div>

                  <p>
                    Cấp số, tra cứu, in và theo dõi giao nhận
                    Giấy giới thiệu, Công lệnh, Giấy đi đường.
                  </p>

                  <div class="mini-tags">

                    <span class="tag-orange">
                      Cấp số
                    </span>

                    <span class="tag-blue">
                      Tra cứu
                    </span>

                    <span class="tag-green">
                      Giao nhận
                    </span>

                  </div>

                  <div class="app-action">

                    <span>
                      Mở trong ứng dụng
                    </span>

                    <span>
                      →
                    </span>

                  </div>

                </div>

              </button>

              <!-- ĐẢNG -->

              <button
                class="app-card"
                type="button"
                onclick="moTab('dang')"
              >

                <div class="app-icon party">
                  🏛️
                </div>

                <div class="app-content">

                  <div class="app-topline">

                    <h3>
                      Quản lý văn bản Đảng
                    </h3>

                    <span class="badge internal">
                      Nội bộ
                    </span>

                  </div>

                  <p>
                    Đăng ký, tra cứu, lọc nhật ký và quản lý
                    văn bản đi, văn bản đến của Đảng ủy Trung tâm.
                  </p>

                  <div class="mini-tags">

                    <span class="tag-red">
                      Văn bản đi
                    </span>

                    <span class="tag-purple">
                      Văn bản đến
                    </span>

                    <span class="tag-blue">
                      Nhật ký
                    </span>

                  </div>

                  <div class="app-action">

                    <span>
                      Mở trong ứng dụng
                    </span>

                    <span>
                      →
                    </span>

                  </div>

                </div>

              </button>

            </section>

            <div class="footer">

              Trung tâm Bảo trợ xã hội Tân Hiệp

              <div
                id="versionDisplay"
                class="version"
              >
                Phiên bản: 1.4
              </div>

            </div>

          </div>

        </div>

      </section>

      <!-- ===================================================
           VĂN BẢN
      ==================================================== -->

      <section
        id="viewVanBan"
        class="view"
      >

        <div class="workspace-stage">

          <div
            id="wrapVanBan"
            class="frame-wrap"
          >

            <div class="frame-loading">
              Đang mở Nhắc việc, xử lý văn bản...
            </div>

            <iframe
              id="frameVanBan"
              src="about:blank"
              title="Nhắc việc, xử lý văn bản"
              allow="clipboard-read; clipboard-write"
            ></iframe>

          </div>

        </div>

      </section>

      <!-- ===================================================
           CÔNG LỆNH
      ==================================================== -->

      <section
        id="viewCongLenh"
        class="view"
      >

        <div class="workspace-stage">

          <div
            id="wrapCongLenh"
            class="frame-wrap"
          >

            <div class="frame-loading">
              Đang mở Quản lý công lệnh...
            </div>

            <iframe
              id="frameCongLenh"
              src="about:blank"
              title="Quản lý công lệnh"
              allow="clipboard-read; clipboard-write"
            ></iframe>

          </div>

        </div>

      </section>

      <!-- ===================================================
           ĐẢNG
      ==================================================== -->

      <section
        id="viewDang"
        class="view"
      >

        <div class="workspace-stage">

          <div
            id="wrapDang"
            class="frame-wrap"
          >

            <div class="frame-loading">
              Đang mở Quản lý văn bản Đảng...
            </div>

            <iframe
              id="frameDang"
              src="about:blank"
              title="Quản lý văn bản Đảng"
              allow="clipboard-read; clipboard-write"
            ></iframe>

          </div>

        </div>

      </section>

    </main>

    <!-- =====================================================
         NAVIGATION
         Mobile: bottom nav
         Desktop Home: bottom dock
         Desktop Module: left rail
    ====================================================== -->

    <nav
      class="bottom-nav"
      aria-label="Điều hướng chính"
    >

      <button
        id="navHome"
        class="nav-btn active"
        type="button"
        onclick="moTab('home')"
        aria-label="Trang chủ"
      >

        <span class="nav-icon">
          🏠
        </span>

        <span>
          Trang chủ
        </span>

      </button>

      <button
        id="navVanBan"
        class="nav-btn"
        type="button"
        onclick="moTab('vanban')"
        aria-label="Văn bản"
      >

        <span class="nav-icon">
          📄
        </span>

        <span>
          Văn bản
        </span>

      </button>

      <button
        id="navCongLenh"
        class="nav-btn locked"
        type="button"
        onclick="yeuCauMatKhauCongLenh()"
        aria-label="Công lệnh"
      >

        <span class="nav-icon">
          🚗
        </span>

        <span>
          Công lệnh
        </span>

      </button>

      <button
        id="navDang"
        class="nav-btn party"
        type="button"
        onclick="moTab('dang')"
        aria-label="Đảng"
      >

        <span class="nav-icon">
          🏛️
        </span>

        <span>
          Đảng
        </span>

      </button>

    </nav>

  </div>

  <!-- =======================================================
       PASSWORD MODAL
  ======================================================== -->

  <div
    id="lockLayer"
    class="lock-layer"
    role="dialog"
    aria-modal="true"
    aria-labelledby="lockTitle"
  >

    <div class="lock-box">

      <div class="lock-icon">
        🔐
      </div>

      <h2 id="lockTitle">
        Xác thực Công lệnh
      </h2>

      <p>
        Vui lòng nhập mật khẩu để truy cập
        hệ thống Quản lý công lệnh.
      </p>

      <input
        id="passwordInput"
        class="password-input"
        type="password"
        placeholder="Nhập mật khẩu"
        autocomplete="off"
        inputmode="text"
        enterkeyhint="go"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
      />

      <div
        id="errorText"
        class="error-text"
      >
        Mật khẩu không đúng.
        Vui lòng kiểm tra lại.
      </div>

      <div class="lock-actions">

        <button
          class="btn-cancel"
          type="button"
          onclick="dongHopMatKhau()"
        >
          Hủy
        </button>

        <button
          class="btn-open"
          type="button"
          onclick="kiemTraMatKhauCongLenh()"
        >
          Mở
        </button>

      </div>

    </div>

  </div>

  <!-- =======================================================
       UPDATE MODAL
  ======================================================== -->

  <div
    id="updateLayer"
    class="update-layer"
    role="dialog"
    aria-modal="true"
    aria-labelledby="updateTitle"
  >

    <div class="update-box">

      <div class="update-icon">
        ⬆️
      </div>

      <h2 id="updateTitle">
        Có bản cập nhật mới
      </h2>

      <p id="updateMessage">
        Ứng dụng Tân Hiệp vừa có phiên bản mới.
        Vui lòng cập nhật để sử dụng phiên bản mới nhất.
      </p>

      <div class="update-actions">

        <button
          class="btn-later"
          type="button"
          onclick="dongThongBaoCapNhat()"
        >
          Để sau
        </button>

        <button
          id="updateButton"
          class="btn-update"
          type="button"
          onclick="capNhatUngDung()"
        >
          Cập nhật ngay
        </button>

      </div>

    </div>

  </div>

  <!-- =======================================================
       JAVASCRIPT
  ======================================================== -->

  <script>
    "use strict";

    /* =======================================================
       VERSION
    ======================================================== */

    const APP_CODE_VERSION =
      "1.4";

    const APP_CACHE_PREFIX =
      "tan-hiep-mobile-";

    const UPDATE_STORAGE_KEY =
      "tanHiepUpdateVersion";

    const CODE_STORAGE_KEY =
      "tanHiepCodeVersion";


    /* =======================================================
       LINK HỆ THỐNG CON
    ======================================================== */

    const LINK_VAN_BAN =
      "https://thanhbds2011-droid.github.io/dashboard-van-ban-tanhiep/";

    const LINK_CONG_LENH =
      "https://thanhbds2011-droid.github.io/CONGLENH_TANHIEP_2026/";

    const LINK_DANG =
      "https://thanhbds2011-droid.github.io/quan-ly-van-ban-dang/";

    const MAT_KHAU_CONG_LENH =
      "123456";


    /* =======================================================
       DOM
    ======================================================== */

    const appShell =
      document.getElementById(
        "appShell"
      );

    const appHeader =
      document.getElementById(
        "appHeader"
      );


    const viewHome =
      document.getElementById(
        "viewHome"
      );

    const viewVanBan =
      document.getElementById(
        "viewVanBan"
      );

    const viewCongLenh =
      document.getElementById(
        "viewCongLenh"
      );

    const viewDang =
      document.getElementById(
        "viewDang"
      );


    const navHome =
      document.getElementById(
        "navHome"
      );

    const navVanBan =
      document.getElementById(
        "navVanBan"
      );

    const navCongLenh =
      document.getElementById(
        "navCongLenh"
      );

    const navDang =
      document.getElementById(
        "navDang"
      );


    const frameVanBan =
      document.getElementById(
        "frameVanBan"
      );

    const frameCongLenh =
      document.getElementById(
        "frameCongLenh"
      );

    const frameDang =
      document.getElementById(
        "frameDang"
      );


    const wrapVanBan =
      document.getElementById(
        "wrapVanBan"
      );

    const wrapCongLenh =
      document.getElementById(
        "wrapCongLenh"
      );

    const wrapDang =
      document.getElementById(
        "wrapDang"
      );


    const lockLayer =
      document.getElementById(
        "lockLayer"
      );

    const passwordInput =
      document.getElementById(
        "passwordInput"
      );

    const errorText =
      document.getElementById(
        "errorText"
      );


    const updateLayer =
      document.getElementById(
        "updateLayer"
      );

    const updateTitle =
      document.getElementById(
        "updateTitle"
      );

    const updateMessage =
      document.getElementById(
        "updateMessage"
      );

    const updateButton =
      document.getElementById(
        "updateButton"
      );


    const networkStatus =
      document.getElementById(
        "networkStatus"
      );

    const versionDisplay =
      document.getElementById(
        "versionDisplay"
      );


    /* =======================================================
       STATE
    ======================================================== */

    let daTaiVanBan =
      false;

    let daTaiCongLenh =
      false;

    let daTaiDang =
      false;

    let daMoKhoaCongLenh =
      sessionStorage.getItem(
        "moKhoaCongLenh"
      ) === "true";

    let phienBanMoiNhat =
      null;

    let tabHienTai =
      "home";


    /* =======================================================
       VERSION DISPLAY
    ======================================================== */

    if (versionDisplay) {

      versionDisplay.textContent =
        "Phiên bản: " +
        APP_CODE_VERSION;
    }


    /* =======================================================
       HEADER HEIGHT
       Dùng để rail desktop luôn nằm đúng dưới header.
    ======================================================== */

    function capNhatChieuCaoHeader() {

      if (!appHeader) {
        return;
      }

      const chieuCao =
        Math.ceil(
          appHeader.getBoundingClientRect().height
        );

      document.documentElement.style.setProperty(
        "--live-header-height",
        chieuCao + "px"
      );
    }


    window.addEventListener(
      "resize",
      function() {

        window.requestAnimationFrame(
          capNhatChieuCaoHeader
        );
      }
    );


    /* =======================================================
       NETWORK STATUS
    ======================================================== */

    function capNhatTrangThaiMang() {

      if (!networkStatus) {
        return;
      }

      if (navigator.onLine) {

        networkStatus.textContent =
          "● Online";

        networkStatus.classList.remove(
          "offline"
        );

      } else {

        networkStatus.textContent =
          "● Offline";

        networkStatus.classList.add(
          "offline"
        );
      }
    }


    window.addEventListener(
      "online",
      capNhatTrangThaiMang
    );

    window.addEventListener(
      "offline",
      capNhatTrangThaiMang
    );


    capNhatTrangThaiMang();


    /* =======================================================
       URL KHÔNG CACHE
    ======================================================== */

    function linkKhongCache(link) {

      try {

        const url =
          new URL(link);

        url.searchParams.set(
          "openFrom",
          "tan-hiep-mobile"
        );

        url.searchParams.set(
          "appVersion",
          APP_CODE_VERSION
        );

        url.searchParams.set(
          "_t",
          Date.now().toString()
        );

        return url.toString();

      } catch (error) {

        const dau =
          link.includes("?")
            ? "&"
            : "?";

        return (
          link +
          dau +
          "openFrom=tan-hiep-mobile" +
          "&appVersion=" +
          encodeURIComponent(
            APP_CODE_VERSION
          ) +
          "&_t=" +
          Date.now()
        );
      }
    }


    /* =======================================================
       IFRAME LOADING
    ======================================================== */

    function batDauTaiFrame(
      frame,
      wrap,
      link
    ) {

      if (!frame || !wrap) {
        return;
      }

      wrap.classList.add(
        "is-loading"
      );

      frame.src =
        linkKhongCache(link);
    }


    function ketThucTaiFrame(
      wrap
    ) {

      if (!wrap) {
        return;
      }

      window.setTimeout(
        function() {

          wrap.classList.remove(
            "is-loading"
          );

        },
        120
      );
    }


    frameVanBan.addEventListener(
      "load",
      function() {

        ketThucTaiFrame(
          wrapVanBan
        );
      }
    );


    frameCongLenh.addEventListener(
      "load",
      function() {

        ketThucTaiFrame(
          wrapCongLenh
        );
      }
    );


    frameDang.addEventListener(
      "load",
      function() {

        ketThucTaiFrame(
          wrapDang
        );
      }
    );


    /* =======================================================
       WORKSPACE MODE
    ======================================================== */

    function capNhatCheDoGiaoDien(
      tab
    ) {

      tabHienTai =
        tab;

      if (tab === "home") {

        appShell.classList.remove(
          "workspace-mode"
        );

      } else {

        appShell.classList.add(
          "workspace-mode"
        );
      }

      /*
       * CSS thay đổi kích thước header,
       * nên đo lại sau khi browser render.
       */
      window.requestAnimationFrame(
        function() {

          capNhatChieuCaoHeader();

          window.setTimeout(
            capNhatChieuCaoHeader,
            200
          );
        }
      );
    }


    /* =======================================================
       VIEW / NAVIGATION
    ======================================================== */

    function anTatCaView() {

      viewHome.classList.remove(
        "active"
      );

      viewVanBan.classList.remove(
        "active"
      );

      viewCongLenh.classList.remove(
        "active"
      );

      viewDang.classList.remove(
        "active"
      );


      navHome.classList.remove(
        "active"
      );

      navVanBan.classList.remove(
        "active"
      );

      navCongLenh.classList.remove(
        "active"
      );

      navDang.classList.remove(
        "active"
      );
    }


    function moTab(tab) {

      /*
       * Công lệnh phải xác thực trước.
       */
      if (
        tab === "conglenh" &&
        !daMoKhoaCongLenh
      ) {

        yeuCauMatKhauCongLenh();

        return;
      }


      anTatCaView();

      capNhatCheDoGiaoDien(
        tab
      );


      /* =============================
         HOME
      ============================== */

      if (tab === "home") {

        viewHome.classList.add(
          "active"
        );

        navHome.classList.add(
          "active"
        );

        return;
      }


      /* =============================
         VĂN BẢN
      ============================== */

      if (tab === "vanban") {

        if (!daTaiVanBan) {

          batDauTaiFrame(
            frameVanBan,
            wrapVanBan,
            LINK_VAN_BAN
          );

          daTaiVanBan =
            true;
        }

        viewVanBan.classList.add(
          "active"
        );

        navVanBan.classList.add(
          "active"
        );

        return;
      }


      /* =============================
         CÔNG LỆNH
      ============================== */

      if (tab === "conglenh") {

        if (!daTaiCongLenh) {

          batDauTaiFrame(
            frameCongLenh,
            wrapCongLenh,
            LINK_CONG_LENH
          );

          daTaiCongLenh =
            true;
        }

        viewCongLenh.classList.add(
          "active"
        );

        navCongLenh.classList.add(
          "active"
        );

        return;
      }


      /* =============================
         ĐẢNG
      ============================== */

      if (tab === "dang") {

        if (!daTaiDang) {

          batDauTaiFrame(
            frameDang,
            wrapDang,
            LINK_DANG
          );

          daTaiDang =
            true;
        }

        viewDang.classList.add(
          "active"
        );

        navDang.classList.add(
          "active"
        );

        return;
      }


      /*
       * Fallback.
       */
      moTab("home");
    }


    /* =======================================================
       PASSWORD CÔNG LỆNH
    ======================================================== */

    function yeuCauMatKhauCongLenh() {

      if (daMoKhoaCongLenh) {

        moTab(
          "conglenh"
        );

        return;
      }


      passwordInput.value =
        "";

      errorText.style.display =
        "none";

      lockLayer.style.display =
        "flex";


      passwordInput.removeAttribute(
        "readonly"
      );

      passwordInput.removeAttribute(
        "disabled"
      );


      /*
       * Focus ngay trong thao tác người dùng.
       * Giữ tương thích Safari/iPhone Home Screen.
       */
      try {

        passwordInput.focus({
          preventScroll: true
        });

      } catch (error) {

        passwordInput.focus();
      }


      /*
       * Fallback cho một số phiên bản iOS.
       */
      window.setTimeout(
        function() {

          if (
            lockLayer.style.display ===
            "flex"
          ) {

            try {

              passwordInput.focus({
                preventScroll: true
              });

            } catch (error) {

              passwordInput.focus();
            }
          }

        },
        80
      );
    }


    function kiemTraMatKhauCongLenh() {

      const matKhauNhap =
        passwordInput.value.trim();


      if (
        matKhauNhap !==
        MAT_KHAU_CONG_LENH
      ) {

        errorText.style.display =
          "block";

        try {

          passwordInput.focus({
            preventScroll: true
          });

        } catch (error) {

          passwordInput.focus();
        }

        return;
      }


      daMoKhoaCongLenh =
        true;


      sessionStorage.setItem(
        "moKhoaCongLenh",
        "true"
      );


      dongHopMatKhau();


      moTab(
        "conglenh"
      );
    }


    function dongHopMatKhau() {

      lockLayer.style.display =
        "none";

      passwordInput.value =
        "";

      errorText.style.display =
        "none";
    }


    passwordInput.addEventListener(
      "touchend",
      function(event) {

        event.stopPropagation();

        try {

          passwordInput.focus({
            preventScroll: true
          });

        } catch (error) {

          passwordInput.focus();
        }
      }
    );


    passwordInput.addEventListener(
      "click",
      function(event) {

        event.stopPropagation();

        try {

          passwordInput.focus({
            preventScroll: true
          });

        } catch (error) {

          passwordInput.focus();
        }
      }
    );


    passwordInput.addEventListener(
      "input",
      function() {

        if (
          errorText.style.display ===
          "block"
        ) {

          errorText.style.display =
            "none";
        }
      }
    );


    passwordInput.addEventListener(
      "keydown",
      function(event) {

        if (event.key === "Enter") {

          event.preventDefault();

          kiemTraMatKhauCongLenh();
        }


        if (event.key === "Escape") {

          dongHopMatKhau();
        }
      }
    );


    lockLayer.addEventListener(
      "click",
      function(event) {

        if (
          event.target ===
          lockLayer
        ) {

          dongHopMatKhau();
        }
      }
    );


    /* =======================================================
       VERSION UTILS
    ======================================================== */

    function chuanHoaPhienBan(
      version
    ) {

      return String(
        version || ""
      )
        .trim()
        .replace(/^v/i, "");
    }


    /* =======================================================
       UPDATE MODAL
    ======================================================== */

    function dongThongBaoCapNhat() {

      updateLayer.style.display =
        "none";
    }


    /* =======================================================
       KIỂM TRA VERSION.JSON
    ======================================================== */

    async function kiemTraBanCapNhat() {

      try {

        const versionUrl =
          new URL(
            "version.json",
            window.location.href
          );


        versionUrl.searchParams.set(
          "_t",
          Date.now().toString()
        );


        const response =
          await fetch(
            versionUrl.toString(),
            {
              method: "GET",

              cache: "no-store",

              headers: {

                "Cache-Control":
                  "no-cache, no-store, must-revalidate",

                "Pragma":
                  "no-cache"
              }
            }
          );


        if (!response.ok) {
          return;
        }


        const data =
          await response.json();


        if (
          !data ||
          !data.version
        ) {

          return;
        }


        const versionServer =
          chuanHoaPhienBan(
            data.version
          );


        const versionCode =
          chuanHoaPhienBan(
            APP_CODE_VERSION
          );


        phienBanMoiNhat =
          versionServer;


        /*
         * So trực tiếp version trên server
         * với APP_CODE_VERSION.
         *
         * Nếu iPhone còn giữ HTML 1.3
         * trong khi version.json là 1.4,
         * modal vẫn xuất hiện.
         */
        if (
          versionServer &&
          versionServer !== versionCode
        ) {

          if (data.title) {

            updateTitle.textContent =
              data.title;
          }


          if (data.message) {

            updateMessage.textContent =
              data.message;
          }


          updateLayer.style.display =
            "flex";

          return;
        }


        localStorage.setItem(
          UPDATE_STORAGE_KEY,
          versionServer
        );


        localStorage.setItem(
          CODE_STORAGE_KEY,
          APP_CODE_VERSION
        );


      } catch (error) {

        console.log(
          "Không kiểm tra được bản cập nhật:",
          error
        );
      }
    }


    /* =======================================================
       XÓA CACHE RIÊNG TAN-HIEP-MOBILE
    ======================================================== */

    async function xoaCacheUngDung() {

      if (!("caches" in window)) {
        return;
      }


      try {

        const keys =
          await caches.keys();


        const cacheCuaApp =
          keys.filter(
            function(key) {

              return key.startsWith(
                APP_CACHE_PREFIX
              );
            }
          );


        await Promise.all(

          cacheCuaApp.map(
            function(key) {

              return caches.delete(
                key
              );
            }
          )

        );


      } catch (error) {

        console.log(
          "Không thể xóa cache ứng dụng:",
          error
        );
      }
    }


    /* =======================================================
       HỦY SERVICE WORKER RIÊNG APP
    ======================================================== */

    async function huyServiceWorkerUngDung() {

      if (
        !(
          "serviceWorker" in
          navigator
        )
      ) {

        return;
      }


      try {

        const registrations =
          await navigator
            .serviceWorker
            .getRegistrations();


        const appScope =
          new URL(
            "./",
            window.location.href
          ).pathname;


        const registrationsCuaApp =
          registrations.filter(
            function(registration) {

              try {

                const scopePath =
                  new URL(
                    registration.scope
                  ).pathname;


                return (
                  scopePath === appScope
                );


              } catch (error) {

                return false;
              }
            }
          );


        await Promise.all(

          registrationsCuaApp.map(
            function(registration) {

              return registration.unregister();
            }
          )

        );


      } catch (error) {

        console.log(
          "Không thể hủy service worker:",
          error
        );
      }
    }


    /* =======================================================
       CẬP NHẬT NGAY
    ======================================================== */

    async function capNhatUngDung(
      versionMoi
    ) {

      const targetVersion =
        chuanHoaPhienBan(
          versionMoi ||
          phienBanMoiNhat ||
          APP_CODE_VERSION
        );


      try {

        if (updateButton) {

          updateButton.disabled =
            true;

          updateButton.textContent =
            "Đang cập nhật...";
        }


        /*
         * Chỉ xóa cache của tan-hiep-mobile.
         */
        await xoaCacheUngDung();


        /*
         * Chỉ unregister service worker
         * thuộc tan-hiep-mobile.
         */
        await huyServiceWorkerUngDung();


        localStorage.setItem(
          UPDATE_STORAGE_KEY,
          targetVersion
        );


        localStorage.setItem(
          CODE_STORAGE_KEY,
          targetVersion
        );


        /*
         * URL mới hoàn toàn để ép Safari/iPhone
         * lấy index.html mới.
         */
        const url =
          new URL(
            window.location.href
          );


        url.hash =
          "";

        url.search =
          "";


        url.searchParams.set(
          "v",
          targetVersion
        );


        url.searchParams.set(
          "_refresh",
          Date.now().toString()
        );


        window.location.replace(
          url.toString()
        );


      } catch (error) {

        console.log(
          "Lỗi cập nhật ứng dụng:",
          error
        );


        const url =
          new URL(
            window.location.href
          );


        url.searchParams.set(
          "_refresh",
          Date.now().toString()
        );


        window.location.replace(
          url.toString()
        );
      }
    }


    /* =======================================================
       KIỂM TRA CODE VERSION LOCAL
    ======================================================== */

    async function lamMoiBoNhoTam() {

      try {

        const banCodeDangLuu =
          localStorage.getItem(
            CODE_STORAGE_KEY
          );


        if (
          chuanHoaPhienBan(
            banCodeDangLuu
          ) !==
          chuanHoaPhienBan(
            APP_CODE_VERSION
          )
        ) {

          await xoaCacheUngDung();


          localStorage.setItem(
            CODE_STORAGE_KEY,
            APP_CODE_VERSION
          );
        }


      } catch (error) {

        console.log(
          "Không thể xử lý bộ nhớ tạm:",
          error
        );
      }
    }


    /* =======================================================
       REGISTER SERVICE WORKER
    ======================================================== */

    async function dangKyServiceWorker() {

      if (
        !(
          "serviceWorker" in
          navigator
        )
      ) {

        return;
      }


      try {

        const registration =
          await navigator
            .serviceWorker
            .register(
              "sw.js?v=" +
              encodeURIComponent(
                APP_CODE_VERSION
              ),
              {
                scope: "./",
                updateViaCache: "none"
              }
            );


        try {

          await registration.update();


        } catch (error) {

          console.log(
            "Không kiểm tra được SW mới:",
            error
          );
        }


      } catch (error) {

        console.log(
          "Không đăng ký được service worker:",
          error
        );
      }
    }


    /* =======================================================
       APP START
    ======================================================== */

    async function khoiDongUngDung() {

      capNhatChieuCaoHeader();

      capNhatTrangThaiMang();


      await lamMoiBoNhoTam();


      await dangKyServiceWorker();


      await kiemTraBanCapNhat();


      /*
       * Đo lại lần cuối sau khi font/CSS render.
       */
      window.setTimeout(
        capNhatChieuCaoHeader,
        250
      );
    }


    khoiDongUngDung();


    /* =======================================================
       APP QUAY LẠI FOREGROUND
    ======================================================== */

    document.addEventListener(
      "visibilitychange",
      function() {

        if (
          document.visibilityState ===
          "visible"
        ) {

          capNhatTrangThaiMang();

          capNhatChieuCaoHeader();

          kiemTraBanCapNhat();
        }
      }
    );


    window.addEventListener(
      "pageshow",
      function(event) {

        capNhatChieuCaoHeader();


        if (event.persisted) {

          kiemTraBanCapNhat();
        }
      }
    );

  </script>

</body>
</html>
