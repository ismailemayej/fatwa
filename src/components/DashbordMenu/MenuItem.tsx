import {
  LayoutDashboard,
  Contact2Icon,
  HomeIcon,
  ShoppingBag,
  PenIcon,
  Edit,
  LoaderCircle,
} from "lucide-react";
export const MainMenuItem = [
  { link: "/", icon: <HomeIcon />, name: "Home" },
  { link: "/", icon: <ShoppingBag />, name: "Shop" },
  { link: "/contact", icon: <Contact2Icon />, name: "Contact" },
  { link: "/", icon: <PenIcon />, name: "Blog" },
];
export const UserMenuItem = [
  { link: "/dashboard", icon: <LayoutDashboard />, name: "My Dashboard" },
  { link: "/dashboard/edit", icon: <Edit />, name: "Update Profile" },
];
export const AdminMenuItem = [
  { link: "/dashboard/admin", icon: <LayoutDashboard />, name: "Admin" },
  { link: "/dashboard/admin/pending", icon: <LoaderCircle />, name: "Pending" },
  // { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
  // { link: "/", icon: <LayoutDashboard />, name: "Dashboard" },
];
