export function setLocalStorageItem(key: any, value: any) {
  if (typeof window !== "undefined") {
    const store = localStorage.setItem(key, value);
    console.log("accessToken", store);
  }
}
