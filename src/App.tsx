import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre_id?: number;
  platform_id?: number;
  ordering: string;
  search: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav"
                "main"`,
        lg: `"nav nav"
            "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 2fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(search) => setGameQuery({ ...gameQuery, search })} />
      </GridItem>
      <GridItem
        area="side"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList
          selectedGenreId={gameQuery.genre_id}
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genre_id: genre.id })
          }
        />
      </GridItem>
      <GridItem area="main" padding={4}>
        <GameHeading gameQuery={gameQuery} />
        <HStack gap={4} marginBottom={4}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platform_id}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform_id: platform!.id })
            }
          />
          <SortSelector
            selectedSort={gameQuery.ordering}
            onSelectSort={(ordering) =>
              setGameQuery({ ...gameQuery, ordering })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
