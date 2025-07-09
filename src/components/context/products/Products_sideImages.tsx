import Images_thumbnail from "@/components/ui/images/Images_thumbnail";
import React from "react";
interface imageDetails {
  uid: string;
  src: string;
  alt: string;
}

interface Products_sideImagesProps {
  overviewData: Array<imageDetails>;
  currentOverview: number;
  setCurrentOverview: React.Dispatch<React.SetStateAction<number>>;
  setIsHoveringThumbnails: React.Dispatch<React.SetStateAction<boolean>>;
}

const Products_sideImages = ({
  overviewData,
  currentOverview,
  setCurrentOverview,
  setIsHoveringThumbnails,
}: Products_sideImagesProps) => {
  return (
    <div
      className="flex lg:flex-col flex-row gap-2 p-2  lg:h-[420px] overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      onMouseEnter={() => setIsHoveringThumbnails(true)}
      onMouseLeave={() => setIsHoveringThumbnails(false)}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#d1d5db #f3f4f6",
      }}
    >
      {overviewData.map((image, index) => (
        <div
          key={index}
          className={`
                        relative flex-shrink-0 cursor-pointer transition-all duration-200 rounded-lg overflow-hidden
                      w-1/8 lg:w-full
                        ${
                          currentOverview === index
                            ? "border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.7)]"
                            : "border-gray-700 hover:border-purple-500"
                        }
            `}
          onMouseEnter={() => setCurrentOverview(index)}
        >
          <Images_thumbnail src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default Products_sideImages;
