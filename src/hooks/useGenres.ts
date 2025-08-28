import api from "@/api/api";
import genres from "@/data/genres";
import { useQuery } from "@tanstack/react-query";
import { type Response } from "@/api/api";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => api.get<Response<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });
export default useGenres;
