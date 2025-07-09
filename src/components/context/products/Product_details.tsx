import { ProductDetails } from "@/types/products";
import React from "react";
import Product_starRating from "./Product_starRating";
import Product_quantity from "./Product_quantity";
import Product_addToCart from "./Product_addToCart";
import { Separator } from "@/components/ui/shadcn/separator";
import Animated_card from "@/components/wrappers/Animated_card";
import Promotion_forFastdelivery from "@/components/ui/helper/Promotion_forFastdelivery";
import Product_features from "./Product_features";

interface Product_detailsProps {
  item: ProductDetails;
}
const Product_details = ({ item }: Product_detailsProps) => {
  const {
    uid,
    Category,
    isTrending,
    productName,
    currentPrice,
    availableQuantity,
    details,
    ...props
  } = item;

  const discountoffer = () => {
    return Math.round(
      ((props.sellerPrice - currentPrice) * 100) / props.sellerPrice
    );
  };
  return (
    <div className="space-y-6">
      {isTrending ? (
        <span className="inline-block text-white px-3 py-1 bg-gradient-to-r from-secondary to-primary rounded-full mb-2">
          trending now
        </span>
      ) : null}

      <h2 className="textGradient">{productName ? productName : ""}</h2>

      <div className="space-y-4">
        <Product_starRating
          currentRating={props.currentRating}
          //   totalReviews={props.totalReview}
        />
        <div
          className="text-foreground"
          style={{
            fontSize: `${props.description.length < 100 ? "20px" : "14px"}`,
          }}
        >
          {props.description
            ? props.description
            : "product description not found"}
        </div>
      </div>

      <div className="flex items-baseline">
        <span className="text-4xl font-bold text-foreground">
          ${currentPrice}
        </span>
        <span className="ml-2 text-lg line-through text-gray-400">
          ${props.sellerPrice}
        </span>
        <span className="ml-2 text-sm px-2 py-1 bg-cyan-500/20 text-secondary font-extrabold rounded">
          {discountoffer()}% OFF
        </span>
      </div>
      <Product_quantity
        info={{
          uid: uid.toString(),
          productName,
          quantity: 0,
          currentPrice: currentPrice,
          maxQuantity: availableQuantity ? availableQuantity : 100,
          ...props,
        }}
      />
      <Product_addToCart />
      <Separator className="border-gray-700" />
      <Product_features category={Category} details={details} />
      <Animated_card variant="gradientVibes" width={4}>
        <Promotion_forFastdelivery />
      </Animated_card>
    </div>
  );
};

export default Product_details;
