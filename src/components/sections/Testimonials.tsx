"use client";

import React from "react";
import { Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-margin-mobile text-center">
        <div className="flex justify-center mb-6">
          <Quote className="w-12 h-12 text-secondary-container fill-secondary-container stroke-none" />
        </div>
        <blockquote className="font-display text-2xl md:text-3xl text-primary leading-relaxed mb-8 font-semibold italic">
          &quot;The mahogany dining table completely transformed our space. The quality is palpable, and the minimalist design brings a quiet elegance to every meal. Truly an heirloom piece.&quot;
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-surface-tint text-on-primary font-display font-bold rounded-full flex items-center justify-center">
            A
          </div>
          <div className="text-left">
            <div className="font-label text-sm font-bold text-primary">Ananya R.</div>
            <div className="font-body text-xs text-on-surface-variant">Verified Buyer</div>
          </div>
        </div>
      </div>
    </section>
  );
};
