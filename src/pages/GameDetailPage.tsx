import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameMovie from "@/components/GameMovie";
import GameScreenshots from "@/components/GameScreenshots";
import useGame from "@/hooks/useGame";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGame(Number(id));
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) throw error;
  return (
    <>
      <Heading size={"4xl"}>{data?.name}</Heading>
      <ExpandableText limit={200}>{data.description_raw}</ExpandableText>
      <GameAttributes game={data} />
      <GameMovie gameId={data.id} />
      <GameScreenshots gameId={data.id} />
    </>
  );
};

export default GameDetailPage;
