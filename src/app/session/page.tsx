import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import Chat from "@/components/ChatDynamic";

export default async function Session() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error("Failed to fetch access token.");
  }

  return (
    <div className={"grow flex flex-col"}>
      <Chat accessToken={accessToken} />
    </div>
  );
}
