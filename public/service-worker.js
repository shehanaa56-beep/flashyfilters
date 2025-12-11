// public/service-worker.js

self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
  return self.clients.claim();
});

// Basic offline support
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open("flashyfilters-cache").then((cache) =>
      cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (event.request.method === "GET") {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => response);

        return response || fetchPromise;
      })
    )
  );
});
