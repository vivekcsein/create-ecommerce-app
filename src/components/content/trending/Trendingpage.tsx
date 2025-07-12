"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";
import { TrendingUp, Filter } from "lucide-react";
import { FeaturedCategory } from "@/types/products";
import { Button } from "@/components/ui/shadcn/button";
import Product_Card from "@/components/layouts/Product_Card";
import Animated_scatteredText from "@/components/animations/Animated_scatteredText";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

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

  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredProducts =
    selectedCategory === "All"
      ? trendingProducts
      : trendingProducts?.filter((product) =>
          product.Category.includes(selectedCategory)
        );

  const sortedProducts = filteredProducts?.slice().sort((a, b) => {
    switch (sortBy) {
      case "Price: Low to High":
        return a.currentPrice - b.currentPrice;
      case "Price: High to Low":
        return b.currentPrice - a.currentPrice;
      // case "Newest":
      // return (
      //   new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      // );
      case "Rating":
        return b.currentRating - a.currentRating;
      case "Trending":
      // fallback to trending
      default:
        return b.currentRating - a.currentRating;
    }
  });

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll(".gallery-card");
    console.log(cards);

    if (cards) {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          // scrollTrigger: {
          //   trigger: containerRef.current,
          //   start: "top 80%",
          //   end: "bottom 0%",
          //   toggleActions: "play none none reverse",
          // },
        }
      );
    }
  });

  return (
    <div className="min-h-screen">
      <div className="container relative mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-muted text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Trending Now
          </div>
          <Animated_scatteredText text="Featured Trending Products" />
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
                      ? "border-primary text-white "
                      : "border-secondary text-foreground hover:text-background hover:bg-foreground dark:hover:bg-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <Select onValueChange={(value) => setSortBy(value)}>
              <SelectTrigger className="w-auto min-w-[180px] border-e-2 border-foreground">
                <SelectValue placeholder="Sort By Trending" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {sortOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          ref={containerRef}
        >
          {sortedProducts?.map((product) => (
            <div key={product.uid} className="gallery-card">
              <Product_Card product={product} />
            </div>
          ))}
        </div>

        {/* Load More */}
        {/* <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-teal-200 text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-full bg-transparent"
          >
            <Clock className="w-4 h-4 mr-2" />
            Load More Products
          </Button>
        </div> */}
      </div>
    </div>
  );
}
