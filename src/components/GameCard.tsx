import type { Game } from "@/entities/Game";
import getCroppedImageUrl from "@/utils/image-url";
import { Card, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router";
import Emoji from "./Emoji";
import GamePlatforms from "./GamePlatforms";
import Metacritic from "./Metacritic";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root
      overflow={"hidden"}
      _hover={{ transform: "scale(1.05)" }}
      transition={"all 0.2s"}
    >
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
        <Card.Title>
          <Link to={`/game/${game.id}`}>{game.name}</Link>
        </Card.Title>
        <Emoji rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
