import apiClient from "@/api/api";
import platforms from "@/data/platforms";
import { useQuery } from "@tanstack/react-query";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const api = new apiClient<Platform>("/platforms");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: api.get,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
