import AdminDashboardNavbar from "@/components/DashboardNavbar/AdminDashboardNavbar";
import AdminMenu from "@/components/DashbordMenu/AdminMenu";
import { userInformation } from "@/components/DataAction/DataHandle";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Bangla Fatwa knowlage",
};
export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userInformation();

  return (
    <div className="lg:grid lg:grid-cols-12 ">
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white p-2 h-screen lg:col-span-2 lg:block hidden">
        <AdminMenu />
      </div>
      <div className="col-span-10">
        <AdminDashboardNavbar user={user} />
        {children}
      </div>
    </div>
  );
}
