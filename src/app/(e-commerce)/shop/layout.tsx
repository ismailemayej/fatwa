import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ShopNavbar from "./navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Digital Shop",
  description: "Digital shop E-book",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ShopNavbar />
      <div className="lg:mx-12 mx-3">{children}</div>
    </>
  );
}
