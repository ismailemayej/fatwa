import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import Container from "@/components/container";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { ScrollShadow } from "@nextui-org/react";
import MainSlider from "@/components/MainSlider";
import { DetailsTabs } from "@/components/Tabs/DetailsTabs";
export const metadata: Metadata = {
  title: "Fatwa in Bangla",
  description: "Bangla Fatwa knowlage",
};

export default function DatailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <MainSlider />
      <Container>
        <div className="lg:grid lg:gap-3 lg:grid-cols-12 mx-3 lg:mx-0 my-2">
          <LeftSide />
          <ScrollShadow
            hideScrollBar
            offset={100}
            orientation="horizontal"
            className=" border-t-gray-300 border-2 shadow-2xl rounded-xl  h-screen col-span-6 p-2"
          >
            <DetailsTabs data={children} />
            <span className="lg:block hidden"> {children}</span>
          </ScrollShadow>
          <RightSide />
        </div>
      </Container>
    </>
  );
}
