import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering?: string;
  search?: string;
}
interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (text: string) => void;
  setGenre: (genreId: number) => void;
  setPlatform: (platformId: number) => void;
  setSort: (sort: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (search) => set(() => ({ gameQuery: { search } })),
  setGenre: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setPlatform: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSort: (sort) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sort } })),
}));
if (import.meta.env.MODE === "development") {
  mountStoreDevtool("GameQueryStore", useGameQueryStore);
}
export default useGameQueryStore;
