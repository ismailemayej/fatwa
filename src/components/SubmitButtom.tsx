"use client";
import { Button, Spinner } from "@nextui-org/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton(
  { children }: { children: ReactNode },
  className: string
) {
  const { pending } = useFormStatus();
  return (
    <Button
      color="primary"
      className="my-3 w-full"
      disabled={pending}
      type="submit"
    >
      {pending ? <Spinner></Spinner> : children}
    </Button>
  );
}
