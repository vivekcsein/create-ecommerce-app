"use client";
import dynamic from "next/dynamic";
const Animation_background = dynamic(
  () => import("@/components/animations/Animation_background"),
  { ssr: false }
);
const Animation_floatingParticles = dynamic(
  () => import("@/components/animations/Animation_floatingParticles"),
  { ssr: false }
);
const Product_feature = dynamic(
  () => import("@/components/context/ProductPage/Product_feature"),
  { ssr: false }
);
const CTA = dynamic(() => import("@/components/context/HomePage/CTA"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/context/HomePage/Hero"), {
  ssr: false,
});
const Newsletter = dynamic(
  () => import("@/components/context/HomePage/Newsletter"),
  { ssr: false }
);
const Searchbar = dynamic(() => import("@/components/layouts/Searchbar"), {
  ssr: false,
});
const StratsWithAnimation = dynamic(
  () => import("@/components/context/HomePage/StratsWithAnimation"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Animation_background />
      <Animation_floatingParticles />
      <Searchbar />
      <div className="w-full flex justify-between items-center">
        <div className="w-full px-16  ">
          <Hero />
        </div>
      </div>
      <CTA />
      <Product_feature />
      <StratsWithAnimation />
      <Newsletter />
    </main>
  );
}
