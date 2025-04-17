"use client";
import React, { useEffect, useState } from "react";

import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Fieldset,
  Field,
  RadioGroup,
  HStack,
  Checkbox,
  Wrap,
  WrapItem,
  NumberInput,
} from "@chakra-ui/react";

import NbaTeamsData from "./NbaTeamsData";

import Select from "react-select";
import { useRouter } from "next/navigation";

const AddGame = () => {
  const router = useRouter();
  const [quit, setQuit] = useState(false);
  const [winner, setWinner] = useState("");
  const [michaelScore, setMichaelScore] = useState(0);
  const [michaelTeam, setMichaelTeam] = useState("");
  const [geoScore, setGeoScore] = useState(0);
  const [geoTeam, setGeoTeam] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSubmit = async () => {
    const formValues = {
      quit,
      winner,
      details: {
        michaelScore,
        michaelTeam,
        geoScore,
        geoTeam,
      },
    };
    try {
      setIsLoading(true);
      const res = await fetch(`https://twokaybackend.onrender.com/api/add/`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        cache: "no-store",
        body: JSON.stringify(formValues),
      });
      if (res.status === 201) {
        router.push("/");
        setOpen(false);
        setIsLoading(false);
        setMichaelScore(0);
        setMichaelTeam("");
        setGeoScore(0);
        setGeoTeam("");
      }
    } catch (err) {
      console.log(err);
    }
    console.log(formValues);
  };
  useEffect(() => {
    if (quit) {
      setMichaelScore(0);
      setGeoScore(0);
    }
  }, [quit]);
  useEffect(() => {
    setMichaelScore(0);
    setMichaelTeam("");
    setGeoScore(0);
    setGeoTeam("");
  }, []);
  return (
    <>
      <Dialog.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Dialog.Trigger asChild>
          <Button
            variant={"solid"}
            colorPalette={"cyan"}
            width={"full"}
            maxWidth={"large"}
          >
            Add Game
          </Button>
        </Dialog.Trigger>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Add a game</Dialog.Title>
              </Dialog.Header>
              {/* SUBMISSION FORM */}
              <Dialog.Body>
                <Fieldset.Root>
                  <Fieldset.Content>
                    <Wrap gap={"24"}>
                      <WrapItem>
                        {/* Winner Field */}
                        <Field.Root invalid={winner == ""}>
                          <Field.Label>Winner?</Field.Label>
                          <RadioGroup.Root
                            onValueChange={(e) => setWinner(e.value)}
                          >
                            <HStack gap={"4"}>
                              <RadioGroup.Item key={1} value={"JM"}>
                                <RadioGroup.ItemHiddenInput />
                                <RadioGroup.ItemIndicator />
                                <RadioGroup.ItemText>
                                  {"JMP"}
                                </RadioGroup.ItemText>
                              </RadioGroup.Item>
                              <RadioGroup.Item key={2} value={"GD"}>
                                <RadioGroup.ItemHiddenInput />
                                <RadioGroup.ItemIndicator />
                                <RadioGroup.ItemText>
                                  {"GEO"}
                                </RadioGroup.ItemText>
                              </RadioGroup.Item>
                            </HStack>
                          </RadioGroup.Root>
                          <Field.ErrorText>Required</Field.ErrorText>
                        </Field.Root>
                      </WrapItem>{" "}
                      <WrapItem>
                        {/* Quit Field */}
                        <Field.Root>
                          <Field.Label>Quit?</Field.Label>
                          <Checkbox.Root
                            checked={quit}
                            defaultChecked={false}
                            onCheckedChange={(e) => setQuit(!!e.checked)}
                          >
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Yes</Checkbox.Label>
                          </Checkbox.Root>
                        </Field.Root>
                      </WrapItem>
                    </Wrap>
                    <hr />
                    {/* MICHAEL STATS */}
                    <HStack>
                      {/* Team Field */}
                      <Field.Root invalid={michaelTeam == ""}>
                        <Field.Label>Michael's Team</Field.Label>

                        <div
                          style={{
                            width: "100%",
                            color: "black",
                          }}
                        >
                          <Select
                            options={NbaTeamsData}
                            name="teams"
                            onChange={(e: any) => setMichaelTeam(e.value)}
                          />
                        </div>
                        <Field.ErrorText>Required</Field.ErrorText>
                      </Field.Root>

                      <Field.Root invalid={!quit && michaelScore == 0}>
                        <Field.Label>Michael's Score</Field.Label>
                        <NumberInput.Root
                          min={0}
                          disabled={quit}
                          onValueChange={(e) => {
                            setMichaelScore(e.valueAsNumber);
                          }}
                        >
                          <NumberInput.Control />
                          <NumberInput.Input />
                        </NumberInput.Root>
                        <Field.ErrorText>Required</Field.ErrorText>
                      </Field.Root>
                    </HStack>
                    {/* GEO STATS */}
                    <HStack>
                      <Field.Root invalid={geoTeam == ""}>
                        <Field.Label>Geo's Team</Field.Label>

                        <div
                          style={{
                            width: "100%",
                            color: "black",
                          }}
                        >
                          <Select
                            options={NbaTeamsData}
                            name="teams"
                            onChange={(e: any) => setGeoTeam(e.value)}
                          />
                        </div>
                        <Field.ErrorText>Required</Field.ErrorText>
                      </Field.Root>
                      <Field.Root invalid={!quit && michaelScore == 0}>
                        <Field.Label>Geo's Score</Field.Label>
                        <NumberInput.Root
                          min={0}
                          disabled={quit}
                          onValueChange={(e) => {
                            setGeoScore(e.valueAsNumber);
                          }}
                        >
                          <NumberInput.Control />
                          <NumberInput.Input />
                        </NumberInput.Root>
                        <Field.ErrorText>Required</Field.ErrorText>
                      </Field.Root>
                    </HStack>
                  </Fieldset.Content>
                </Fieldset.Root>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </Dialog.ActionTrigger>
                <Button
                  backgroundColor={"blue.400"}
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {`${isLoading ? "..." : "Submit"}`}
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

export default AddGame;
