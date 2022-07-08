import axios from 'axios';

export default class Api {
  static async get(url, headers) {
    const response = await axios.get(url, {headers});
    const data = response.data;
    return data;
  }
}
