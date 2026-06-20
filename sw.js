const CACHE_NAME = "app-v1";

const FILES = [
    "/",
    "/index.html",
    "/css/style.css",
    "/assets/camadas.png",

    "/componentes/elementos.js",
    "/componentes/funcoes.js",

    "/script/script.js",
    "/script/dados.js",

    "/manifest.json"
];
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});