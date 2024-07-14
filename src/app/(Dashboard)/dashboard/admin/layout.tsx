import AdminDashboardNavbar from "@/components/DashboardNavbar/AdminDashboardNavbar";
import AdminMenu from "@/components/DashbordMenu/AdminMenu";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Bangla Fatwa knowlage",
};
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="lg:grid lg:grid-cols-12  bg-slate-200">
      <div className=" bg-sky-700 text-white p-2 h-screen lg:col-span-2 lg:block hidden">
        <AdminMenu />
      </div>
      <div className=" col-span-10">
        <AdminDashboardNavbar />
        {children}
      </div>
    </div>
  );
}
