import React from "react";
import { ProductDetails } from "@/types/products";
import Product_starRating from "./Product_starRating";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import Images_products from "@/components/ui/tailwindcss/Images/Images_products";
import Product_addToCartDirectly from "./Product_addToCartDirectly";

interface Product_cardProps {
  Item: ProductDetails;
}

// const colorClassMap: Record<string, string> = {
//   pink: "bg-pink-800 border-pink-500/30 hover:border-pink-400/50 hover:shadow-pink-400/20",
//   rose: "bg-rose-800 border-rose-500/30 hover:border-rose-400/50 hover:shadow-rose-400/20",
//   blue: "bg-blue-800 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-400/20",
//   green:
//     "bg-green-800 border-green-500/30 hover:border-green-400/50 hover:shadow-green-400/20",
//   gray: "bg-gray-800 border-gray-500/30 hover:border-gray-400/50 hover:shadow-gray-400/20",
//   white: "bg-white border-white/30 hover:border-white/50 hover:shadow-white/20",
// };
// Add more colors as needed

const Product_card = ({ Item }: Product_cardProps) => {
  // const colorClass =
  //   colorClassMap[Item.color as keyof typeof colorClassMap] ||
  //   colorClassMap[""];
  return (
    <Card
      className={`min-w-[300px] bg-gradient-to-r pt-0 from-primary to-background transition-all duration-300 hover:shadow-lg`}
    >
      <CardHeader className="pb-4 px-0 ">
        <Images_products images={Item.images} />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-foreground text-lg mb-2">
          {Item.productName}
        </CardTitle>
        <div className="flex items-center mb-2">
          <Product_starRating currentRating={Item.currentRating} />
          <span className="text-gray-500 ml-1">{Item.currentRating}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-xl font-bold text-pink-400">
          ${Item.currentPrice}
        </span>
        <Product_addToCartDirectly Item={Item} />
      </CardFooter>
    </Card>
  );
};

export default Product_card;
