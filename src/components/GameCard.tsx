import React from "react";
import Image from "next/image";
import { Card, HStack, VStack, IconButton, Button } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import DeleteAlert from "./DeleteAlert";
const GameCard = (props: {
  date: string;
  quit: boolean;
  winner: string;
  details: any;
}) => {
  const { date, quit, winner, details } = props;
  return (
    <>
      <Card.Root
        width={"full"}
        maxW={"lg"}
        variant={"elevated"}
        padding={"-0.5"}
      >
        <Card.Body>
          <HStack w="full" justify={"space-evenly"}>
            <VStack width={"1/3"}>
              <Image
                src={`/${details["michaelTeam"]}.png`}
                alt={details["michaelTeam"]}
                width={"70"}
                height={"70"}
              />
              <Card.Description>{details["michaelTeam"]}</Card.Description>
            </VStack>
            <VStack marginTop={"2.5"} width={"1/3"}>
              <HStack width={"full"} justify={"center"}>
                <Card.Title fontSize={"xl"}>
                  {details["michaelScore"]}
                </Card.Title>
                <Card.Title fontSize={"xl"}>-</Card.Title>
                <Card.Title fontSize={"xl"}>{details["geoScore"]}</Card.Title>
              </HStack>
              <Card.Description
                width={"1/3"}
                fontFamily={"heading"}
                color={winner == "JM" ? "blue.400" : "red.400"}
                textAlign={"center"}
              >
                {winner == "JM" ? "JMP" : "GEO"}
              </Card.Description>
            </VStack>
            <VStack width={"1/3"}>
              <Image
                src={`/${details["geoTeam"]}.png`}
                alt={details["geoTeam"]}
                width={"70"}
                height={"70"}
              />
              <Card.Description>{details["geoTeam"]}</Card.Description>
            </VStack>
          </HStack>
        </Card.Body>
        <Card.Footer>
          <HStack justify={"space-between"} width={"full"}>
            <Card.Description width={"1/3"} textAlign={"center"}>
              {date}
            </Card.Description>

            <DeleteAlert />
          </HStack>
        </Card.Footer>
      </Card.Root>
    </>
  );
};

export default GameCard;
