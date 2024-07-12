import Container from "@/components/container";
import { Get } from "@/components/DataAction/DataHandle";
import Footer from "@/components/Footer/Footer";
import LeftSide from "@/components/LeftSide";
import MainSlider from "@/components/mainSlider/MainSlider";
import PostCard from "@/components/PostCard";
import RightSide from "@/components/RightSide";
import { PostTabs } from "@/components/Tabs/PostTabs";
import { ScrollShadow } from "@nextui-org/react";
export default async function Home() {
  const data = await Get("ans", "approve=true");
  return (
    <>
      <MainSlider data={data} />
      <Container>
        <div className="lg:grid lg:gap-3 lg:grid-cols-12 mx-3 lg:mx-0 my-2">
          <LeftSide />
          <ScrollShadow
            hideScrollBar
            offset={100}
            orientation="horizontal"
            className=" border-t-gray-300 border-2 shadow-2xl rounded-xl  h-screen col-span-6 p-2"
          >
            <PostTabs data={data} />
            {data?.data.map((ans: any) => (
              <>
                <span className="lg:block hidden">
                  <PostCard key={ans._id} data={ans} />
                </span>
              </>
            ))}
          </ScrollShadow>
          <RightSide />
        </div>
      </Container>
      <Footer />
    </>
  );
}
