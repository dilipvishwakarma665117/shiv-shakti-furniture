"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface FeaturedCollectionsProps {
  onSelectCategory: (category: string) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    const trendingSection = document.getElementById("trending");
    if (trendingSection) {
      trendingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="collections" className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Curated Spaces</h2>
          <div className="w-16 h-px bg-primary/20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
          {/* Living Room */}
          <div
            id="col-living"
            onClick={() => handleCategoryClick("Living Room")}
            className="group relative overflow-hidden rounded border border-primary/10 md:col-span-2 cursor-pointer bg-surface-container-low"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Living Room Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa_t52HzRAX7w9N-XHbiKrph-qhkyiJvPrpkoDZY1R-gWzzvcIMfUaUKy4NXYPjDpMkFj9qMMG_mdBaqrVmGkeOU4bXkCM8oFRSZ9LFH0cv5-jtCX1N4y6EIEOWJuwP6wIk3T_CuotNg412vmOLknNvxqEREfER-OtZpzVZVqxnebb1bfZYdGj-zCWZ2Ox_RuOrXY0WUJ13emIi9NmgZAl_7JwJTVMd2wUweK4MDNVPyoQ4Uxx8OnEF6OmrlCGAwCFLgEyHRhqlw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="inline-block px-3 py-1 bg-surface-container-lowest text-primary font-label-sm text-label-sm mb-3 rounded-sm">
                Featured
              </span>
              <h3 className="font-headline-md text-headline-md text-white mb-2">Living Room</h3>
              <p className="font-body-md text-body-md text-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 max-w-md">
                Timeless pieces for your central gathering space. Handcrafted walnut coffee tables, brass-legged armchairs, and luxury sofas.
              </p>
            </div>
          </div>

          {/* Bedroom */}
          <div
            id="col-bedroom"
            onClick={() => handleCategoryClick("Bedroom")}
            className="group relative overflow-hidden rounded border border-primary/10 cursor-pointer bg-surface-container-low"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Bedroom Collection"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB40Xnw1pr9Zf9NqzsRodVyYEfSicYLISjJ-gz5kp1tNjnS3GoWLREEg1mhRATIMxBVJhsDlYMOX9kTvqMZ6rK34xA9uJIPsWNuGWmAHBAwAoTY975I9AF2v__URTopwZLjhlXeDiHXCJz0nmGgfWTWLXdx6rH6Jt4mcDp-SchKBUGqGKtqXS3HEDmn1kSdl-vBpuT7we6BjQ3bieDKtJ8AoDlIpcQrPLxUmrYKMlGLMuqPKWA2mfIQ1U4UvlKtVLEn_9Lyfq2ZbA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-headline-md text-headline-md text-white mb-2">Bedroom</h3>
              <p className="font-body-md text-body-md text-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                Serene wood frames, luxury headboards, and master wardrobes.
              </p>
            </div>
          </div>

          {/* Dining Room */}
          <div
            id="col-dining"
            onClick={() => handleCategoryClick("Dining")}
            className="group relative overflow-hidden rounded border border-primary/10 md:col-span-3 h-[300px] cursor-pointer bg-surface-container-low"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Dining Collection"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUuTZpL2dg3UxvNxhULRmEGykrFVHeB7hrmwMxAceg_x7XtiLTAvcqEE2SxnoJ1mIP5tjHw8xfxPevWDwsgBu_gnWw733up8n1Cqp_k3zvEBEFcTYD-mDyM7Cm9pOWqEJi1GCgB5cZnm9w_VVvxz55FGvwToFf_bw8xf6mcYq26tRo_dZQ0kY0wWJyHIQcKNtE6JIw9ZnZZV8xqFIqwhv1uvtvQQFnP_hueIegmxfMNCXryUtSBb1rkCqpFlw-Sc3GkEUgb5N-aw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <h3 className="font-headline-lg text-headline-lg text-white mb-4">Dining Collection</h3>
              <span className="inline-flex items-center text-white font-label-md text-label-md group-hover:underline underline-offset-4 decoration-secondary-container">
                View Selection <ArrowRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
