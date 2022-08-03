import axios from "axios";

export const appAxios = axios.create({
  baseURL: "http://localhost:49146/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
