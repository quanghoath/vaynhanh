import axios from "axios";

const BASE_URL = "https://62e9e87d3a5f1572e870a9af.mockapi.io"

export const axiosGet = (url)=>{
    return axios.get(BASE_URL + url).then(res=> res.data);
}
export const axiosPost = (url,data)=>{
    return axios.post(BASE_URL + url,data).then(res=> res.data);
}
export const axiosDelete = (url) => {
    return axios.delete(BASE_URL + url).then(res => res.data);
}