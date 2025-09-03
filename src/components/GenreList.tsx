import useGenres from "@/hooks/useGenres";
import useGameQueryStore from "@/stores/gameQueryStore";
import getCroppedImageUrl from "@/utils/image-url";
import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const setGenre = useGameQueryStore((s) => s.setGenre);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading as="h2" size="lg" marginBottom={1}>
        Genres
      </Heading>
      <List.Root unstyled>
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={4}
              />
              <Link
                fontWeight={genreId === genre.id ? "bold" : "normal"}
                onClick={() => setGenre(genre.id)}
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
