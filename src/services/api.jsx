import axios from "axios";

export const axiosinstance = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{
        "Content-Type":'Application/json'
    }
})