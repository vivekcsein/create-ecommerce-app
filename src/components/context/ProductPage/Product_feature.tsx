import React from "react";
import ProductFetch from "./ProductFetch";

const Product_feature = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Shop by Category
        </h2>
        <ProductFetch category={"apparel"} icon="Shirt" />
        <ProductFetch category={"electronics"} icon="Smartphone" />
      </div>
    </section>
  );
};
export default Product_feature;
