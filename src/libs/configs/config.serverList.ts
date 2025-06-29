import {
  envAPI_LAYOUT_API,
  envBackendAPI,
  envFrontendHost,
} from "./config.env";

export const whiteListedServer = [
  `http://${envBackendAPI.APP_BACKEND}`,
  `http://${envFrontendHost.APP_FRONTEND}`,
];

export const blackListedIPs = [];

export const allowedOrigins = [
  `http://${envBackendAPI.APP_BACKEND}`,
  `http://${envFrontendHost.APP_FRONTEND}`,
  `${envBackendAPI.APP_BACKEND}`,
  `${envAPI_LAYOUT_API.rootLayoutAPI}`,
  `${envFrontendHost.APP_FRONTEND_API_URL}`,
];
