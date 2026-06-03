"use client";

import React from "react";
import { Leaf, Truck, ShieldCheck } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-primary/10">
          {/* Wood */}
          <div className="pt-8 md:pt-0 md:pr-12 first:pt-0">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mx-auto md:mx-0 mb-6 text-primary">
              <Leaf className="w-8 h-8 stroke-1.5" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-3">100% Premium Wood</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Sustainably sourced, kiln-dried timber ensuring structural integrity, moisture-proofing, and a beautiful natural wood grain finish.
            </p>
          </div>

          {/* Delivery */}
          <div className="pt-8 md:pt-0 md:px-12">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mx-auto md:mx-0 mb-6 text-primary">
              <Truck className="w-8 h-8 stroke-1.5" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-3">Free Installation</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              White-glove delivery service directly to your room of choice. Our expert assembly team handles all installation and clean-up.
            </p>
          </div>

          {/* Warranty */}
          <div className="pt-8 md:pt-0 md:pl-12">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mx-auto md:mx-0 mb-6 text-primary">
              <ShieldCheck className="w-8 h-8 stroke-1.5" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-3">5-Year Warranty</h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Our craftsmanship is built to last for generations. Rest easy with our comprehensive, long-term structural guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
