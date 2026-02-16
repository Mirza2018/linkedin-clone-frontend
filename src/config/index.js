const { default: axios } = require("axios");

export const BASE_URL = "http://localhost:2018/";
export const clientServer = axios.create({
  baseURL: BASE_URL,
});
