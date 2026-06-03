"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { TrendingProducts } from "@/components/sections/TrendingProducts";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { ConsultationModal } from "@/components/modal/ConsultationModal";
import { Product, useCart } from "@/context/CartContext";

interface HomeClientProps {
  initialProducts: Product[];
}

export function HomeClient({ initialProducts }: HomeClientProps) {
  const { setSelectedCategory } = useCart();

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
        <TrendingProducts products={initialProducts} />

        {/* Why Choose Us Features Columns */}
        <WhyChooseUs />

      </main>

      {/* Footer Details */}
      <Footer />

      {/* Overlay Dynamic Drawers and Modals */}
      <CartDrawer />
      <ConsultationModal />
    </>
  );
}
