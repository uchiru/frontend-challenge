const API_KEY = '4b2b4636-f439-47b1-9fdb-a8abda2da619'

export default function fetchCats(page = 1, limit=10) {
    // Подгрузка данных по странице, лимиту картинов и уникальности
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&mime_types=['true']&page=${page}`, {
        headers: {
            'x-api-key': API_KEY,
        }
    }).then(res => res.json())
}
