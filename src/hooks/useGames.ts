import apiClient from "@/api/api";
import type { GameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";
import ms from "ms";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const api = new apiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      api.get({
        params: {
          genres: gameQuery.genre_id,
          parent_platforms: gameQuery.platform_id,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms("24h"), // 24 hours
  });
};
export default useGames;
