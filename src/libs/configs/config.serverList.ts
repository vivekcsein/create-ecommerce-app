import { envBackendAPI, envFrontendHost } from "./config.env";

export const whiteListedServer = [
  `http://${envBackendAPI.APP_BACKEND}`,
  `http://${envFrontendHost.APP_FRONTEND}`,
];

export const blackListedIPs = [];

export const allowedOrigins = [
  `http://${envBackendAPI.APP_BACKEND}`,
  `http://${envFrontendHost.APP_FRONTEND}`,
  `${envBackendAPI.APP_BACKEND}`,
];
