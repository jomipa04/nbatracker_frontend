import { Avatar, HStack, VStack, defineStyle } from "@chakra-ui/react";
import React from "react";

const ringCss = defineStyle({
  outlineWidth: "2px",
  outlineColor: "colorPalette.500",
  outlineOffset: "2px",
  outlineStyle: "solid",
});
const Avatars = () => {
  return (
    <HStack justify={"space-between"} paddingX={"3"} paddingY={"2"}>
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
  );
};

export default Avatars;
