import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0958f9523bce4a6d9640c45b187df27c",
  },
});

export default api;
