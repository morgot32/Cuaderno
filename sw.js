'use strict';
// Cuaderno · uso sin conexión.
//  · Archivos propios: se guardan al instalar y se actualizan solos en segundo plano
//    (la versión nueva aparece la próxima vez que abras la app).
//  · Tipografías de Google y pdf.js: se guardan la primera vez que hay Internet.
//  · Las llamadas a Gemini nunca pasan por aquí.
const SHELL = 'cuaderno-shell-v1';
const EXTRA = 'cuaderno-extra-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];
const CDN_HOSTS = ['cdnjs.cloudflare.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];
const CDN_PRELOAD = [
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Caveat:wght@400;700&family=Fira+Code:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    await (await caches.open(SHELL)).addAll(ASSETS);
    const extra = await caches.open(EXTRA);
    await Promise.allSettled(CDN_PRELOAD.map(async url => {
      const response = await fetch(new Request(url, { mode: 'no-cors' }));
      await extra.put(url, response);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keep = [SHELL, EXTRA];
    for (const key of await caches.keys()) if (key.startsWith('cuaderno-') && !keep.includes(key)) await caches.delete(key);
    await self.clients.claim();
  })());
});

async function navigation(event) {
  const cache = await caches.open(SHELL);
  const cached = await cache.match('./index.html');
  const refresh = fetch(event.request).then(async response => {
    if (response.ok) await cache.put('./index.html', response.clone());
    return response;
  }).catch(() => null);
  if (cached) { event.waitUntil(refresh); return cached; }
  return (await refresh) || new Response('Sin conexión. Abre Cuaderno una vez con Internet.', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

async function staleWhileRevalidate(event, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(event.request, { ignoreSearch: cacheName === SHELL });
  const network = fetch(event.request).then(response => {
    if (response && (response.ok || response.type === 'opaque') && response.status !== 206) cache.put(event.request, response.clone()).catch(() => {});
    return response;
  }).catch(() => null);
  if (cached) { event.waitUntil(network); return cached; }
  return (await network) || Response.error();
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (request.mode === 'navigate') { event.respondWith(navigation(event)); return; }
  const own = url.origin === self.location.origin;
  if (!own && !CDN_HOSTS.includes(url.hostname)) return;
  event.respondWith(staleWhileRevalidate(event, own ? SHELL : EXTRA));
});
