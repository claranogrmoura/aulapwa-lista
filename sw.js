const CACHE_NAME = "my-cache-v1";

const   U0RLS_TO_CACHE = [
    "/",
    "/to-do-pwa/index.html",    
    "/to-do-pwa/script.js",
    "/to-do-pwa/favicon.ico",
    "/to-do-pwa/manifest.json",
    "/to-do-pwa/style.css",
    "/to-do-pwa/icons/icon-192.png",
    "/to-do-pwa/icons/icon-512.png",
    "/to-do-pwa/offline.html"
]

self.addEventListener("install", (event) => { /////////assim q foi feito o carregamento da página é executado esse evento
    console.log("Service Worker instalado com sucesso.");

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
         return cache.addAll(URLS_TO_CACHE);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

//////cache é um armazenamento temporario 
