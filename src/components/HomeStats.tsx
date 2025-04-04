import React from "react";
import { HStack, Icon, Stat, Wrap, WrapItem } from "@chakra-ui/react";
import { FaFire } from "react-icons/fa6";
import { SiNba } from "react-icons/si";
import Avatars from "./Avatars";
const HomeStats = (props: { streakStats: string; numOfGames: number }) => {
  const { streakStats, numOfGames } = props;
  return (
    <>
      <Wrap justify={"space-between"} width={"lg"}>
        <WrapItem>
          <Stat.Root borderWidth="1px" maxW="210px">
            <Avatars />
          </Stat.Root>
        </WrapItem>
        <WrapItem>
          <HStack>
            <Stat.Root maxW="240px" borderWidth="1px" p="4" rounded="md">
              <HStack justify="space-between">
                <Stat.Label># of Games</Stat.Label>
              </HStack>
              <Stat.ValueText>{numOfGames}</Stat.ValueText>
            </Stat.Root>
            <Stat.Root minW="135px" borderWidth="1px" p="4" rounded="md">
              <HStack justify="space-between">
                <Stat.Label>Streak</Stat.Label>
                <Icon color="orange.500">
                  <FaFire />
                </Icon>
              </HStack>
              <Stat.ValueText>{`${
                streakStats["streakBy"] == "JM" ? "JMP" : "GEO"
              } : ${streakStats["streak"]}`}</Stat.ValueText>
            </Stat.Root>
          </HStack>{" "}
        </WrapItem>
      </Wrap>
    </>
  );
};

export default HomeStats;
