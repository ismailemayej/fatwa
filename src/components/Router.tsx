"use client";
import { useRouter } from "next/navigation";
export const Router = (route: string) => {
  useRouter().push(route);
};
