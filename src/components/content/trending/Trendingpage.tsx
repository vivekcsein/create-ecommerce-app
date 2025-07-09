"use client";
import { useState } from "react";
import Trending_card from "./Trending_card";
import { TrendingUp, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";
import { FeaturedCategory } from "@/types/products";

type AllCategories = "All" | FeaturedCategory;
const categories: Array<AllCategories> = [
  "All",
  "apparel",
  "electronics",
  "books",
  "fragrance",
  "accessories",
  "wellness",
];
const sortOptions = [
  "Trending",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
  "Rating",
];

export default function Trendingpage() {
  const [selectedCategory, setSelectedCategory] =
    useState<AllCategories>("All");
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const trendingProducts = useSelector(
    (state: RootState) => state.products.homepageProductsData
  );

  const filteredProducts =
    selectedCategory === "All"
      ? trendingProducts
      : trendingProducts?.filter((product) =>
          product.Category.includes(selectedCategory)
        );

  return (
    <div className="min-h-screen">
      <div className="container relative mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Trending Now
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Featured <span className="text-teal-600">Trending</span> Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what&apos;s hot right now. Curated selections that are
            making waves across all six dimensions of style.
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full cursor-pointer ${
                    selectedCategory === category
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "border-teal-200 text-teal-700 hover:bg-teal-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-teal-200 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts?.map((product) => (
            <Trending_card product={product} key={product.uid} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-full bg-transparent"
          >
            <Clock className="w-4 h-4 mr-2" />
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
}
