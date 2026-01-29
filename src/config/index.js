const { default: axios } = require("axios");

export const clientServer = axios({
  baseURL: "http://localhost:2018",
});
