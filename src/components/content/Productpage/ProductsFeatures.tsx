import React from "react";
import ProductFetch from "../../context/products/ProductFetch";

const ProductsFeatures = () => {
  return (
    <section className="px-4">
      <ProductFetch category={"apparel"} icon="Shirt" />
      {/* <ProductFetch category={"electronics"} icon="Smartphone" /> */}
    </section>
  );
};

export default ProductsFeatures;
