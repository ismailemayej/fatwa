import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Trending from "../trendingQ&A/Trending";
import Link from "next/link";
export function DetailsTabs({ data }: any) {
  return (
    <Tabs defaultValue="account" className=" w-full lg:hidden block bg-fixed">
      <TabsList className="">
        <Link href="/"> Home</Link>
        <div></div>
        <TabsTrigger value="account"></TabsTrigger>
        <TabsTrigger value="password">Populer</TabsTrigger>
      </TabsList>

      <TabsContent value="password">
        <Trending />
      </TabsContent>
      <TabsContent value="account">{data}</TabsContent>
    </Tabs>
  );
}
