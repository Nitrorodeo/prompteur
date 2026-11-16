/* Fonctionnement hors ligne.
   La page passe d'abord par le réseau, pour que vos mises à jour arrivent tout de suite,
   et retombe sur la copie en cache quand il n'y a pas de réseau. Le reste est servi
   depuis le cache en priorité. */
const CACHE = "prompteur-v1";
const BASE = ["./", "./index.html", "./manifest.webmanifest",
              "./icone-192.png", "./icone-512.png", "./icone-512-masque.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(BASE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((noms) => Promise.all(noms.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const estPage = e.request.mode === "navigate" || e.request.destination === "document";

  if (estPage) {
    e.respondWith(
      fetch(e.request)
        .then((reponse) => {
          const copie = reponse.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copie));
          return reponse;
        })
        .catch(() => caches.match("./index.html")));
    return;
  }

  e.respondWith(
    caches.match(e.request).then((trouve) => trouve || fetch(e.request)
      .then((reponse) => {
        if (reponse.ok || reponse.type === "opaque") {
          const copie = reponse.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copie));
        }
        return reponse;
      })
      .catch(() => trouve)));
});
