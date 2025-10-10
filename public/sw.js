const CACHE_NAME = "brillia-v5";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/src/main.tsx",
  "/src/index.css",
  "/vite.svg",
  "/src/assets/react.svg",
  // Images
  "/images/logo.png",
  "/images/logo.ico",
  "/images/dikie.jpg",

  // Sounds
  "/sounds/correct.mp3",
  "/sounds/error.mp3",
  "/sounds/finish.mp3",
  "/sounds/send.mp3",
  "/sounds/success.mp3",
  "/sounds/wrong.mp3",
];

self.addEventListener("install", (event) => {
  console.log("Installing service worker...");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  console.log("Activating new service worker...");
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

// Core fix: serve SPA routes from index.html
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Handle navigation (SPA routes)
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, resClone));
          return response;
        })
        .catch(() => caches.match("/index.html"))
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(request).then((response) => {
      return (
        response ||
        fetch(request).then((res) => {
          if (!res || res.status !== 200) return res;
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, resClone));
          return res;
        })
      );
    })
  );
});
