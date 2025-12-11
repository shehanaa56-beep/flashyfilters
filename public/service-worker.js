// Simple service worker for caching and offline support

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("flashyfilters-cache").then((cache) => {
      // ⭐ Your original caching
      return cache.addAll(["/"]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // ⭐ Your original fallback logic
      if (response) return response;

      return fetch(event.request).catch(() => {
        // ⭐ Added minimal fallback for React routes (needed for PWA offline)
        return caches.match("/");
      });
    })
  );
});
