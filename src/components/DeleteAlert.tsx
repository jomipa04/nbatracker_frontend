import React from "react";
import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  IconButton,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";

const DeleteAlert = () => {
  return (
    <>
      <Dialog.Root>
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
                <Button backgroundColor={"red.400"}>Delete</Button>
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
