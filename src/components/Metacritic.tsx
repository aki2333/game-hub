import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const Metacritic = ({ score }: Props) => {
  return (
    <Badge colorPalette={score > 89 ? "green" : score > 74 ? "yellow" : "red"}>
      {score || 0}
    </Badge>
  );
};

export default Metacritic;
