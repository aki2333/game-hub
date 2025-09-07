import apiClient from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import type { Screenshot } from "../entities/Screenshot";
const useScreenshots = (gameId: number) => {
  const api = new apiClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: api.get,
  });
};
export default useScreenshots;
