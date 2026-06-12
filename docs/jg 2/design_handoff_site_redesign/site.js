/* JG Services LLC — shared site runtime for sub-pages (vanilla).
   Renders nav + footer from window.SITE, handles scroll state, mobile menu,
   scroll-reveals, count-ups, and smooth in-page anchors. */
(function () {
  "use strict";
  var S = window.SITE;
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  var BRAND_SVG =
    '<svg class="brand-mark" viewBox="0 0 100 100" fill="none" aria-hidden="true">' +
    '<defs><linearGradient id="jgGradS" x1="0" y1="0" x2="100%" y2="100%">' +
    '<stop offset="0%" stop-color="var(--accent-a)"/><stop offset="100%" stop-color="var(--accent-b)"/>' +
    '</linearGradient></defs>' +
    '<circle cx="50" cy="50" r="48" fill="url(#jgGradS)"/>' +
    '<path d="M 35 25 L 45 25 L 45 55 Q 45 65 35 65 Q 25 65 25 55 L 32 55 Q 32 58 35 58 Q 38 58 38 55 L 38 32 L 35 32 Z" fill="white"/>' +
    '<path d="M 65 32 Q 55 32 55 42 L 55 58 Q 55 68 65 68 Q 75 68 75 58 L 75 50 L 65 50 L 65 57 L 68 57 L 68 58 Q 68 61 65 61 Q 62 61 62 58 L 62 42 Q 62 39 65 39 Q 68 39 68 42 L 75 42 Q 75 32 65 32 Z" fill="white"/></svg>';

  function icon(name, size) {
    var p = {
      menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
      close: '<path d="m6 6 12 12M18 6 6 18"/>',
      ext: '<path d="M9 5h10v10"/><path d="M19 5 8 16"/><path d="M14 19H5V10"/>',
      arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'
    }[name] || "";
    size = size || 18;
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + "</svg>";
  }

  function isActive(href) {
    var f = href.split("#")[0].toLowerCase();
    return f === here;
  }

  function buildNav() {
    var links = S.nav.map(function (l) {
      return '<a href="' + l.href + '" class="nav-link' + (isActive(l.href) ? " active" : "") + '">' + l.label + "</a>";
    }).join("");
    var html =
      '<nav class="nav" id="jg-nav">' +
      '<div class="wrap nav-inner">' +
      '<a href="index.html" class="brand">' + BRAND_SVG + '<span class="brand-word grad-text">JG Services LLC</span></a>' +
      '<div class="nav-links desktop">' + links +
      '<a href="intake.html" class="btn btn-primary" style="padding:.6rem 1.1rem;font-size:.9rem">Start a project</a>' +
      "</div>" +
      '<button class="nav-burger" id="jg-burger" aria-label="Toggle menu">' + icon("menu", 22) + "</button>" +
      "</div>" +
      '<div class="mobile-menu wrap" id="jg-mobile" style="max-height:0;transition:max-height .4s var(--ease)"><div class="inner">' +
      S.nav.map(function (l) { return '<a href="' + l.href + '">' + l.label + "</a>"; }).join("") +
      '<a href="intake.html" class="btn btn-primary" style="margin-top:.6rem;justify-content:center">Start a project</a>' +
      "</div></div>" +
      "</nav>";
    return html;
  }

  function col(title, items) {
    return '<div class="foot-col"><h5>' + title + "</h5>" +
      items.map(function (l) {
        return '<a href="' + l.href + '"' + (l.ext ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + l.label + (l.ext ? " " + icon("ext", 12) : "") + "</a>";
      }).join("") + "</div>";
  }

  function buildFooter() {
    var c = S.company, f = S.footer;
    return (
      '<footer class="footer"><div class="wrap"><div class="foot-grid">' +
      '<div class="foot-col">' +
      '<a href="index.html" class="brand" style="margin-bottom:1rem">' + BRAND_SVG + '<span class="brand-word grad-text">JG Services LLC</span></a>' +
      '<p style="color:var(--ink-300);font-size:.94rem;line-height:1.7;max-width:34ch">Custom web development for businesses that want software built right — by a developer who treats it like a family venture.</p>' +
      '<div class="foot-contact"><div><a href="mailto:' + c.email + '">' + c.email + "</a></div><div><a href=\"" + c.phoneHref + '">' + c.phone + "</a></div></div>" +
      "</div>" +
      col("Explore", f.explore) +
      col("Resources", f.resources) +
      col("Legal", f.legal) +
      col("Connect", f.connect) +
      "</div>" +
      '<div class="foot-bottom"><span>© ' + new Date().getFullYear() + " " + c.name + ". All rights reserved.</span>" +
      '<span class="mono" style="font-size:.78rem">Built with Next.js · TypeScript · Tailwind CSS</span></div>' +
      "</div></footer>"
    );
  }

  function mountChrome() {
    var h = document.getElementById("site-header");
    if (h) h.innerHTML = buildNav();
    var ft = document.getElementById("site-footer");
    if (ft) ft.innerHTML = buildFooter();

    var nav = document.getElementById("jg-nav");
    var onScroll = function () { if (nav) nav.classList.toggle("scrolled", window.scrollY > 24); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var burger = document.getElementById("jg-burger");
    var mob = document.getElementById("jg-mobile");
    var open = false;
    if (burger) burger.addEventListener("click", function () {
      open = !open;
      mob.style.maxHeight = open ? "440px" : "0px";
      burger.innerHTML = icon(open ? "close" : "menu", 22);
    });
  }

  function reveals() {
    var els = [].slice.call(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window) || document.body.classList.contains("motion-off")) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  function countUps() {
    var els = [].slice.call(document.querySelectorAll("[data-count]"));
    var run = function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
      var pre = el.getAttribute("data-prefix") || "";
      var suf = el.getAttribute("data-suffix") || "";
      if (document.body.classList.contains("motion-off")) { el.textContent = pre + target.toFixed(dec) + suf; return; }
      var t0 = performance.now(), dur = 1600;
      var tick = function (now) {
        var p = Math.min(1, (now - t0) / dur);
        var v = target * (1 - Math.pow(1 - p, 3));
        el.textContent = pre + v.toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(tick); else el.textContent = pre + target.toFixed(dec) + suf;
      };
      requestAnimationFrame(tick);
    };
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.4 });
    els.forEach(function (e) { io.observe(e); });
  }

  function smoothAnchors() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var el = document.querySelector(id);
      if (el) { e.preventDefault(); window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" }); }
    });
  }

  function init() {
    mountChrome();
    reveals();
    countUps();
    smoothAnchors();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.JGSite = { icon: icon, brandSvg: BRAND_SVG, reveals: reveals, countUps: countUps };
})();
