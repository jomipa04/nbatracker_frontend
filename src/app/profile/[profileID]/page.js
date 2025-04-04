import ProfileNotFound from "@/components/ProfileNotFound";

async function getProfileData(profileId) {
  const res = await fetch(
    `http://127.0.0.1:8000/api/${profileId == "1" ? "michael" : "geo"}/`
  );
  const profileData = await res.json();
  console.log(profileData);
  return profileData;
}
export default async function Page({ params }) {
  const { profileID } = await params;
  console.log(profileID);
  if (!["1", "2"].includes(profileID)) {
    return <ProfileNotFound />;
  }
  const profileData = await getProfileData(profileID);
  return <div>{JSON.stringify(profileData)}</div>;
}
