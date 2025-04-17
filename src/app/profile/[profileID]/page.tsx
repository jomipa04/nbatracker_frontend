import IndivProfile from "@/components/IndivProfile";
import ProfileNotFound from "@/components/ProfileNotFound";
import { VStack, Wrap } from "@chakra-ui/react";

async function getProfileData(profileId: any) {
  const res = await fetch(
    `https://twokaybackend.onrender.com/api/${
      profileId == "1" ? "michael" : "geo"
    }/`
  );
  const profileData = await res.json();

  return profileData;
}
export default async function Page({ params }: any) {
  const { profileID } = await params;

  if (!["1", "2"].includes(profileID)) {
    return <ProfileNotFound />;
  }
  const profileData = await getProfileData(profileID);
  return (
    <Wrap width={"full"} justify={"center"} padding={"2"}>
      <VStack justify={"center"}>
        <IndivProfile profileData={profileData["data"]} profileID={profileID} />
      </VStack>
    </Wrap>
  );
}
