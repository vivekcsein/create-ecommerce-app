"use client";
import React from "react";
import { Button } from "@/components/ui/shadcn/button";
import { Zap } from "lucide-react";

const Product_buyNow = () => {
  return (
    <Button className="flex-1" variant={"empty"}>
      <Zap className="mr-2 h-5 w-5" /> Buy Now
    </Button>
  );
};

export default Product_buyNow;
