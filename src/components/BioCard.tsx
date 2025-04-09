import React from "react";
import BioData from "./BioData";
import { HStack, Stat, Table } from "@chakra-ui/react";
const BioCard = (props: { profileID: any }) => {
  const { profileID } = props;
  const bioData = profileID == 1 ? BioData.michael : BioData.geo;
  return (
    <Stat.Root justifyItems={"end"}>
      <Stat.ValueText fontSize={"lg"}>{bioData["fullName"]}</Stat.ValueText>
      <HStack>
        <Stat.HelpText>NICKNAME:</Stat.HelpText>
        <Stat.Label>{`"${bioData["nickName"]}"`}</Stat.Label>
      </HStack>
      <HStack>
        <Stat.HelpText>BIRTHDATE:</Stat.HelpText>
        <Stat.Label>{bioData["birthday"]}</Stat.Label>
      </HStack>
      <HStack>
        <Stat.HelpText>HOMETOWN:</Stat.HelpText>
        <Stat.Label>{bioData["address"]}</Stat.Label>
      </HStack>
      <HStack>
        <Stat.HelpText>HT/WT:</Stat.HelpText>
        <Stat.Label>{`${bioData["height"]} / ${bioData["weight"]}`}</Stat.Label>
      </HStack>
      <HStack>
        <Stat.HelpText>COLLEGE:</Stat.HelpText>
        <Stat.Label>{`${bioData["college"]} `}</Stat.Label>
      </HStack>
    </Stat.Root>
  );
};

export default BioCard;
