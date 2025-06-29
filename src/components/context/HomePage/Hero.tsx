"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Zap } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/libs/redux/store";
import Images_products from "@/components/ui/tailwindcss/Images/Images_products";

const Hero = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [animationPhase] = useState(0);

  const homepageProductsData = useSelector(
    (state: RootState) => state.products.homepageProductsData
  );

  const items = homepageProductsData?.filter((item) => {
    return item.isTrending === true;
  });

  const getGridItemStyle = (index: number) => {
    const styles = [
      { gridArea: "1 / 1 / 3 / 3" }, // Large square
      { gridArea: "1 / 3 / 2 / 5" }, // Wide rectangle
      { gridArea: "1 / 5 / 3 / 6" }, // Tall rectangle
      { gridArea: "2 / 3 / 3 / 4" }, // Small square
      { gridArea: "2 / 4 / 3 / 5" }, // Small square
      { gridArea: "3 / 1 / 4 / 3" }, // Wide rectangle
      { gridArea: "3 / 3 / 5 / 4" }, // Tall rectangle
      { gridArea: "3 / 4 / 4 / 6" }, // Wide rectangle
      { gridArea: "4 / 1 / 5 / 2" }, // Small square
      { gridArea: "4 / 2 / 5 / 3" }, // Small square
      { gridArea: "4 / 4 / 6 / 5" }, // Tall rectangle
      { gridArea: "4 / 5 / 5 / 6" }, // Small square
    ];
    return styles[index % styles.length];
  };

  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <motion.div
      className="grid grid-cols-5 grid-rows-5 gap-4 h-[600px] mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      {items?.map((item, index) => (
        <motion.div
          key={item.uid}
          style={getGridItemStyle(index)}
          className="relative overflow-hidden rounded-2xl cursor-pointer group"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          onHoverStart={() => setHoveredItem(item.uid)}
          onHoverEnd={() => setHoveredItem(null)}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${item.color ? `bg-${item.color}-500` : "bg-pink-500"} opacity-80`}
            animate={{
              opacity: hoveredItem === item.uid ? 0.9 : 0.6,
              scale: animationPhase === index % 3 ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="absolute inset-0 bg-black/20"
            animate={{
              opacity: hoveredItem === item.uid ? 0.3 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />
          <Images_products images={item.images} />

          <motion.div
            className="absolute inset-0 flex flex-col justify-end p-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <motion.h4
              className={`${item.color ? `text-${item.color}-400` : "text-pink-500"} font-bold text-lg mb-1`}
              animate={{
                textShadow:
                  hoveredItem === item.uid
                    ? "0 0 10px rgba(255,255,255,0.8)"
                    : "0 0 5px rgba(0,0,0,0.5)",
              }}
            >
              {item.productName}
            </motion.h4>
            <motion.p
              className="text-gray-200 text-sm opacity-80"
              animate={{
                opacity: hoveredItem === item.uid ? 1 : 0.8,
              }}
            >
              {item.Category[0]}
            </motion.p>
          </motion.div>

          {/* Hover effects */}
          <AnimatePresence>
            {hoveredItem === item.uid && (
              <>
                <motion.div
                  className={`absolute inset-0 border-2 ${item.color ? `border-${item.color}-500` : "border-primary"}  rounded-2xl`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Glitch effect */}
          <motion.div
            className="absolute top-2 right-2"
            animate={{
              opacity: [0, 1, 0],
              x: [0, 2, -2, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
              delay: index * 0.2,
            }}
          >
            <Zap className="h-4 w-4 text-accent" />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Hero;
