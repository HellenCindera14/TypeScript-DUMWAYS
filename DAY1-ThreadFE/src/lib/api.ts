import axios from "axios";

export const API = axios .create({
    baseURL: "http://localhoast:5000/api/v1"
})

export default API