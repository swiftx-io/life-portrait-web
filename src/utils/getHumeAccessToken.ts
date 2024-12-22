import "server-only";
import { fetchAccessToken } from "hume";

export const getHumeAccessToken = async () => {
  try {
    const accessToken = await fetchAccessToken({
      apiKey: String(process.env.HUME_API_KEY),
      secretKey: String(process.env.HUME_SECRET_KEY),
    });

    return accessToken ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
