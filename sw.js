const CACHE_NAME = "cache_markforchat",
  urlsToCache = [
    "./",
    "./index.html",
    "./style.css",
    "./main.js",
    "./countries.js",
    "./img/icon.svg",
    "./img/icon.png",
    "./img/icon.ico",
  ];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).then(() => self.skipWaiting());
      })
      .catch((err) => console.log("Fallo registro de cache", err))
  );
});

self.addEventListener("activate", (e) => {
  const cacheWhiteList = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cachesNames) => {
        cachesNames.map((cacheName) => {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        });
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => res || fetch(e.request))
      .catch((err) => console.log("Error de Fetch", err))
  );
});
