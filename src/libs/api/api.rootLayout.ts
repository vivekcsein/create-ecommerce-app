import { fetchAPI } from "./api.fetch";
import { envAPI_LAYOUT_API } from "../configs/config.env";

export const getRootLayoutAPI = async () => {
  const data = await fetchAPI(envAPI_LAYOUT_API.rootLayoutAPI);
  return data.rootLayoutData;
};
