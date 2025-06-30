"server only"
import { fetchAPI } from "./api.fetch";
import { envRootLayoutConfig } from "../configs/config.env";

export const getHomePageProducts = async () => {
  const url = envRootLayoutConfig.homepageProudctsAPI as string;
  const data = await fetchAPI(url);
  console.log(data);

  return data.productsList;
};
