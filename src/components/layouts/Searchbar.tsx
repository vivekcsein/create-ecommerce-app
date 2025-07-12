"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Searchbar_main from "@/components/context/Searchbar/Searchbar_main";
import { useAnimationContext } from "../providers/Animationprovider";

const Searchbar = () => {
  const { resetAnimation, waveRipple } = useAnimationContext();
  const targetRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    if (targetRef.current) {
      waveRipple(targetRef.current as HTMLElement);
    }
    return {
      onEnter: () => {
        resetAnimation(targetRef.current as HTMLHeadingElement);
      },
    };
  });

  return (
    <>
      <div className="w-full flex items-center justify-center text-center ">
        <h1 className="mt-5 lg:mt-0 w-full lg:w-3/5 heading" ref={targetRef}>
          Six Teal
        </h1>
      </div>
      <Searchbar_main />
    </>
  );
};

export default Searchbar;
