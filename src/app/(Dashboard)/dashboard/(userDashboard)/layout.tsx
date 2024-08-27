import UserDashboardNavbar from "@/components/DashboardNavbar/UserDashboardNavbar";
import UserMenu from "@/components/DashbordMenu/UserMenu";
import { userInformation } from "@/components/DataAction/DataHandle";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Bangla Fatwa knowlage",
};
export default async function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userInformation();
  return (
    <div className="lg:grid lg:grid-cols-12 s bg-slate-200">
      <div className=" bg-[#405189] text-[#c4c6cc] p-2 h-screen lg:col-span-2 lg:block hidden">
        <UserMenu />
      </div>
      <div className=" col-span-10">
        <UserDashboardNavbar user={user} />
        {children}
      </div>
    </div>
  );
}
