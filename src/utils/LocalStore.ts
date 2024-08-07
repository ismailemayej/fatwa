import { Get } from "@/components/DataAction/DataHandle";
import { jwtDecode } from "jwt-decode";
export function setLocalStorageItem(key: string, value: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
    console.log("accessToken", value);
  }
}
export function getLocalStorageItem(key: string) {
  try {
    if (typeof window !== "undefined" && typeof key === "string") {
      return localStorage.getItem(key);
    } else {
      console.error("Invalid key or localStorage not available");
      return null;
    }
  } catch (error) {
    console.error("Error accessing localStorage", error);
    return null;
  }
}

// user Information
export async function userInformation() {
  try {
    const AccessToken = getLocalStorageItem("accessToken");
    if (AccessToken) {
      let decodedData = null;
      decodedData = await jwtDecode(AccessToken);
      console.log(decodedData.email);
      const userData = await Get(
        "questions",
        `useremail=${decodedData?.email}`
      );
      console.log(userData?.data);

      return userData?.data;
    }
    {
      return null;
    }
  } catch (error) {
    throw error;
  }
}
