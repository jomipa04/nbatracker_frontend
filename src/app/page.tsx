import Image from "next/image";
import GameCard from "@/components/GameCard";
import { Button, IconButton, Link, VStack, Wrap } from "@chakra-ui/react";
import HomeStats from "@/components/HomeStats";
import AddGame from "@/components/AddGame";
import SparkLine from "@/components/SparkLine";
import { FaArchive } from "react-icons/fa";

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
      <Wrap width={"full"} justify={"center"} padding={"2"}>
        <VStack justify={"center"}>
          <HomeStats
            numOfGames={gamesData["data"]["numOfGames"]}
            streakStats={gamesData["data"]["streakStat"]}
            games={games}
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
          <Link href="archive/" width={"full"}>
            <IconButton
              width={"full"}
              variant={"surface"}
              colorPalette={"gray"}
              marginY={"2"}
            >
              Archive
              <FaArchive />
            </IconButton>
          </Link>
        </VStack>
      </Wrap>
    </>
  );
}
