"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { TrendingProducts } from "@/components/sections/TrendingProducts";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ConsultationModal } from "@/components/modal/ConsultationModal";
import { Product } from "@/context/CartContext";

interface HomeClientProps {
  initialProducts: Product[];
}

export function HomeClient({ initialProducts }: HomeClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Banner */}
        <Hero />

        {/* Featured Bento Categories Grid */}
        <FeaturedCollections onSelectCategory={setSelectedCategory} />

        {/* Dynamic Interactive Product Grid */}
        <TrendingProducts
          products={initialProducts}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Why Choose Us Features Columns */}
        <WhyChooseUs />

        {/* Customer Testimonial Quotation */}
        <Testimonials />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Overlay Dynamic Drawers and Modals */}
      <CartDrawer />
      <ConsultationModal />
    </>
  );
}
