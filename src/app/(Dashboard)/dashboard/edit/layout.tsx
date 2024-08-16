import MainSlider from "@/components/mainSlider/MainSlider";
import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "User Edit Profile",
  description: "Bangla Fatwa knowlage",
};
export default function UserProfileEdit({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MainSlider />
      {children}
    </div>
  );
}
