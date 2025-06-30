import { imageDetails } from "@/types/products";
import { envGithubConfig } from "./config.env";

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

  const gitDestination = envGithubConfig.GITHUB_IMAGE_URL;

  if (gitDestination) {
    const newIndex = Index ? Index : 0;
    const imagePath =
      Array.isArray(images) && images.length > newIndex && images[newIndex]?.src
        ? images[newIndex].src.startsWith("/")
          ? images[newIndex].src
          : "/" + images[newIndex].src
        : "/placeholder.png";
    const imagePathofGit = (gitDestination + imagePath).toString()
    // console.log(imagePathofGit);
    return imagePathofGit
  } else {
    return "/placeholder.png"
  }
}