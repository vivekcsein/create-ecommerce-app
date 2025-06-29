import React from "react";
import DynamicSVG from "@/components/ui/helper/DynamicSVG";
import { productCategories, ProductDetails } from "@/types/products";
import { Button } from "@/components/ui/shadcn/button";
import Product_starRating from "./Product_starRating";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import Images_products from "@/components/ui/tailwindcss/Images/Images_products";
interface Product_catalogProps {
  categoryItems: Array<ProductDetails>;
  categoryName: productCategories;
  icon?: string;
}
const colorClassMap: Record<string, string> = {
  pink: "bg-pink-800 border-pink-500/30 hover:border-pink-400/50 hover:shadow-pink-400/20",
  rose: "bg-rose-800 border-rose-500/30 hover:border-rose-400/50 hover:shadow-rose-400/20",
  blue: "bg-blue-800 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-400/20",
  green:
    "bg-green-800 border-green-500/30 hover:border-green-400/50 hover:shadow-green-400/20",
  gray: "bg-gray-800 border-gray-500/30 hover:border-gray-400/50 hover:shadow-gray-400/20",
  white: "bg-white border-white/30 hover:border-white/50 hover:shadow-white/20",
  // Add more colors as needed
};

const Product_catalog = ({
  categoryItems,
  categoryName,
  icon,
}: Product_catalogProps) => {
  if (!categoryItems) {
    return <p>No Items Found</p>;
  }
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        {/* <Shirt className="w-8 h-8 text-pink-400 mr-3" /> */}
        <DynamicSVG iconName={icon} className="w-8 h-8 text-foreground mr-3" />
        <h3 className="text-3xl font-bold text-foreground">{categoryName}</h3>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {categoryItems.map((item) => {
          const colorClass =
            colorClassMap[item.color as keyof typeof colorClassMap] ||
            colorClassMap["pink"];

          return (
            <Card
              key={item.uid}
              className={`${colorClass} transition-all duration-300 hover:shadow-lg`}
            >
              <CardHeader className="pb-4">
                <Images_products images={item.images} />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-foreground text-lg mb-2">
                  {item.productName}
                </CardTitle>
                <div className="flex items-center mb-2">
                  <Product_starRating currentRating={item.currentRating} />
                  <span className="text-gray-500 ml-1">
                    {item.currentRating}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-xl font-bold text-pink-400">
                  ${item.currentPrice}
                </span>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white border-0"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Product_catalog;
