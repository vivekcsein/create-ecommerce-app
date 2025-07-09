import React from "react";
import Image from "next/image";
import { imageDetails } from "@/types/products";
import { imageURLFromGit } from "@/libs/configs/config.helper";

const Images_hero = ({ image }: { image: imageDetails[] }) => {
  const imageURL = imageURLFromGit(image);

  return (
    <>
      <Image
        src={imageURL}
        alt={image[0].alt}
        width={120}
        height={120}
        loading="lazy"
        className="w-full h-24 object-cover rounded-lg mb-3"
      />
    </>
  );
};

export default Images_hero;
