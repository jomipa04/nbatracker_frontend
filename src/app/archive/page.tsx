import { Stack, Table } from "@chakra-ui/react";
export const dynamic = "force-dynamic";
async function getArchiveData() {
  const res = await fetch("https://twokaybackend.onrender.com/api/archive/");
  const archiveData = await res.json();

  return archiveData;
}
export default async function Page() {
  const archives = await getArchiveData();
  const archiveData = archives["data"]["games"];
  if (archives["data"]["message"]) {
    return <p>No games yet</p>;
  }
  return (
    <Stack
      justify={"center"}
      width={"full"}
      alignItems={"center"}
      paddingY="4"
      paddingX={"2"}
    >
      <p>Game Archive</p>

      <Table.Root
        size="sm"
        variant={"outline"}
        width={{ lg: "1/2" }}
        marginY={"4"}
      >
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader textAlign={"center"}>Date</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"center"}>Game</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={"center"}>Winner</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {archiveData.map((item: any) => (
            <Table.Row key={item.id}>
              <Table.Cell textAlign={"center"}>{item.date}</Table.Cell>
              <Table.Cell
                textAlign={"center"}
              >{`${item.details["michaelTeam"]} (${item.details["michaelScore"]}) - ${item.details["geoTeam"]} (${item.details["geoScore"]})`}</Table.Cell>
              <Table.Cell
                textAlign={"center"}
                color={`${item.winner == "JM" ? "blue.500" : "red.500"}`}
              >
                {item.winner}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Stack>
  );
}
