import React from "react";
import {
  HStack,
  Icon,
  Stat,
  VStack,
  Avatar,
  defineStyle,
} from "@chakra-ui/react";
import { FaFire } from "react-icons/fa6";
import SparkLine from "./SparkLine";
import Link from "next/link";
const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});
const HomeStats = (props: {
  streakStats: any;
  numOfGames: number;
  games: any;
}) => {
  const { streakStats, numOfGames, games } = props;
  return (
    <>
      {/* AVATARS */}
      <Stat.Root
        width={"full"}
        minWidth={"350px"}
        paddingY={"5"}
        paddingX={"10"}
        marginTop={"20px"}
        marginBottom={"15px"}
        borderBottomWidth={"1px"}
      >
        <HStack
          justify={"space-between"}
          paddingX={"5"}
          paddingY={"2"}
          width={"full"}
        >
          <VStack>
            <Link href="profile/1">
              <Avatar.Root css={ringCss} colorPalette={"blue"} size={"xl"}>
                <Avatar.Fallback name="John Michael" />
                <Avatar.Image src="/JMP.jpg" />
              </Avatar.Root>
            </Link>

            <p style={{ fontWeight: "bold" }}>JMP</p>
          </VStack>
          <p style={{ fontWeight: "bold" }}>VS</p>
          <VStack>
            <Link href="profile/2">
              <Avatar.Root css={ringCss} colorPalette={"red"} size={"xl"}>
                <Avatar.Fallback name="Geo Daquioag" />
                <Avatar.Image src="/GJD.jpg" />
              </Avatar.Root>{" "}
            </Link>
            <p style={{ fontWeight: "bold" }}>GEO</p>
          </VStack>
        </HStack>
        {/* SPARKLINE */}
        <SparkLine games={games} />
        {/* STATISTICS */}
        <HStack>
          <Stat.Root maxW="240px" p="4" rounded="md" alignItems={"center"}>
            <HStack justify="space-between">
              <Stat.Label># of Games</Stat.Label>
            </HStack>
            <Stat.ValueText>{numOfGames}</Stat.ValueText>
          </Stat.Root>
          <Stat.Root minW="135px" p="4" rounded="md" alignItems={"center"}>
            <HStack justify="space-between">
              <Stat.Label>
                {" "}
                <Icon color="orange.500" height={"20px"}>
                  <FaFire />
                </Icon>
                Streak
              </Stat.Label>
            </HStack>
            <Stat.ValueText>{`${
              streakStats["streakBy"] == "JM" ? "JMP" : "GEO"
            } : ${streakStats["streak"]}`}</Stat.ValueText>
          </Stat.Root>
        </HStack>{" "}
      </Stat.Root>
    </>
  );
};

export default HomeStats;
