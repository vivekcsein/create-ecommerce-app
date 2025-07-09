"use client";
import dynamic from "next/dynamic";

const Animation_floatingParticles = dynamic(
  () => import("@/components/animations/Animation_floatingParticles"),
  { ssr: false }
);
const ProductsFeatures = dynamic(
  () => import("@/components/content/Productpage/ProductsFeatures"),
  { ssr: false }
);
const CTA = dynamic(() => import("@/components/content/homepage/CTA"), {
  ssr: false,
});

const Herov2 = dynamic(() => import("@/components/content/homepage/Herov2"), {
  ssr: false,
});
const Newsletter = dynamic(
  () => import("@/components/content/homepage/Newsletter"),
  { ssr: false }
);
const Searchbar = dynamic(() => import("@/components/layouts/Searchbar"), {
  ssr: false,
});
const StratsWithAnimation = dynamic(
  () => import("@/components/content/homepage/StratsWithAnimation"),
  { ssr: false }
);

export default function Home() {
  return (
    <section>
      <Animation_floatingParticles />
      <div className="w-full center">
        <div className="lg:w-full px-2 lg:px-16">
          <Herov2 />
          <Searchbar />
        </div>
      </div>
      <ProductsFeatures />
      <CTA />
      <StratsWithAnimation />
      <Newsletter />
    </section>
  );
}
