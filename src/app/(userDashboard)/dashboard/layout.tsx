import UserMenu from "@/components/DashbordMenu/UserMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Bangla Fatwa knowlage",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:gap-2 m-2">
      <div className=" lg:col-span-2 lg:block hidden">
        <UserMenu />
      </div>
      <div className=" col-span-10">{children}</div>
    </div>
  );
}
