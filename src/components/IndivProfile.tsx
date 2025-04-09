import {
  Avatar,
  Card,
  defineStyle,
  HStack,
  Icon,
  Link,
  Stat,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { FaFire } from "react-icons/fa6";
import { FaCrown, FaRegTrashAlt } from "react-icons/fa";
import BioCard from "./BioCard";
import { profile } from "console";
import OtherStats from "./OtherStats";
import { CiLogout } from "react-icons/ci";

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});
const IndivProfile = (props: { profileData: any; profileID: any }) => {
  const { profileData, profileID } = props;

  return (
    <>
      <Card.Root
        borderWidth="1px"
        width={{ lg: "600px" }}
        minWidth={"350px"}
        paddingY={"5"}
        paddingX={{ lg: "4" }}
        marginTop={"20px"}
        borderRadius={"10px"}
      >
        <HStack
          paddingX={"5"}
          paddingY={"2"}
          width={"full"}
          marginBottom={"2.5"}
        >
          <Wrap
            width={"full"}
            justify={"space-between"}
            paddingX={{ lg: "10" }}
          >
            <Avatar.Root
              css={ringCss}
              colorPalette={`${profileID == 1 ? "blue" : "red"}`}
              width={{ lg: "36", sm: "md" }}
              height={{ lg: "36", sm: "md" }}
            >
              <Avatar.Fallback
                name={`${profileID == 1 ? "John Michael" : "Geo Daquioag"}`}
              />
              <Avatar.Image
                src={`${profileID == 1 ? "/JMP.jpg" : "/GJD.jpg"}`}
              />
            </Avatar.Root>
            <VStack>
              <BioCard profileID={profileID} />
            </VStack>
          </Wrap>
        </HStack>
        <hr />
        {/* STATISTICS */}
        <HStack paddingX={{ lg: "24" }} paddingY={"2.5"}>
          <Stat.Root maxW="240px" p="4" rounded="md" alignItems={"center"}>
            <HStack justify="space-between">
              <Stat.Label fontSize={"md"}>
                <Icon color="yellow.500" size={"sm"}>
                  <FaCrown />
                </Icon>
                WIN
              </Stat.Label>
            </HStack>

            <Stat.ValueText color={"green.500"}>
              {profileData["numOfWins"]}
            </Stat.ValueText>
          </Stat.Root>
          <Stat.Root minW="135px" p="4" rounded="md" alignItems={"center"}>
            <HStack justify="space-between">
              <Icon color="gray.500">
                <FaRegTrashAlt />
              </Icon>
              <Stat.Label fontSize={"md"}>LOSS</Stat.Label>
            </HStack>
            <Stat.ValueText color={"red.500"}>
              {profileData["numOfGames"] - profileData["numOfWins"]}{" "}
            </Stat.ValueText>
          </Stat.Root>
          <Stat.Root maxW="240px" p="4" rounded="md" alignItems={"center"}>
            <HStack justify="space-between">
              <Stat.Label fontSize={"md"}>
                <Icon color="yellow.400" size={"sm"}>
                  <CiLogout />
                </Icon>
                QUIT
              </Stat.Label>
            </HStack>

            <Stat.ValueText color={"red.500"}>
              {profileData["numQuit"]}
            </Stat.ValueText>
          </Stat.Root>
        </HStack>{" "}
        <hr />
        <OtherStats profileData={profileData} />
      </Card.Root>
    </>
  );
};

export default IndivProfile;
