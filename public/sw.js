const CACHE_NAME = 'brillia-v4';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Cache all app pages
  '/brain-teasers',
  '/mini-stories',
  '/quiz-quest',
  '/wisdom-nuggets',
  '/tongue-twisters',
  '/amazing-facts',
  '/contact-developer',
  '/settings',
  '/about',
  '/help',
  '/loadinpage',
  // Cache main app assets
  '/src/main.tsx',
  '/src/index.css',
  // Cache all images
  '/images/logo.png',
  '/images/logo-bg.png',
  '/images/logo.ico',
  '/images/dikie.jpg',
  '/src/assets/images/3d-house.png',
  '/src/assets/images/available.png',
  '/src/assets/images/average.png',
  '/src/assets/images/book.png',
  '/src/assets/images/book2.png',
  '/src/assets/images/finish.png',
  '/src/assets/images/football.png',
  '/src/assets/images/playingBot.png',
  '/src/assets/images/quiz.png',
  '/src/assets/react.svg',
  '/vite.svg',
  // Cache sounds
  '/sounds/correct.mp3',
  '/sounds/error.mp3',
  '/sounds/finish.mp3',
  '/sounds/send.mp3',
  '/sounds/success.mp3',
  '/sounds/wrong.mp3',
];

self.addEventListener('install', event => {
  console.log('Service worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('All files cached');
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activating.');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    // Network first for navigation requests (HTML)
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/');
      })
    );
  } else {
    // Cache first for assets
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(res => {
          // Don't cache if not a success or not basic type
          if (!res || res.status !== 200 || res.type !== 'basic') {
            return res;
          }
          // Clone the response
          const resClone = res.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, resClone);
            });
          return res;
        });
      })
    );
  }
});
