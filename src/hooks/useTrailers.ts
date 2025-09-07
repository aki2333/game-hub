import apiClient from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import type { Trailer } from "../entities/Trailer";

const useTrailers = (gameId: number) => {
  const api = new apiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: api.get,
  });
};
export default useTrailers;
