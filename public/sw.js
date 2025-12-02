const CACHE_VERSION = "brillia-offline-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/manifest.webmanifest",

  // SPA routes (must all map to index.html)
  "/brain-teasers",
  "/mini-stories",
  "/quiz-quest",
  "/wisdom-nuggets",
  "/tongue-twisters",
  "/amazing-facts",
  "/contact-developer",
  "/settings",
  "/about",
  "/help",

  // Images
  "/images/logo.png",
  "/images/logo.ico",
  "/images/apple.jpeg",
  "/images/icon.png",

  // Sounds
  "/sounds/correct.mp3",
  "/sounds/error.mp3",
  "/sounds/finish.mp3",
  "/sounds/send.mp3",
  "/sounds/success.mp3",
  "/sounds/wrong.mp3",

  "/vite.svg",
];

// Force-install all assets + route fallbacks
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(async (cache) => {
      await cache.addAll(ASSETS);

      // Add route fallbacks manually
      for (const route of [
        "/brain-teasers",
        "/mini-stories",
        "/quiz-quest",
        "/wisdom-nuggets",
        "/tongue-twisters",
        "/amazing-facts",
        "/contact-developer",
        "/settings",
        "/about",
        "/help",
      ]) {
        await cache.put(route, await cache.match("/index.html"));
      }

      return self.skipWaiting();
    })
  );
});

// Activation cleanup
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => key !== CACHE_VERSION && caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch handler
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Handle SPA navigation
  if (request.mode === "navigate") {
    event.respondWith(
      caches.match("/index.html").then((cached) => cached || fetch(request))
    );
    return;
  }

  // Everything else: cache-first
  event.respondWith(
    caches.match(request).then((cached) => {
      return (
        cached ||
        fetch(request)
          .then((response) => {
            caches
              .open(CACHE_VERSION)
              .then((cache) => cache.put(request, response.clone()));
            return response;
          })
          .catch(() => cached)
      );
    })
  );
});
