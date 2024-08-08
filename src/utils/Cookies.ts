"use server";
import { cookies } from "next/headers";
// user information
export const UserInfoByCookie = async (key: string) => {
  return cookies().get(key)?.value;
};
// LogOut
export const RemoveCookie = async (key: string) => {
  const haveCookie = cookies().get(key);
  if (haveCookie) {
    const cookie = cookies().delete(key);
    return cookies().delete(key);
  } else {
    console.log("there is no cookies");
  }
};
