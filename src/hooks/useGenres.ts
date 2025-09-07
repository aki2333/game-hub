import apiClient from "@/api/api";
import genres from "@/data/genres";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { Genre } from "../entities/Genre";

const api = new apiClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: api.get,
    staleTime: ms("24h"),
    initialData: genres,
  });
export default useGenres;
