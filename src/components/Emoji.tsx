interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const getEmoji = () => {
    if (rating >= 4) return "😃";
    if (rating >= 2) return "😐";
    return "😞";
  };
  return <div>{getEmoji()}</div>;
};

export default Emoji;
