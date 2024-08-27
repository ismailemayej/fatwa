import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "../PostCard";
import Trending from "../trendingQ&A/Trending";
import TotalPost from "../totalPost.tsx/TotalPost";
import Tags from "../tags/Tags";
import Advisement from "../advisement/Advisement";
import AskQuestion from "../AskQuestion/AskQuestion";
import { Get, userInformation } from "../DataAction/DataHandle";
import Link from "next/link";
export async function PostTabs({ data }: any) {
  const allLength = await Get("questions", "");
  const length = allLength?.data;
  const user = await userInformation();
  return (
    <Tabs defaultValue="account" className="lg:hidden">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">All Q&A</TabsTrigger>
        <TabsTrigger value="password">Others</TabsTrigger>
        <TabsTrigger value="askquestion" className="bangla">
          প্রশ্ন করুন
        </TabsTrigger>
      </TabsList>
      <TabsContent value="password">
        <Trending />
        <TotalPost />
        <Advisement />
        <span className="my-2">
          <Tags data={length} />
        </span>
      </TabsContent>
      <TabsContent value="account">
        {data?.data?.map((ans: any) => (
          <PostCard key={ans._id} data={ans} />
        ))}
      </TabsContent>
      <TabsContent value="askquestion">
        {user?.email ? (
          <AskQuestion lengthData={length.length} useremail={user?.email} />
        ) : (
          <>
            <div className="items-center bangla">
              প্রশ্ন করতে হলে আপনাকে মেম্বার হতে হবে। যদি রেজিষ্ট্রেশন করা থাকে
              তাহলে লগিন করুন। না হয় রেজিষ্ট্রেশন করে নিন।
            </div>
            <Link
              href="/login"
              className="bg-red-500 py-1 px-3 rounded-xl text-white hover:bg-white hover:border hover:border-red-800 hover:transition-all hover:text-red-500 items-center"
            >
              Login/Registration
            </Link>
          </>
        )}
      </TabsContent>
    </Tabs>
  );
}
