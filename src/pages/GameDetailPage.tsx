import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameMovie from "@/components/GameMovie";
import GameScreenshots from "@/components/GameScreenshots";
import useGame from "@/hooks/useGame";
import { Grid, GridItem, Heading } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGame(Number(id));
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) throw error;
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "2fr 2fr",
      }}
      gap={5}
    >
      <GridItem>
        <Heading size={"4xl"}>{data?.name}</Heading>
        <ExpandableText limit={200}>{data.description_raw}</ExpandableText>
        <GameAttributes game={data} />
      </GridItem>
      <GridItem>
        <GameMovie gameId={data.id} />
        <GameScreenshots gameId={data.id} />
      </GridItem>
    </Grid>
  );
};

export default GameDetailPage;
