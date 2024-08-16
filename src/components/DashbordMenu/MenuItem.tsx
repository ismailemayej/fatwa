import {
  LayoutDashboard,
  Contact2Icon,
  HomeIcon,
  PenIcon,
  Edit,
  LoaderCircle,
  User2,
} from "lucide-react";
export const MainMenuItem = [
  { link: "/", icon: <HomeIcon />, name: "Home" },
  // { link: "/", icon: <ShoppingBag />, name: "Shop" },
  { link: "/contact", icon: <Contact2Icon />, name: "Contact" },
  { link: "/blog", icon: <PenIcon />, name: "Blog" },
];
export const UserMenuItem = [
  { link: "/dashboard", icon: <LayoutDashboard />, name: "My Dashboard" },
  { link: "/dashboard/edit", icon: <Edit />, name: "Update Profile" },
];
export const AdminMenuItem = [
  { link: "/dashboard/admin", icon: <LayoutDashboard />, name: "Admin" },
  { link: "/dashboard/admin/pending", icon: <LoaderCircle />, name: "Pending" },
  {
    link: "/dashboard/admin/users",
    icon: <User2 />,
    name: "All User",
  },
  // { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
];
