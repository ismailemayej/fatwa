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
  const { user } = useAuth();
  const handledelete = () => {
    RemoveCookie("accessToken");
    router.refresh();
    toast.success("Delete Successfully");
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
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{user?.email}</p>
          </DropdownItem>
          <DropdownItem key="dashboard" as={Link} href="/dashboard">
            Dashboard
          </DropdownItem>
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
