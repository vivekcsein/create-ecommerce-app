"use client";
import React, { useState } from "react";
import Product_mainImage from "./Product_mainImage";
import Products_sideImages from "./Products_sideImages";
import { dummyProductImagesList } from "@/libs/configs/config.images";

const Product_gallery = () => {
  const [currentImage, setCurrentImage] = useState(
    parseInt(dummyProductImagesList[0].uid)
  );
  const [isHoveringThumbnails, setIsHoveringThumbnails] = useState(false);
  if (isHoveringThumbnails) {
  }
  return (
    <section className="lg:w-2/5 *:w-full">
      <Product_mainImage imageDetails={dummyProductImagesList[currentImage]}>
        <div className="lg:w-20">
          <Products_sideImages
            currentOverview={currentImage}
            overviewData={dummyProductImagesList}
            setCurrentOverview={setCurrentImage}
            setIsHoveringThumbnails={setIsHoveringThumbnails}
          />
        </div>
      </Product_mainImage>
    </section>
  );
};
export default Product_gallery;
