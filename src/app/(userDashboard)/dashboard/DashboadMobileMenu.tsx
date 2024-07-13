import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@nextui-org/button";
import { ListCollapseIcon } from "lucide-react";
export function DashboardMobileMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white lg:hidden block">
      <Sheet>
        <SheetTrigger asChild>
          <button className="bg-foreground-300">
            <ListCollapseIcon />{" "}
          </button>
        </SheetTrigger>
        <SheetContent side="left" className=" bg-white">
          {children}
          {/* <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">Check</div>
          </div> */}
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Close menu</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
