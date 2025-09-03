import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/stores/gameQueryStore";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading as="h1" size="3xl" marginBottom={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
