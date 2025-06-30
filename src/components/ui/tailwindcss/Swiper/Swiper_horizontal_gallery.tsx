"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import { productCategories, ProductDetails } from "@/types/products";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Product_card from "@/components/context/ProductPage/Product_card";
import DynamicSVG from "../../helper/DynamicSVG";

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
          <DynamicSVG
            iconName={icon}
            className="w-8 h-8 text-foreground mr-3"
          />
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
                  <Product_card Item={item} />
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

{
  /* <Card className="gallery-card group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-slate-800">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {item.isNew && (
                      <Badge className="absolute top-3 left-3 bg-emerald-500 hover:bg-emerald-600 text-white">
                        New
                      </Badge>
                    )}

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="p-2 bg-white/90 dark:bg-slate-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-colors">
                        <Heart className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                      </button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                        {item.price}
                      </span>
                      <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card> */
}
