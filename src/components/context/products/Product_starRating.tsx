import React from "react";
import Helper_svg from "@/components/ui/helper/Helper_svg";

interface Product_starRatingProps {
  currentRating: number;
}
const Product_starRating = ({ currentRating }: Product_starRatingProps) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <div className="flex">
      {stars.map((star) => (
        <span key={star}>
          <Helper_svg
            variant={"Rating"}
            size={24}
            color="gold"
            bgcolor="transparent"
            show={
              star <= currentRating
                ? 100
                : star > currentRating && star < currentRating + 1
                  ? (1 - (star - currentRating)) * 100
                  : 0
            }
          />
        </span>
      ))}
    </div>
  );
};

export default Product_starRating;
