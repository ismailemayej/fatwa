import UserDashboardNavbar from "@/components/DashboardNavbar/UserDashboardNavbar";
import UserMenu from "@/components/DashbordMenu/UserMenu";
import { userInformation } from "@/components/DataAction/DataHandle";
import Footer from "@/components/Footer/Footer";
import LeftSide from "@/components/LeftSide";
import MainSlider from "@/components/mainSlider/MainSlider";
import Navbar from "@/components/navbar/navbar";
import RightSide from "@/components/RightSide";
import { ScrollShadow } from "@nextui-org/react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ask Question",
  description: "Bangla Fatwa knowlage",
};
export default async function AskQuestionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await userInformation();
  return (
    <>
      <Navbar user={user} />
      <MainSlider />
      <div className="lg:grid lg:gap-3 lg:grid-cols-12 lg:mt-2 mx-3 lg:mx-0 my-2">
        <LeftSide />
        <ScrollShadow
          hideScrollBar
          offset={100}
          orientation="horizontal"
          className=" border-t-gray-300 border-2 shadow-2xl rounded-xl  h-screen col-span-6 p-2"
        >
          <span className=""> {children}</span>
        </ScrollShadow>
        <RightSide />
      </div>

      <Footer />
    </>
  );
}
