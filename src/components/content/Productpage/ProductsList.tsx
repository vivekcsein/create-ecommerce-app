import { ProductDetails } from "@/types/products";
import React from "react";

interface ProductsListProps {
  productList: Array<ProductDetails>;
}
const ProductsList = ({ productList }: ProductsListProps) => {
  console.log(productList);
  return <div>ProductsList</div>;
};

export default ProductsList;
