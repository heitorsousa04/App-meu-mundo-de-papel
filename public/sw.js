const CACHE_NAME = 'mundo-de-papel-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Basic fetch handler to satisfy PWA installability requirements
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Offline content not available');
    })
  );
});
