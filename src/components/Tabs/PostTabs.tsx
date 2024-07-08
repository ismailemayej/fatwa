import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "../PostCard";
import Trending from "../trendingQ&A/Trending";
export function PostTabs({ data }: any) {
  return (
    <Tabs defaultValue="account" className=" w-full lg:hidden block">
      <TabsList className="">
        <TabsTrigger value="account">All Q&A</TabsTrigger>
        <TabsTrigger value="password">Populer</TabsTrigger>
      </TabsList>
      <TabsContent value="password">
        {" "}
        <Trending />
      </TabsContent>
      <TabsContent value="account">
        {data.data.map((ans: any) => (
          <PostCard data={ans} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
