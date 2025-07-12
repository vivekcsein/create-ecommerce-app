import React from "react";
import { ProductDetails } from "@/types/products";
import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import Images_products from "@/components/ui/images/Images_products";
import { Flame, Heart, ShoppingCart, Star, TrendingUp } from "lucide-react";

interface Trending_cardProps {
  product: ProductDetails;
}

const getCategoryColorClasses = (color: string) => {
  const colorMap = {
    teal: "from-teal-100 to-teal-200 text-teal-700 border-teal-200",
    slate: "from-slate-100 to-slate-200 text-slate-700 border-slate-200",
    amber: "from-amber-100 to-amber-200 text-amber-700 border-amber-200",
    rose: "from-rose-100 to-rose-200 text-rose-700 border-rose-200",
    purple: "from-purple-100 to-purple-200 text-purple-700 border-purple-200",
    green: "from-green-100 to-green-200 text-green-700 border-green-200",
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.teal;
};

const Trending_card = ({ product }: Trending_cardProps) => {
  return (
    <div>
      <div
        key={product.uid}
        className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
      >
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
        <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>

        {/* Product Image */}
        <div className="relative overflow-hidden">
          <Images_products images={product.images} />

          <div
            className={`absolute inset-0 bg-gradient-to-t ${getCategoryColorClasses(product.color ? product.color : "teal")} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
          />
        </div>

        {/* Product Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant="outline"
              className={`text-xs bg-gradient-to-r ${getCategoryColorClasses(product.color ? product.color : "teal")}`}
            >
              {product.Category[1]}
            </Badge>
            {/* <Badge variant="secondary" className="text-xs">
              {product.}
            </Badge> */}
          </div>

          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
            {product.productName}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700 ml-1">
                {product.currentRating}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ({product.totalReview})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-gray-900">
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

          {/* Add to Cart Button */}
          <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Trending_card;

{
  /* <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          /> */
}
