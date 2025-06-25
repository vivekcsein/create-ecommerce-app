import { SidebarMenuButton } from "@/components/ui/shadcn/sidebar";
import React from "react";

interface Navbar_mobile_Item_wrapper {
  children: React.ReactNode;
}
const Navbar_mobile_Item_wrapper = ({
  children,
}: Navbar_mobile_Item_wrapper) => {
  return <SidebarMenuButton asChild>{children}</SidebarMenuButton>;
};

export default Navbar_mobile_Item_wrapper;
