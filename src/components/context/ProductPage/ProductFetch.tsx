"use client";
import React from "react";
import { productCategories } from "@/types/products";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";
import Product_catalog from "./Product_catalog";

interface ProductFetchProps {
  category: productCategories;
  icon: string;
}
const ProductFetch: React.FC<ProductFetchProps> = ({ category, icon }) => {
  const homepageProductsData = useSelector(
    (state: RootState) => state.products.homepageProductsData
  );

  const items = homepageProductsData?.filter((item) => {
    return item.Category.includes(category);
  });

  if (!items) {
    return <p>Loading products...</p>;
  }

  return (
    <Product_catalog
      categoryName={category}
      categoryItems={items}
      icon={icon}
    />
  );
};

export default ProductFetch;
