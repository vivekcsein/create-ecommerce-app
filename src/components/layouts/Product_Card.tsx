import React from "react";
import Link from "next/link";
import { Badge } from "../ui/shadcn/badge";
import { ProductDetails } from "@/types/products";
import { imageURLFromGit } from "@/libs/configs/config.helper";
import Product_starRating from "../context/products/Product_starRating";
import Zoomable_imageOnTouchMove from "../ui/images/Zoomable_imageOnTouchMove";
import Product_addToCartDirectly from "../context/products/Product_addToCartDirectly";
import { Flame, Heart, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/shadcn/card";

interface Product_cardProps {
  product: ProductDetails;
}

const Product_Card = ({ product }: Product_cardProps) => {
  const imageURL = imageURLFromGit(product.images);

  return (
    <Card
      className={`relative min-w-[256px] pt-0 bg-primary/30 transition-all duration-300 hover:shadow-lg gap-0`}
    >
      <CardHeader className="px-0">
        <Zoomable_imageOnTouchMove
          src={imageURL}
          alt={product.images[0].alt}
          width={256}
          height={200}
          category="card"
          className="w-full h-40 object-cover rounded-lg rounded-b-none"
        />
        {/* Trending Badge */}
        <div className="absolute top-4 left-4 z-10">
          {product.isTrending ? (
            <Badge className="bg-red-500 hover:bg-red-600 text-white">
              <Flame className="w-3 h-3 mr-1" />
              Hot
            </Badge>
          ) : (
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
              <TrendingUp className="w-3 h-3 mr-1" />
              Rising
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute cursor-pointer top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-foreground">
          <Link
            href={`/product/${product.productName}`}
            className="text-[18px] hover:text-primary hover:underline transition-colors"
          >
            {product.productName}
          </Link>
        </CardTitle>
        <div className="flex items-center mb-2">
          <Product_starRating currentRating={product.currentRating} />
          <span className="text-muted-foreground ml-1">
            {product.currentRating}
          </span>
        </div>
        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-foreground    ">
            ${product.currentPrice}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${product.sellerPrice}
          </span>
          <span className="text-sm font-medium text-green-600">
            {Math.round(
              ((product.sellerPrice - product.currentPrice) /
                product.sellerPrice) *
                100
            )}
            % off
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center w-full ">
        <Product_addToCartDirectly Item={product} />
      </CardFooter>
    </Card>
  );
};

export default Product_Card;
