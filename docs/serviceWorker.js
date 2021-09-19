const staticDevWilla = "dev-willa-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/main.css",
  "/js/app.js",
  "/images/Willa1.jpg",
  "/images/Willa2.jpg",
  "/images/Willa3.jpg",
  "/images/Willa4.jpg",
  "/images/Willa5.jpg",
  "/images/Willa6.jpg",
  "/images/Willa7.jpg",
  "/images/Willa8.jpg",
  "/images/Willa9.jpg",
  "/images/Willa10.jpg",
  "/images/Willa11.jpg",
  "/images/Willa12.jpg",
  "/images/Willa13.jpg",
  "/images/Willa14.jpg",
  "/images/Willa15.jpg",
  "/images/Willa16.jpg",
  "/images/Willa17.jpg",
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