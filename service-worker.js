// Unregister old service worker to clear cached assets
self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener("activate", function () {
  self.registration.unregister();
  self.clients.matchAll().then(function (clients) {
    clients.forEach(function (client) {
      client.navigate(client.url);
    });
  });
});
