export const BASE_URL = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getMovies() {
  return fetch(`${BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(checkResponse);
}