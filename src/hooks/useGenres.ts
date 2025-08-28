import apiClient from "@/api/api";
import genres from "@/data/genres";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const api = new apiClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: api.get,
    staleTime: ms("24h"),
    initialData: genres,
  });
export default useGenres;
