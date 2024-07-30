import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "../PostCard";
import Trending from "../trendingQ&A/Trending";
import TotalPost from "../totalPost.tsx/TotalPost";
import Tags from "../tags/Tags";
import Advisement from "../advisement/Advisement";
import AskQuestion from "../AskQuestion/AskQuestion";
import { Get, UserInfo } from "../DataAction/DataHandle";
import { ScrollShadow } from "@nextui-org/react";
export async function PostTabs({ data }: any) {
  const allLength = await Get("questions", "");
  const length = allLength?.data;
  const mail = await UserInfo();
  return (
    <Tabs defaultValue="account" className=" w-full lg:hidden block">
      <TabsList className="">
        <TabsTrigger value="account">All Q&A</TabsTrigger>
        <TabsTrigger value="password">Others</TabsTrigger>
        <TabsTrigger
          value="askquestion"
          className="bangla shadow-lg rounded-xl px-2"
        >
          প্রশ্ন করুন
        </TabsTrigger>
      </TabsList>
      <ScrollShadow
        hideScrollBar
        offset={100}
        orientation="horizontal"
        className=" border-t-gray-300 border-2 shadow-2xl rounded-xl  h-screen col-span-6 p-2"
      >
        <TabsContent value="password">
          <Trending />
          <TotalPost />
          <Advisement />
          <Tags />
        </TabsContent>
        <TabsContent value="account">
          {data?.data?.map((ans: any) => (
            <PostCard key={ans._id} data={ans} />
          ))}
        </TabsContent>
        <TabsContent value="askquestion">
          <AskQuestion lengthData={length.length} useremail={mail?.email} />
        </TabsContent>
      </ScrollShadow>
    </Tabs>
  );
}
