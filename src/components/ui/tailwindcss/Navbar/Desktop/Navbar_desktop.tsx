import React from "react";
import Navbar_desktop_dropdown from "./Navbar_desktop_dropdown";
import Themes from "@/components/layouts/Themes";
import Navbar_Link from "../Navbar_Link";
import Navbar_User from "../Navbar_User";
import Navbar_Auth from "../Navbar_Auth";
import Cart_header from "../../cart/Cart_header";

const Navbar_desktop = ({
  navbarData,
  isAuthenticated,
}: {
  navbarData: navbar;
  isAuthenticated?: boolean;
}) => {
  return (
    <nav>
      <ul className="flex space-x-4 ">
        {navbarData.nav_Links.map((item) =>
          item.subItems ? (
            <li key={item.id} className="center ">
              <Navbar_desktop_dropdown
                dropdownData={item.subItems}
                dropdownLabel={item.label}
              />
            </li>
          ) : (
            <li key={item.id} className="center">
              <Navbar_Link
                item={{
                  label: item.label,
                  href: item.href,
                }}
              />
            </li>
          )
        )}

        <li className="center ">
          <Themes />
        </li>
        <li className="center ">
          {isAuthenticated ? <Navbar_User /> : <Navbar_Auth />}
        </li>
        <li className="center ">
          <Cart_header />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar_desktop;
