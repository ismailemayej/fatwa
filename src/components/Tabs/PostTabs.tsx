import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "../PostCard";
import Trending from "../trendingQ&A/Trending";
import TotalPost from "../totalPost.tsx/TotalPost";
import Tags from "../tags/Tags";
import Advisement from "../advisement/Advisement";
import AskQuestion from "../AskQuestion/AskQuestion";
import { Get, userInformation } from "../DataAction/DataHandle";
import Link from "next/link";
import { Button } from "@nextui-org/button";
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
        <Tags />
      </TabsContent>
      <TabsContent value="account">
        {data?.data?.map((ans: any) => (
          <PostCard key={ans._id} data={ans} />
        ))}
      </TabsContent>
      {user?.email ? (
        <TabsContent value="askquestion">
          <AskQuestion lengthData={length.length} useremail={user?.email} />
        </TabsContent>
      ) : (
        <span>
          Login First{" "}
          <Button>
            <Link href="/login">Login</Link>
          </Button>{" "}
        </span>
      )}
    </Tabs>
  );
}
