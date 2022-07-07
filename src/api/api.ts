import axios from 'axios'
import {ImgResponseType} from '../components/types/apiTypes';

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',

})

// api
export const imagesAPI = {
    getImages() {
        return instance.get<Array<ImgResponseType>>('images/search?limit=20')
    }
}