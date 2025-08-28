import type { GameQuery } from "@/App";

import { type Response } from "@/api/api";
import type { Platform } from "./usePlatforms";

import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  // useData<Game>(
  //   "/games",
  //   {
  //     params: {
  //       genres: gameQuery.genre?.id,
  //       parent_platforms: gameQuery.platform?.id,
  //       ordering: gameQuery.ordering,
  //       search: gameQuery.search,
  //     },
  //   },
  //   [gameQuery]
  // );
  const params = {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.ordering,
    search: gameQuery.search,
  };
  return useQuery({
    queryKey: ["games", params],
    queryFn: () =>
      api.get<Response<Game>>("/games", { params }).then((res) => res.data),
  });
};
export default useGames;
