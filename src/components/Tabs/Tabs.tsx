import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export function ContentTabs({ left, right }: any) {
  return (
    <Tabs defaultValue="account" className="w-full lg:hidden block">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">{left}</TabsContent>
      <TabsContent value="password">{right}</TabsContent>
    </Tabs>
  );
}
