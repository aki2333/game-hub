import useGame from "@/hooks/useGame";
import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router";

const GameDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGame(Number(id));
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <Heading>{data?.name}</Heading>
      {data?.description_raw}
    </>
  );
};

export default GameDetailPage;
