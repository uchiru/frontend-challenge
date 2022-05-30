import axios from "axios";
const instance = axios.create({
  headers: {
    "x-api-key": "b70fca63-fb94-4eb2-8295-f5fb34f28c75"
  },
  baseURL: "https://api.thecatapi.com/v1/"
})


export const dataFromServer = () => {

  return instance
    .get(`images/search?limit=15`)
    .then((response) => response.data);
}; 