"use server";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
// for User Register
export async function signUpUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    const res = await fetch(`${process.env.BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: formattedData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
// for User Login
export async function loginUser(pre: FormData, fromData: FormData) {
  try {
    const formattedData = JSON.stringify(Object.fromEntries(fromData));
    const res = await fetch(`${process.env.BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: formattedData,
    });
    const data = await res.json();
    if (data.success) {
      cookies().set("accessToken", data.token);
      // cookies().set("refreshToken", data.refreshToken);
      return data;
    }
    return data;
  } catch (error) {
    throw error;
  }
}
// user Information
export async function userInfo() {
  try {
    const accessToken = cookies().get("accessToken")?.value;
    if (accessToken) {
      let decodedData = null;
      decodedData = await jwtDecode(accessToken);
      return {
        email: decodedData.email,
        role: decodedData.role,
        id: decodedData.id,
      };
    }
    {
      return null;
    }
  } catch (error) {
    throw error;
  }
}

//  post mehtod
export const Post = async (data: any, name: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}`, {
    cache: "no-store",
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
  const res = await fetch(`${process.env.BASE_URL}/${name}?${querydata}`, {
    cache: "no-store",
  });
  return res.json();
};
//  Update mehtod
export const Update = async (data: any, name: any, id: any) => {
  const res = await fetch(`${process.env.BASE_URL}/${name}/${id}`, {
    cache: "no-store",
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
    cache: "no-store",
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
