import apiClient from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { Game } from "../entities/Game";

const api = new apiClient<Game>(`/games`);
const useGame = (id: number) => {
  return useQuery({
    queryKey: ["game", id],
    queryFn: () => api.getById(id),
    staleTime: ms("24h"),
  });
};
export default useGame;
