import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Bangla Fatwa knowlage",
};

export default function UserDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
