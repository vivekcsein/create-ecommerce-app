import { imageDetails } from "@/types/products";
import { envGithubAPI } from "./config.env";

// Helper functions to safely access localStorage (only in browser)
export const getLocalStorageItem = <T = unknown>(
  key: string,
  fallback: T
): T => {
  if (typeof window !== "undefined" && window.localStorage) {
    const item = window.localStorage.getItem(key);
    try {
      return item ? (JSON.parse(item) as T) : fallback;
    } catch {
      return fallback;
    }
  }
  return fallback;
};
export const setLocalStorageItem = (key: string, value: unknown) => {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};
export const removeLocalStorageItem = (key: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    window.localStorage.removeItem(key);
  }
};

export const putLocalStorageItem = (key: string, value: unknown) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const existing = window.localStorage.getItem(key);
    let arr: unknown[] = [];
    if (existing) {
      try {
        arr = JSON.parse(existing);
        if (!Array.isArray(arr)) arr = [];
      } catch {
        arr = [];
      }
    }
    arr.push(value);
    window.localStorage.setItem(key, JSON.stringify(arr));
  }
};

export const imageURLFromGit = (images: imageDetails[], Index?: number) => {

  const gitDestination = envGithubAPI.GITHUB_IMAGE_URL;

  const imagePath = images && images.length > 0
    ? images[Index ? Index : 0].src
      ? images[Index ? Index : 0].src.startsWith("/")
        ? images[Index ? Index : 0].src
        : "/" + images[Index ? Index : 0].src
      : "/placeholder.png"
    : "/placeholder.png"

  const imagePathofGit = (gitDestination + imagePath).toString()
  return imagePathofGit

}