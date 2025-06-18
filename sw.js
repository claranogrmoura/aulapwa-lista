const CACHE_NAME = "my-cache-v1";

const   URLS_TO_CACHE = [
    "/",
    "/aulapwa-lista/index.html",    
    "/aulapwa-lista/script.js",
    "/aulapwa-lista/favicon.ico",
    "/aulapwa-lista/manifest.json",
    "/aulapwa-lista/style.css",
    "/aulapwa-lista/icons/icon-192.png",
    "/aulapwa-lista/icons/icon-512.png",
    "/aulapwa-lista/offline.html",
    "/aulapwa-lista/sobre.html"

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
