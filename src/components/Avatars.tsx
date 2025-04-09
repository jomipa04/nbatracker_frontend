import { Avatar, HStack, Stat, VStack, defineStyle } from "@chakra-ui/react";
import React from "react";
import SparkLine from "./SparkLine";

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});
const Avatars = (props: { games: any }) => {
  const { games } = props;
  return (
    <Stat.Root
      borderWidth="1px"
      width={"35%"}
      minWidth={"350px"}
      paddingY={"5"}
      paddingX={"10"}
      marginTop={"20px"}
      borderRadius={"10px"}
    >
      <HStack
        justify={"space-between"}
        paddingX={"3"}
        paddingY={"2"}
        width={"full"}
      >
        <VStack>
          <Avatar.Root css={ringCss} colorPalette={"blue"}>
            <Avatar.Fallback name="John Michael" />
            <Avatar.Image src="/JMP.jpg" />
          </Avatar.Root>
          <p>JMP</p>
        </VStack>
        <p>VS</p>
        <VStack>
          <Avatar.Root css={ringCss} colorPalette={"red"}>
            <Avatar.Fallback name="Geo Daquioag" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>{" "}
          <p>GEO</p>
        </VStack>
      </HStack>
      <SparkLine games={games} />
    </Stat.Root>
  );
};

export default Avatars;
