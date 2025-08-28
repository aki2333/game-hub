import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genre_id);

  const platform = usePlatform(gameQuery.platform_id);
  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return (
    <Heading as="h1" size="3xl" marginBottom={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
