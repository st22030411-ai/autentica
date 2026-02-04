const CACHE = "pwa-v1";

const FILES = [
    "/",
    "/index.html",
    "/main.css",
    "/header.js",

    "/blocks/aboutme.css",
    "/blocks/carrousel.css",
    "/blocks/gstyles.css",
    "/blocks/header.css",
    "/blocks/hero.css",

    "/fonts/Metanoia.ttf",
    "/fonts/PlayfairDisplay-Regular.ttf",

    "/assets/images/bg.png",
    "/assets/images/logo.png"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(FILES))
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request))
    );
});
