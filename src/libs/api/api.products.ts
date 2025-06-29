import { fetchAPI } from "./api.fetch";
import { envAPI_LAYOUT_API } from "../configs/config.env";

export const getHomePageProducts = async () => {
  const url = envAPI_LAYOUT_API.homepageProuctsAPI as string;
  const data = await fetchAPI(url);
  return data.productsList;
};
