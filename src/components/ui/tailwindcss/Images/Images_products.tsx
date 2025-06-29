"use client";
import { imageDetails } from "@/types/products";
import Image from "next/image";

interface Product_imageProps {
  images: imageDetails[];
}
const Images_products = ({ images }: Product_imageProps) => {
  return (
    <Image
      src={
        images && images.length > 0
          ? images[0].src
            ? images[0].src.startsWith("/")
              ? images[0].src
              : "/" + images[0].src
            : "/placeholder.png"
          : "/placeholder.png"
      }
      alt={images[0].alt}
      width={512}
      height={512}
      className="w-full h-40 object-cover rounded-lg"
      loading="lazy"
      priority={false}
    />
  );
};

export default Images_products;
