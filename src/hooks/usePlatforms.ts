import api from "@/api/api";
import platforms from "@/data/platforms";
import { useQuery } from "@tanstack/react-query";
import { type Response } from "@/api/api";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      api
        .get<Response<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
