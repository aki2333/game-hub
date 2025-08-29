import apiClient from "@/api/api";
import platforms from "@/data/platforms";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const api = new apiClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: api.get,
    staleTime: ms("24h"), //24 hours
    initialData: platforms,
  });

export default usePlatforms;
