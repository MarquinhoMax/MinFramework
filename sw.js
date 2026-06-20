const CACHE_NAME = "app-v3";
const BASE = "/MinFramework/";

const FILES = [
    BASE,
    BASE + "index.html",
    BASE + "manifest.json",
    BASE + "css/style.css",
    BASE + "assets/camadas.png",
    BASE + "componentes/elementos.js",
    BASE + "componentes/funcoes.js",
    BASE + "script/script.js",
    BASE + "script/dados.js"
];

// Instala e cria o cache
self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES))
    );
});

// Ativa imediatamente
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );

    self.clients.claim();
});

// Busca primeiro no cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});