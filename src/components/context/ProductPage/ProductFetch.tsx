"use client";
import { getHomePageProducts } from "@/libs/api/api.products";
import { productCategories, ProductDetails } from "@/types/products";
import React from "react";
import Product_catalog from "./Product_catalog";

interface ProductFetchProps {
  category: productCategories;
  icon: string;
}
const ProductFetch: React.FC<ProductFetchProps> = ({ category, icon }) => {
  const [items, setItems] = React.useState<ProductDetails[] | null>(null);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const products: ProductDetails[] = await getHomePageProducts();
      const filteredProducts = products.filter((item) => {
        return item.Category.includes(category);
      });
      console.log(filteredProducts);

      setItems(filteredProducts);
    };
    fetchProducts();
  }, [category]);

  if (!items) {
    return <p>Loading...</p>;
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
