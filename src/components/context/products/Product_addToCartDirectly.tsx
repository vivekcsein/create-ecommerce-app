"use client";
import React from "react";
import { Button } from "@/components/ui/shadcn/button";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToLocalCartItem } from "@/libs/redux/features/cartSlice";
import { ProductDetails } from "@/types/products";

interface Product_addToCartDirectlyProps {
  Item: ProductDetails;
}

const Product_addToCartDirectly = ({
  Item,
}: Product_addToCartDirectlyProps) => {
  const currentItem = {
    uid: String(Item.uid),
    productName: Item.productName,
    currentPrice: Item.currentPrice,
    maxQuantity: Item.availableQuantity ?? 100,
    quantity: 1,
    sellerPrice: Item.sellerPrice,
    thumbImage: Item.images[0]?.src,
    thumbImageAlt: Item.images[0]?.alt,
  };
  const dispatch = useDispatch();
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4">
      <Button
        size="sm"
        className="w-full cursor-pointer bg-gradient-to-r from-primary to-secondary hover:from-primary-foreground hover:to-secondary-foreground text-white border-0"
        onClick={() => {
          dispatch(addToLocalCartItem(currentItem));
        }}
      >
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
    </div>
  );
};

export default Product_addToCartDirectly;
