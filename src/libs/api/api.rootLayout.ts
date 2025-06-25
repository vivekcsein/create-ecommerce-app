import { envAPI_LAYOUT_API } from "../configs/config.env";
import { fetchAPI } from "./api.fetch";

export const getRootLayoutAPI = async () => {
  const data = await fetchAPI(envAPI_LAYOUT_API.rootLayoutAPI);
  return data.rootLayoutData;
};
