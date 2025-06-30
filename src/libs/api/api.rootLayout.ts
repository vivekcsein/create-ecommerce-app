"server only"
import { fetchAPI } from "./api.fetch";
import { envRootLayoutConfig } from "../configs/config.env";

export const getRootLayoutAPI = async () => {
  const data = await fetchAPI(envRootLayoutConfig.rootLayoutAPI);
  return data.rootLayoutData;
};
