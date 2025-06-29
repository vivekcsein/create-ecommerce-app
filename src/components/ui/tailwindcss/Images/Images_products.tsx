import { imageURLFromGit } from "@/libs/configs/config.helper";
import { imageDetails } from "@/types/products";
import Image from "next/image";

interface Product_imageProps {
  images: imageDetails[];
}
const Images_products = ({ images }: Product_imageProps) => {
  const imageURL = imageURLFromGit(images);
  return (
    <Image
      src={imageURL}
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
