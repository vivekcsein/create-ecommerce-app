"use client";
import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";

const Cart_header = () => {
  const localCartItems = useSelector(
    (state: RootState) => state.cart.localCartItems
  );
  return (
    <Link href={"/cart"} className="hover:scale-110 relative">
      <ShoppingCart />
      <div className="absolute -top-2 left-2 rounded-2xl bg-foreground w-full text-center text-background  text-[14px] ">
        {localCartItems.length}
      </div>
    </Link>
  );
};

export default Cart_header;
