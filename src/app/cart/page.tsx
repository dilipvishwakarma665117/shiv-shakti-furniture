"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Breadcrumbs / Back */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-label text-on-surface-variant hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to Collections
            </Link>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12">
            Your Selection
          </h1>

          {cart.length === 0 ? (
            <div className="py-24 bg-surface rounded-xl border border-primary/5 shadow-sm text-center max-w-2xl mx-auto flex flex-col items-center">
              <ShoppingBag className="w-16 h-16 text-outline-variant mb-6 stroke-1" />
              <h2 className="font-display text-xl font-bold text-primary mb-2">
                Your cart is empty
              </h2>
              <p className="font-body text-sm text-on-surface-variant max-w-xs mb-8">
                Browse our collections and discover premium pieces for your home.
              </p>
              <Link
                href="/"
                className="px-8 py-4 bg-primary text-on-primary hover:bg-primary-container font-label text-sm font-semibold rounded transition-all duration-300 shadow-md"
              >
                Explore Catalog
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Cart Items List */}
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedFinish}`}
                    className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl bg-surface border border-primary/5 shadow-sm hover:border-primary/10 transition-all"
                  >
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.product.image_url}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-label text-secondary font-semibold">
                            {item.product.category}
                          </span>
                          <h3 className="font-display text-lg font-bold text-primary mt-1">
                            {item.product.name}
                          </h3>
                          <p className="font-label text-xs text-on-surface-variant mt-1">
                            Finish: <span className="font-semibold text-primary">{item.selectedFinish}</span>
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-outline hover:text-error transition-colors p-2 rounded-full hover:bg-error/5"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-6">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-primary/10 rounded-lg overflow-hidden bg-surface-container-lowest">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 px-3 hover:bg-surface-container text-on-surface-variant transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 font-label text-sm text-primary font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 px-3 hover:bg-surface-container text-on-surface-variant transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="font-label text-lg font-bold text-primary">
                            ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                          </span>
                          {item.quantity > 1 && (
                            <p className="font-body text-xs text-on-surface-variant mt-0.5">
                              (₹{item.product.price.toLocaleString("en-IN")} each)
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="p-8 rounded-xl bg-surface border border-primary/10 shadow-md">
                <h2 className="font-display text-xl font-bold text-primary mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between font-body text-sm text-on-surface-variant">
                    <span>Items Subtotal</span>
                    <span className="font-semibold text-primary">
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between font-body text-sm text-on-surface-variant">
                    <span>Sourcing & Finishing</span>
                    <span className="text-secondary font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between font-body text-sm text-on-surface-variant">
                    <span>Delivery & Installation</span>
                    <span className="text-secondary font-semibold">Complimentary</span>
                  </div>
                  <div className="border-t border-primary/10 pt-4 flex justify-between">
                    <span className="font-display text-base font-semibold text-primary">Total Est.</span>
                    <span className="font-display text-xl font-bold text-primary">
                      ₹{cartTotal.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                <div className="bg-surface-container-low p-4 rounded-lg text-xs text-on-surface-variant leading-relaxed mb-8">
                  Premium white-glove setup and 5-year structural warranty details will be configured on the checkout page.
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-4 bg-primary text-on-primary hover:bg-primary-container font-label text-sm font-bold rounded shadow-md flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
