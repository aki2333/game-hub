import api from "@/api/api";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export interface Response<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      api
        .get<Response<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
      return () => {
        controller.abort();
      };
    },
    deps ? [...deps] : []
  );

  return { data, isLoading, error };
};
export default useData;
