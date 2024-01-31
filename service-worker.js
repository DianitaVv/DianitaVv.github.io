self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mi-cache').then(cache => {
      return cache.addAll([
        '/',
        './formulario.html',
        './listas.js',
        './manifest.json',
        './pagina2.html',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});