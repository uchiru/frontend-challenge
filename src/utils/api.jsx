import axios from "axios";


export const fetchCatsApi = (page = 1 ) => {
    
    const baseURL = `https://api.thecatapi.com/v1/images/search?&limit=15&page=${page}&order=Desc?mime_types=jpg`;
    return axios.get(baseURL).then(response=>response.data).catch(error=>error)
}

// export const clientUpdateApi = async (elId, newData) => {
//     console.log(elId, newData)
//     const newDataUp  = await axios.patch(`/clients/${elId}`, newData).then(({data})=>data)
//     console.log(newDataUp)
//     return newDataUp
// }
