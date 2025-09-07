import apiClient from "@/api/api";
import useGameQueryStore from "@/stores/gameQueryStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import type { Game } from "../entities/Game";
const api = new apiClient<Game>("/games");

const useGames = () => {
  const { gameQuery } = useGameQueryStore();
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      api.get({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
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
