import React from "react";
import Image from "next/image";
import { imageURLFromGit } from "@/libs/configs/config.helper";

interface Images_thumbnailProps {
  src: string;
  alt?: string;
}
const Images_thumbnail = ({ src, alt }: Images_thumbnailProps) => {
  const imageURL = imageURLFromGit(src);

  return (
    <>
      <Image
        src={imageURL || "/placeholder.svg"}
        alt={alt ? alt : "thumbnail"}
        width={128}
        height={128}
        className="w-[120px] rounded-full h-auto lg:h-auto object-cover aspect-square cursor-pointer"
        loading="lazy"
      />
    </>
  );
};

export default Images_thumbnail;
