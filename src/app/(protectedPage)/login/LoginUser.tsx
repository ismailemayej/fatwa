"use client";
import { Input } from "@nextui-org/react";
import React, { createRef, useEffect } from "react";
import login from "../../../../public/Login-bro.svg";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import SubmitButton from "@/components/SubmitButtom";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { loginUser } from "@/components/DataAction/DataHandle";
import { useRouter } from "next/navigation";
import { SetCookies } from "@/utils/Cookies";
import LoginInfo from "@/components/loginInfo/LoginInfo";
export const Token = "accessToken";
const SignIn = () => {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  const [state, fromAction] = useFormState(loginUser, null);
  useEffect(() => {
    if (state && state.success) {
      SetCookies("accessToken", state?.token);
      toast.success("Successfully signed in");
      ref.current?.reset();
      router.push("/");
    } else if (state) {
      toast.error(state?.message);
    }
  }, [state, ref, router]);
  return (
    <div className=" lg:m-2 lg:p-2 lg:px-4 rounded-xl">
      <div className="grid lg:grid-cols-2 lg:gap-10">
        <div className="lg:block hidden">
          <Image
            className=""
            src={login}
            alt="Login image"
            height={600}
            width={600}
          />
        </div>
        <div className="lg:border-t-4 lg:mx-10 lg:border-green-300 lg:bg-white p-3 m-3 rounded-xl shadow-xl">
          <LoginInfo />
          <form ref={ref} action={fromAction}>
            <h2 className="lg:text-4xl text-2xl text-amber-600  font-bold text-center my-4">
              LogIn
            </h2>
            <Input
              name="email"
              type="email"
              className="mx-auto my-3 outline-none rounded-xl bg-slate-100"
              variant="bordered"
              label="Email"
            />
            <Input
              name="password"
              type="password"
              className="mx-auto outline-none rounded-xl bg-slate-100"
              variant="bordered"
              label="Password"
            />
            <div className="mx-auto w-full">
              <SubmitButton>Login</SubmitButton>
            </div>
          </form>
          <span className="lg:text-black text-white">
            You are not a User? Please
          </span>
          <Link
            className="lg:text-blue-500 text-yellow-400 ml-2 my-2 font-semibold hover:text-green-500"
            href="/registration"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
