const CACHE_NAME = "app-v2";
const BASE = "/MinFramework/";

const FILES = [
    BASE,
    BASE + "index.html",
    BASE + "manifest.json",
    BASE + "css/style.css",
    BASE + "assets/camadas.png",
    BASE + "componentes/elementos.js",
    BASE + "script/script.js",
    BASE + "script/dados.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
    );
});