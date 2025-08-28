import axios, { type AxiosRequestConfig } from "axios";
export interface Response<T> {
  count: number;
  results: T[];
  next?: string | null;
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0958f9523bce4a6d9640c45b187df27c",
  },
});
class apiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  get = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<Response<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default apiClient;
