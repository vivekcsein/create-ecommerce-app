import React from "react";

import {
  NavigationMenu,
  NavigationMenuContentNavbar,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../shadcn/navigation-menu";
import Navbar_Link from "../Navbar_Link";
import Border from "@/components/layouts/Wrapper/Border";

const Navbar_desktop_dropdown = ({
  dropdownData,
  dropdownLabel,
}: {
  dropdownData: Array<nav_Links>;
  dropdownLabel: string;
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="border-0 text-white text-[14px]">
            {dropdownLabel}
          </NavigationMenuTrigger>
          <NavigationMenuContentNavbar>
            <Border
              variant="offset-bottom-right"
              size="small"
              className="flex flex-col gap-5 py-2 px-4"
            >
              {dropdownData.map((item) => {
                return (
                  <Navbar_Link
                    key={item.id}
                    item={{
                      label: item.label,
                      href: item.href,
                    }}
                  />
                );
              })}
            </Border>
          </NavigationMenuContentNavbar>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar_desktop_dropdown;
