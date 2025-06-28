"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const statsData = [
  { number: 50000, label: "Happy Customers", suffix: "+" },
  { number: 1000, label: "Products", suffix: "+" },
  { number: 99, label: "Satisfaction Rate", suffix: "%" },
  { number: 24, label: "Support", suffix: "/7" },
];

const StratsWithAnimation = () => {
  const statsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    statsRef.current.forEach((el, i) => {
      if (!el) return;
      const end = statsData[i].number;
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: end,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            if (el) {
              el.innerText =
                i === 2 // Satisfaction Rate
                  ? `${Math.round(Number(el.innerText))}${statsData[i].suffix}`
                  : i === 3 // Support
                    ? `${statsData[i].number}${statsData[i].suffix}`
                    : `${Math.round(Number(el.innerText)).toLocaleString()}${statsData[i].suffix}`;
            }
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="stat-number text-4xl font-bold text-accent mb-2"
                ref={(el) => {
                  statsRef.current[index] = el!;
                }}
              >
                0
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StratsWithAnimation;
