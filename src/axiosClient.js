import axios from "axios";

const BASE_URL = "https://62e9e87d3a5f1572e870a9af.mockapi.io"

export const axiosGet = (url)=>{
    return axios.get(BASE_URL + url).then(res=> res.data);
}
export const axiosPost = (url,data)=>{
    return axios.post(BASE_URL + url,data).then(res=> res.data);
}
export const axiosPut = (url, data) => {
    return axios.put(BASE_URL + url, data).then(res => res.data);
}
export const axiosDelete = (url) => {
    return axios.delete(BASE_URL + url).then(res => res.data);
}

export const axiosUpload = (data)=>{
    return axios.post("https://api.cloudinary.com/v1_1/dprzgseb1/image/upload", data).then(res => res.data);
}