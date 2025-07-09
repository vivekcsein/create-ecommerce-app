import React from "react";
import Image from "next/image";

interface Images_thumbnailProps {
  src: string;
  alt?: string;
}
const Images_thumbnail = ({ src, alt }: Images_thumbnailProps) => {
  return (
    <>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt ? alt : "thumbnail"}
        width={128}
        height={128}
        className="w-full h-auto lg:h-auto object-cover aspect-square cursor-pointer"
        loading="lazy"
      />
    </>
  );
};

export default Images_thumbnail;
