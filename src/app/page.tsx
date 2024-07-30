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
  const data = await Get("questions", "approve=true");
  return (
    <>
      <MainSlider />
      <Container>
        <div className="lg:grid lg:gap-3 lg:grid-cols-12 mx-3 lg:mx-0 my-2">
          <LeftSide />

          <PostTabs data={data} />
          {data?.data.length == 0 && (
            <p className="text-center"> No Data Avalable </p>
          )}
          {data?.data?.reverse().map((ans: any) => (
            <>
              <span className="lg:block hidden">
                <PostCard key={ans._id} data={ans} />{" "}
              </span>
            </>
          ))}

          <RightSide />
        </div>
      </Container>
      <Footer />
    </>
  );
}
