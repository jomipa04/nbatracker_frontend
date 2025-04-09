import React from "react";
import { Box, Wrap } from "@chakra-ui/react";
const SparkLine = (props: { games: any }) => {
  const { games } = props;
  const sparkLineArray = Array(10).fill(0);
  games.forEach((game: any, i: number) => {
    if (game["winner"] == "JM") {
      sparkLineArray.splice(i, 1, 1);
    } else {
      sparkLineArray.splice(i, 1, 2);
    }
  });
  console.log(sparkLineArray);
  return (
    <Wrap gap={"3"} width={"full"} justify={"center"} marginTop={"10px"}>
      {sparkLineArray.reverse().map((result, i) => {
        return (
          <Box
            key={i}
            borderRadius={"l3"}
            background={`${
              result == 1 ? "blue.500" : result == 2 ? "red.500" : "gray.500"
            }`}
            width={"20px"}
            height={"20px"}
            padding="4"
            color="white"
          ></Box>
        );
      })}
    </Wrap>
  );
};

export default SparkLine;
