import axios from "axios";

const api = axios.create({
    baseURL: "http://10.0.2.2:3333/",
});

api.defaults.headers.common["Authorization"] = 
    `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjIsInN0dWRlbnROYW1lIjoic29maWEiLCJpYXQiOjE2MTQ5Njk3MDEsImV4cCI6MTYxNDk3MzMwMX0.jERqwC_dDDcd4w6I9WGZE-U2saoi8iURBzjhglGnMt0`;


export {api};