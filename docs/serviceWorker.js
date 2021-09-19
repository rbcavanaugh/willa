const staticDevWilla = "dev-willa-site-v1"
const assets = [
  "/",
  "index.html",
  "main.css",
  "app.js",
  "Willa1.jpg",
  "Willa2.jpg",
  "Willa3.jpg",
  "Willa4.jpg",
  "Willa5.jpg",
  "Willa6.jpg",
  "Willa7.jpg",
  "Willa8.jpg",
  "Willa9.jpg",
  "Willa10.jpg",
  "Willa11.jpg",
  "Willa12.jpg",
  "Willa13.jpg",
  "Willa14.jpg",
  "Willa15.jpg",
  "Willa16.jpg",
  "Willa17.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevWilla).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})