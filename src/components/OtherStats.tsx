import { Stat, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const OtherStats = (props: { profileData: any }) => {
  const { profileData } = props;
  return (
    <Wrap padding={"3"} justify={"space-between"}>
      <WrapItem width={"full"}>
        <Stat.Root alignItems={"center"}>
          <Stat.Label>Best Streak:</Stat.Label>

          <Stat.ValueText>{profileData["bestStreak"]}</Stat.ValueText>
        </Stat.Root>
        <Stat.Root alignItems={"center"}>
          <Stat.Label>Fave Team:</Stat.Label>

          <Stat.ValueText>{profileData["mostUsedTeam"]}</Stat.ValueText>
        </Stat.Root>
        <Stat.Root alignItems={"center"}>
          <Stat.Label>Ave. Point Diff.</Stat.Label>

          <Stat.ValueText
            color={`${
              profileData["averageDiff"] > 0
                ? "green.500"
                : profileData["averageDiff"] < 0
                ? "red.500"
                : ""
            }`}
          >
            {profileData["averageDiff"]}
          </Stat.ValueText>
        </Stat.Root>
      </WrapItem>
      <WrapItem width={"full"} marginTop={"4"}>
        <Stat.Root alignItems={"center"}>
          <Stat.Label>+ Point Diff.</Stat.Label>

          <Stat.ValueText color={"green.500"}>
            {profileData["maxPositiveDiff"]}
          </Stat.ValueText>
        </Stat.Root>
        <Stat.Root alignItems={"center"}>
          <Stat.Label>- Point Diff.</Stat.Label>

          <Stat.ValueText color={"red.500"}>
            {profileData["maxNegativeDiff"]}
          </Stat.ValueText>
        </Stat.Root>
        <Stat.Root alignItems={"center"}>
          <Stat.Label>Total Point Diff.</Stat.Label>

          <Stat.ValueText
            color={`${
              profileData["totalDiff"] > 0
                ? "green.500"
                : profileData["totalDiff"] < 0
                ? "red.500"
                : ""
            }`}
          >
            {profileData["totalDiff"]}
          </Stat.ValueText>
        </Stat.Root>
      </WrapItem>
    </Wrap>
  );
};

export default OtherStats;
