import { LayoutDashboard, ShoppingCart, ChevronRight } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/shadcn/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/shadcn/collapsible";

import Navbar_logo from "../Navbar_logo";
import Navbar_mobile_footer from "./Navbar_mobile_footer";
import Navbar_Item from "../Navbar_Item";
import Navbar_mobile_Item_wrapper from "./Navbar_mobile_Item_wrapper";
import React from "react";
import DynamicSVG from "@/components/ui/helper/DynamicSVG";

// Main navigation items
const accountItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    Icon: LayoutDashboard,
  },
  {
    label: "Cart",
    href: "/cart",
    Icon: ShoppingCart,
    badge: "3",
  },
];

interface AppSidebarProps {
  headerData: HeaderData;
}
export function AppSidebar({ headerData }: AppSidebarProps) {
  const {
    navbar: { nav_Links },
  } = headerData;

  return (
    <Sidebar side="left" variant="sidebar" collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Navbar_logo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav_Links.map((item) => (
                <SidebarMenuItem key={item.label}>
                  {item.subItems ? (
                    <Collapsible className="group/collapsible">
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <div className="px-2 flex gap-2">
                            <DynamicSVG iconName={item.icon} />
                            <span>{item.label}</span>
                          </div>
                          <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.label}>
                              <Navbar_mobile_Item_wrapper>
                                <Navbar_Item
                                  item={{
                                    label: subItem.label,
                                    href: subItem.href,
                                    Icon: subItem.icon,
                                  }}
                                />
                              </Navbar_mobile_Item_wrapper>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Navbar_mobile_Item_wrapper>
                      <Navbar_Item
                        item={{
                          label: item.label,
                          href: item.href,
                          Icon: item.icon,
                        }}
                      />
                    </Navbar_mobile_Item_wrapper>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account Section */}
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Navbar_mobile_Item_wrapper>
                    <Navbar_Item
                      item={{
                        label: item.label,
                        href: item.href,
                        Icon: item.Icon,
                        badge: item.badge,
                      }}
                    />
                  </Navbar_mobile_Item_wrapper>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <Navbar_mobile_footer />
    </Sidebar>
  );
}
