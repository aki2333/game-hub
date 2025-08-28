import type { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  if (error) return <Text>{error.message}</Text>;
  return (
    <InfiniteScroll
      dataLength={
        data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0
      }
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <SimpleGrid columns={[1, 2, 3, 3, 4, 5]} gap={4}>
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
