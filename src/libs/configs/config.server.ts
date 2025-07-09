import {
    envRootLayoutConfig,
    envBackendConfig,
    envFrontendConfig
} from "./config.env";

export const whiteListedServer = [
    `http://${envBackendConfig.APP_BACKEND}`,
    `http://${envFrontendConfig.APP_FRONTEND}`,
];

export const blackListedIPs = [];

export const allowedOrigins = [
    `${envRootLayoutConfig.rootLayoutAPI}`,
    `${envFrontendConfig.APP_FRONTEND_API_URL}`,
    `${envBackendConfig.APP_BACKEND_API_URL}`,
];

export const allowedMethods = [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
];
