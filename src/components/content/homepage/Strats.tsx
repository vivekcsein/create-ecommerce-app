"use client";
import React, { useRef } from "react";

const Strats = () => {
  const statsRef = useRef(null);

  return (
    <section ref={statsRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "50K+", label: "Happy Customers" },
            { number: "1000+", label: "Products" },
            { number: "99%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-number text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strats;
