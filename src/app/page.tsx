import GameCard from "@/components/GameCard";
import { IconButton, Link, VStack, Wrap } from "@chakra-ui/react";
import HomeStats from "@/components/HomeStats";
import AddGame from "@/components/AddGame";

import { FaArchive } from "react-icons/fa";

async function getHomeData() {
  const res = await fetch("https://twokaybackend.onrender.com/api/", {
    cache: "no-store",
  });
  const gamesData = await res.json();
  return gamesData;
}

export default async function Home() {
  const gamesData = await getHomeData();
  const games = gamesData["data"]["games"];
  console.log(gamesData["data"]["message"]);

  return (
    <>
      <Wrap width={"full"} justify={"center"} padding={"2"}>
        <VStack justify={"center"} width={"lg"}>
          {gamesData["data"]["message"] ? (
            ""
          ) : (
            <HomeStats
              numOfGames={gamesData["data"]["numOfGames"]}
              streakStats={gamesData["data"]["streakStat"]}
              games={games}
            />
          )}
          <AddGame />
          {gamesData["data"]["message"]
            ? "No games yet"
            : games.map((game: any, i: number) => {
                return (
                  <GameCard
                    key={i}
                    id={game["id"]}
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
