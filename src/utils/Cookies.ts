"use server";
import { cookies } from "next/headers";
// set Cookies
export const SetCookies = async (key: string, value: string) => {
  return cookies().set(key, value);
};
// user information
export const UserInfoByCookie = async (key: string) => {
  return cookies().get(key)?.value;
};
// LogOut
export const RemoveCookie = async (key: string) => {
  const haveCookie = cookies().get(key);
  if (haveCookie) {
    return cookies().delete(key);
  } else {
    console.log("there is no cookies");
  }
};
