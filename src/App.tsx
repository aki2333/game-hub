import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
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
        <NavBar />
      </GridItem>
      <GridItem
        area="side"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList />
      </GridItem>
      <GridItem area="main" padding={4}>
        <GameHeading />
        <HStack gap={4} marginBottom={4}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
