"server only"
import { callFetchAPI } from "./api.fetch";
import { envRootLayoutConfig } from "../configs/config.env";

export const getHomePageProducts = async () => {
  const url = envRootLayoutConfig.homepageProudctsAPI as string;
  const data = await callFetchAPI(url);
  return data.productsList;
};
