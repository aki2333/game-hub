import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 2fr",
      }}
    >
      <GridItem
        area="side"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList />
      </GridItem>
      <GridItem area="main" padding={4}>
        <GameHeading />
        <HStack gap={4}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
