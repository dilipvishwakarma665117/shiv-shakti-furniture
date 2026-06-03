"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export const Hero: React.FC = () => {
  const { setIsConsultationOpen } = useCart();

  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] flex items-center bg-surface-container-low overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Artisanal Handcrafted Furniture"
          className="w-full h-full object-cover object-center opacity-90 mix-blend-multiply"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa_t52HzRAX7w9N-XHbiKrph-qhkyiJvPrpkoDZY1R-gWzzvcIMfUaUKy4NXYPjDpMkFj9qMMG_mdBaqrVmGkeOU4bXkCM8oFRSZ9LFH0cv5-jtCX1N4y6EIEOWJuwP6wIk3T_CuotNg412vmOLknNvxqEREfER-OtZpzVZVqxnebb1bfZYdGj-zCWZ2Ox_RuOrXY0WUJ13emIi9NmgZAl_7JwJTVMd2wUweK4MDNVPyoQ4Uxx8OnEF6OmrlCGAwCFLgEyHRhqlw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        <div className="max-w-2xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 animate-fade-in-up">
            Crafting Comfort,
            <br />
            Elevating Homes
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
            Discover premium, handcrafted wooden furniture designed to last generations. Each piece tells a story of artisanal heritage and warm minimalism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded shadow-[0_4px_20px_rgba(44,37,35,0.05)] hover:bg-secondary hover:text-on-secondary transition-all duration-300"
              href="#collections"
            >
              Explore Collections
            </a>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 border border-primary/20 text-primary font-label-md text-label-md rounded hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
