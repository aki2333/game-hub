import genres from "@/data/genres";
import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/utils/image-url";
import { HStack, List, Image, Link, Heading } from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  // if (isLoading) return <Spinner />;
  const list = isLoading ? genres : data;
  return (
    <>
      <Heading as="h2" size="lg" marginBottom={1}>
        Genres
      </Heading>
      <List.Root unstyled>
        {list.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={4}
              />
              <Link
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
