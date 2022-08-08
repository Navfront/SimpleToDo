const CACHE_PREFIX = 'my-simpletodo-'
const CACHE_VER = 'v14'
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VER}`

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll([
        '/SimpleToDo/',
        '/SimpleToDo/index.html'
      ]))
  )
})

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    // Получаем все названия кэшей
    caches.keys()
      .then(
      // Перебираем их и составляем набор промисов на удаление
        (keys) => Promise.all(
          keys.map((key) => {
            // Удаляем только те кэши,
            // которые начинаются с нашего префикса,
            // но не совпадают по версии
            if (key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME) {
              return caches.delete(key)
            }
            // Остальные не обрабатываем
            return null
          }).filter((key) => key !== null)
        )
      )
  )
})

self.addEventListener('fetch', (evt) => {
  const { request } = evt
  evt.respondWith(
    caches.match(request)
      .then((cacheResponse) => {
        // Если в кеше нашелся ответ на запрос (request),
        // возвращаем его (cacheResponse) вместо запроса к серверу
        if (cacheResponse) {
          return cacheResponse
        }
        // Если в кеше не нашелся ответ,
        // повторно вызываем fetch
        // с тем же запросом (request)
        // и возвращаем его
        return fetch(request).then((response) => {
          // Если ответа нет, или ответ со статусом отличным от 200 ОК
          // или ответ небезопасного типа (не basic), тогда просто передаем
          // ответ дальше, никак не обрабатываем
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }
          // А если ответ удовлетворяет, клонируем его
          const clonedResponse = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clonedResponse))
          return response
        })
      }
      )
  )
})
