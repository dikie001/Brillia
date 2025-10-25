const CACHE_VERSION = "brillia-offline-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",

  // Core icons
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",

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
  "/sounds/wrong.mp3"
];

self.addEventListener("install", (event) => {
  console.log("🧱 Installing offline-ready service worker...");
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  console.log("⚡ Activating offline service worker...");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => key !== CACHE_VERSION && caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request)
          .then((response) => {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
            return response;
          })
          .catch(() => cached)
      );
    })
  );
});
