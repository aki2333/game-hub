import type { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/utils/image-url";
import { Card, HStack, Image } from "@chakra-ui/react";
import GamePlatforms from "./GamePlatforms";
import Metacritic from "./Metacritic";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root overflow={"hidden"}>
      <Image
        height={"200px"}
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <Card.Body>
        <HStack justifyContent={"space-between"}>
          <GamePlatforms
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Metacritic score={game.metacritic} />
        </HStack>
        <Card.Title>{game.name}</Card.Title>
        <Emoji rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
