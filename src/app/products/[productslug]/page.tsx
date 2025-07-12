import React from "react";

type ProductsByCategoryProps = {
  params: Promise<{ productslug: string }>;
};

const ProductsByCategory = async ({ params }: ProductsByCategoryProps) => {
  const { productslug } = await params;
  return <div>My Post: {productslug}</div>;
};
export default ProductsByCategory;
