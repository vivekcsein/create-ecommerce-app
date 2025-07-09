"use client";
import { useGSAP } from "@gsap/react";
import { useAnimationContext } from "../providers/Animationprovider";

interface Animate_headingsProps {
  targetRef: React.RefObject<HTMLHeadingElement>;
}
const Animate_headings = ({ targetRef }: Animate_headingsProps) => {
  const { resetAnimation, waveRipple, rotateFlipWords } = useAnimationContext();

  useGSAP(() => {
    if (targetRef.current) {
      waveRipple(targetRef.current.children[1] as HTMLElement);
      rotateFlipWords(targetRef.current.children[2] as HTMLElement);
    }
    return {
      onEnter: () => {
        resetAnimation(targetRef.current as HTMLHeadingElement);
      },
    };
  });

  return null;
};

export default Animate_headings;
