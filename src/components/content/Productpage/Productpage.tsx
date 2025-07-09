import { ProductDetails } from "@/types/products";
import React from "react";
import Animated_card from "@/components/wrappers/Animated_card";
import Wrapper_productpage from "@/components/context/products/Wrapper_productpage";
import Product_gallery from "@/components/context/products/Product_gallery";
import Product_details from "@/components/context/products/Product_details";

interface Product_mainPage_Props {
  item: ProductDetails;
}
const Productpage = ({ item }: Product_mainPage_Props) => {
  return (
    <Wrapper_productpage>
      <Animated_card variant="gradientVibes" width={0}>
        <div className="flex flex-col lg:flex-row bg-background">
          <Product_gallery />
          <div className="mt-6 lg:mt-0 lg:p-6 w-full lg:w-3/5">
            <Product_details item={item} />
          </div>
        </div>
      </Animated_card>
    </Wrapper_productpage>
  );
};

export default Productpage;
