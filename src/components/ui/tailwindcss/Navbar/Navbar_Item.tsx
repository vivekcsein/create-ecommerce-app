"use client";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import Link from "next/link";
import { LucideProps } from "lucide-react";
import { useIsMobile } from "@/libs/shadcn/hooks/use-mobile";
import { Badge } from "../../shadcn/badge";
import DynamicSVG from "../../helper/DynamicSVG";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";

interface Navbar_ItemProps {
  item: {
    label: string;
    href?: string;
    Icon?:
      | ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >
      | string;
    badge?: string | number;
  };
}
const Navbar_Item = ({
  item: { label, href, Icon, badge },
}: Navbar_ItemProps) => {
  const localCartItems = useSelector(
    (state: RootState) => state.cart.localCartItems
  );
  const isMobile = useIsMobile();

  return (
    <Link
      href={href ? href : "/"}
      className={` ${isMobile ? "w-full flex gap-5 py-[6px] my-1 px-4 coolBackgroundEffect" : "coolLink"}`}
    >
      <div className="flex gap-2 ">
        {Icon ? (
          typeof Icon === "string" ? (
            // If Icon is a string, use DynamicSVG and cast to the correct type
            <DynamicSVG iconName={Icon} />
          ) : (
            // If Icon is a component, render it
            <Icon className="w-5 h-5 mr-2" />
          )
        ) : null}
        <span>{label}</span>
      </div>
      {badge && (
        <Badge className="ml-auto h-5 w-5 rounded-full p-0 text-xs">
          {localCartItems.length > 0 ? localCartItems.length : badge}
        </Badge>
      )}
    </Link>
  );
};
export default Navbar_Item;
