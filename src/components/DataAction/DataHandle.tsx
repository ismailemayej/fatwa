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

    const res = await fetch("http://localhost:5000/api/v1/register", {
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
    if (error?.name === "TypeError" && error?.message === "Failed to fetch") {
      console.error("Network error or CORS issue:", error);
    } else {
      console.error("Error during user sign-up:", error);
    }
    throw error;
  }
};

//  post mehtod
export const Post = async (data: any, name: any) => {
  const res = await fetch(`http://localhost:5000/api/v1/${name}`, {
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
  const res = await fetch(`http://localhost:5000/api/v1/${name}?${querydata}`, {
    cache: "no-store",
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json();
};
//  Update mehtod
export const Update = async (data: any, name: any, id: any) => {
  const res = await fetch(`http://localhost:5000/api/v1/${name}/${id}`, {
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
  const res = await fetch(`http://localhost:5000/api/v1/${name}/${id}`, {
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
