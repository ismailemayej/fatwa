"use client";
import { Input } from "@nextui-org/react";
import React, { createRef, useEffect } from "react";
import login from "../../../../public/Login-bro.svg";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import { signUpUser } from "@/components/DataAction/DataHandle";
import SubmitButton from "@/components/SubmitButtom";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const Registration = () => {
  const router = useRouter();
  const ref = createRef<HTMLFormElement>();
  const [state, fromAction] = useFormState(signUpUser, null);
  useEffect(() => {
    if (state && state.success) {
      toast.success("successfully signed up");
      router.push("/login");
      ref.current?.reset();
    } else {
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
          <form ref={ref} action={fromAction}>
            <h2 className="lg:text-4xl text-2xl text-amber-600  font-bold text-center my-4">
              Registration
            </h2>
            <Input
              name="name"
              type="text"
              className="mx-auto my-3 outline-none rounded-xl bg-slate-100"
              variant="bordered"
              label="Full Name"
            />
            <Input
              name="email"
              type="email"
              className="mx-auto my-3 outline-none rounded-xl bg-slate-100"
              variant="bordered"
              label="Email"
            />
            <Input
              name="phone"
              type="text"
              className="mx-auto my-3 outline-none rounded-xl bg-slate-100"
              variant="bordered"
              label="Phone number"
            />
            <Input
              name="password"
              type="password"
              className="mx-auto outline-none rounded-xl bg-slate-100"
              variant="bordered"
              label="Password"
            />
            <Input
              name="role"
              defaultValue="user"
              type="text"
              className="hidden"
            />
            <div className="mx-auto w-full">
              <SubmitButton>Register</SubmitButton>
            </div>
          </form>
          <span className="lg:text-black text-white">
            Have an Account? please
          </span>
          <Link
            className="lg:text-blue-500 text-yellow-400 ml-2 my-2 font-semibold hover:text-green-500"
            href="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Registration;
