"use client";
import React from "react";
import { Center, Flex, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
const ProfileNotFound = () => {
  const router = useRouter();

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      alignContent={"center"}
      justifyContent={"center"}
    >
      <Center>
        <VStack>
          <p>Profile Not Found</p>
          <Button onClick={() => router.push("/")}>Home</Button>
        </VStack>
      </Center>
    </Flex>
  );
};

export default ProfileNotFound;
