import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3333/",
});

//api.defaults.headers.common["Authorization"] = 
//`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiZnVsYW5vIiwiaWF0IjoxNjE0OTcxNDA1LCJleHAiOjE2MTQ5NzUwMDV9.Z2vTkhu32MYV_xkadwLy5z2AP093LIx6kFUSp6B3ddc`;


export { api };
