import Image from "next/image";
import GameCard from "@/components/GameCard";
import { VStack } from "@chakra-ui/react";
import HomeStats from "@/components/HomeStats";
import AddGame from "@/components/AddGame";

async function getHomeData() {
  const res = await fetch("http://127.0.0.1:8000/api/", { cache: "no-store" });
  const gamesData = await res.json();
  return gamesData;
}

export default async function Home() {
  const gamesData = await getHomeData();
  const games = gamesData["data"]["games"];

  return (
    <>
      <VStack justify={"center"} width={"full"}>
        <HomeStats
          numOfGames={gamesData["data"]["numOfGames"]}
          streakStats={gamesData["data"]["streakStat"]}
        />
        <AddGame />
        {games.map((game: any, i: number) => {
          return (
            <GameCard
              key={i}
              date={game["date"]}
              quit={game["quit"]}
              winner={game["winner"]}
              details={game["details"]}
            />
          );
        })}
      </VStack>
    </>
  );
}
