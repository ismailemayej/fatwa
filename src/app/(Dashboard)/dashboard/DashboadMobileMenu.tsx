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
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger asChild>
          <button className="">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className=" w-60 bg-sky-700 text-white">
          {children}

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
