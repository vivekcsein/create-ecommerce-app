import React from "react";
import { Button } from "../../ui/shadcn/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold  mb-6">
          Ready to Elevate Your Style?
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers and discover your perfect look
          today
        </p>
        <Button
          size="lg"
          className="bg-white text-primary  hover:bg-gray-100 text-lg px-8 py-6"
        >
          Start Shopping Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;
