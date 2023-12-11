import axios from "axios";

export const instanciaHttp = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
