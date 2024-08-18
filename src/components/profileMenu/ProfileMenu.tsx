import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useAuth } from "@/lib/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RemoveCookie } from "@/utils/Cookies";
export default function ProfileMenuOn({ menuon }: any) {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const handledelete = () => {
    RemoveCookie("accessToken");
    setUser(null);
    router.refresh();
    toast.success("LogOut Successfully");
  };
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          {menuon}
          {/* <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          /> */}
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <span className="flex gap-1 items-center justify-between ">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold bg-neutral-900 rounded-xl text-white shadow-orange-900 px-2">
                {user?.role === "admin" ? "admin" : "user"}
              </p>
            </span>
            <p className="font-semibold">{user?.email}</p>
          </DropdownItem>
          {user?.role === "admin" ? (
            <DropdownItem key="dashboard" as={Link} href="/dashboard/admin">
              Dashboard
            </DropdownItem>
          ) : (
            <DropdownItem key="dashboard" as={Link} href="/dashboard">
              Dashboard
            </DropdownItem>
          )}
          <DropdownItem
            className="flex-row gap-1 "
            key="edit"
            as={Link}
            href="/dashboard/edit"
          >
            Edit
          </DropdownItem>
          <DropdownItem onClick={handledelete} key="/logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
