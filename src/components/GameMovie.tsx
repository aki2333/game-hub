import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameMovie = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];
  return first ? (
    <video src={first?.data["480"]} controls poster={first?.preview}></video>
  ) : null;
};

export default GameMovie;
