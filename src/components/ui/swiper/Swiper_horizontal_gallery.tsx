"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lucid_svg from "@/components/ui/helper/Lucid_svg";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import { productCategories, ProductDetails } from "@/types/products";
// import Product_card from "@/components/context/products/Product_card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Product_Card from "@/components/layouts/Product_Card";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Swiper_horizontal_galleryProps {
  categoryItems: Array<ProductDetails>;
  categoryName: productCategories;
  icon?: string;
}

export default function Swiper_horizontal_gallery({
  categoryItems,
  categoryName,
  icon,
}: Swiper_horizontal_galleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const swiperRef = useRef<import("swiper/react").SwiperRef | null>(null);

  useEffect(() => {
    if (!containerRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 100%",
            end: "bottom 0%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate gallery container
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%",
            end: "bottom 0%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate individual cards with stagger
      const cards = containerRef.current?.querySelectorAll(".gallery-card");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 100%",
              end: "bottom 0%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSlideChange = (swiper: import("swiper").Swiper) => {
    // Animate active slide
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      gsap.fromTo(
        activeSlide.querySelector(".gallery-card"),
        { scale: 0.95 },
        { scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8" ref={titleRef}>
          <Lucid_svg iconName={icon} className="w-8 h-8 text-foreground mr-3" />
          <h3 className="text-3xl font-bold text-foreground">{categoryName}</h3>
        </div>

        <div ref={containerRef} className="relative mb-5">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Mousewheel]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            mousewheel={{
              forceToAxis: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            onSlideChange={handleSlideChange}
            className="gallery-swiper"
          >
            {categoryItems.map((item) => (
              <SwiperSlide key={item.uid}>
                <div className="gallery-card">
                  <Product_Card product={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group">
            <svg
              className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 group">
            <svg
              className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .gallery-swiper .swiper-pagination {
          bottom: -50px !important;
        }

        .gallery-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .gallery-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
          opacity: 1;
          transform: scale(1.2);
        }

        .gallery-swiper .swiper-slide {
          height: auto;
        }

        @media (max-width: 768px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
