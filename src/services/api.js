import axios from "axios";

const api = axios.create({
    baseURL: "http://10.0.2.2:3333/",
});

api.defaults.headers.common["Authorization"] = 
    `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjIsInN0dWRlbnROYW1lIjoic29maWEiLCJpYXQiOjE2MTU1NzEyMzIsImV4cCI6MTYxNTU3NDgzMn0.Q4Tp6VcSxUEvZmbzAbQbOFagSEpvDYxiYytuCjT4Lus`;


export {api};