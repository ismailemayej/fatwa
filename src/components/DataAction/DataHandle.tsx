"use server";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
export const SignUpUser = async (
  prevData: FormData,
  currentFormData: FormData
) => {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(currentFormData));
    console.log("Formatted Data:", formattedData);

    const res = await fetch(`${process.env.BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formattedData,
    });

    if (!res.ok) {
      throw new Error(`Server responded with status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

//  post mehtod
export const Post = async (data: any, name: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
//  Get mehtod
export const Get = async (name: any, querydata: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}?${querydata}`);
  return res.json();
};
//  Update mehtod
export const Update = async (data: any, name: any, id: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};
//Delete mehtod
export const Delete = async (name: any, id: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 30 },
  });
  if (!res.ok) {
    const errorDetails = await res.text();
    throw new Error(`Network response was not ok: ${errorDetails}`);
  }

  return res.json();
};
// get user information
export const UserInfo = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};
