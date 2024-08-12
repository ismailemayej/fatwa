import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@nextui-org/button";
import { MainMenuItem } from "../DashbordMenu/MenuItem";
import Link from "next/link";
export function HomeMobileMenu() {
  return (
    <div className=" lg:hidden block">
      <Sheet>
        <SheetTrigger asChild>
          <button className=" rounded-xl text-white p-0.5">
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
        <SheetContent side="left" className="w-60 bg-sky-700 text-white">
          <ul>
            <p>Main Menu</p>
            <hr />
            {MainMenuItem.map((item, index) => (
              <li key={index} className="my-1">
                <Link
                  href={item.link}
                  className="flex items-center gap-2 hover:border-s-[4px] hover:border-blue-100 hover:transition-all hover:scale-60 py-3 hover:pl-2 hover:text-white"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

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
