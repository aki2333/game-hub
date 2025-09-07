import type { Platform } from "@/entities/Platform";
import type { Genre } from "./Genre";
import type { Publisher } from "./Publisher";
export interface Game {
  id: number;
  name: string;
  description_raw: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  metacritic: number;
  rating_top: number;
  publishers: Publisher[];
}
