"use client";
import React from "react";
import { Button } from "@/components/ui/shadcn/button";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToLocalCartItem } from "@/libs/redux/features/cartSlice";
import { RootState } from "@/libs/redux/store";

const Product_addToCart = () => {
  const currentCartItem = useSelector(
    (state: RootState) => state.cart.currentCartItem
  );
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        size="sm"
        className="cursor-pointer bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0"
        onClick={() => {
          // console.log(currentCartItem + "click to add");

          if (currentCartItem) {
            dispatch(addToLocalCartItem(currentCartItem));
          }
        }}
      >
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
    </div>
  );
};

export default Product_addToCart;
