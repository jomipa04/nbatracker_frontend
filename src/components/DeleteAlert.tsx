"use client";
import React, { useState } from "react";
import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  IconButton,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";

const DeleteAlert = (props: { id: string }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const deleteGame = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://twokaybackend.onrender.com/api/delete/${id}/`,
        {
          method: "POST",
          cache: "no-store",
        }
      );
      if (res.status === 200) {
        router.push("/");
        setOpen(false);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const { id } = props;
  return (
    <>
      <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Dialog.Trigger asChild>
          <IconButton variant={"ghost"} width={"1/3"}>
            <AiFillDelete />
          </IconButton>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Delete game?</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <p>Honesty is the best policy</p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button
                  backgroundColor={"red.500"}
                  onClick={deleteGame}
                  variant={"outline"}
                  disabled={isLoading}
                >
                  {`${isLoading ? "..." : "Delete"}`}
                </Button>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};

export default DeleteAlert;
