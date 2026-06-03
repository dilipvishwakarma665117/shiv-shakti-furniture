"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [shippingName, setShippingName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("catalog-invoice");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
    setTimeout(() => {
      clearCart();
    }, 100);
  };

  if (isCompleted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background pt-32 pb-24 flex items-center justify-center">
          <div className="max-w-md w-full mx-auto px-margin-mobile text-center bg-surface border border-primary/10 rounded-2xl p-10 shadow-2xl animate-fade-in-up">
            <div className="w-20 h-20 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
              Order Confirmed!
            </h1>
            <p className="font-body text-sm text-on-surface-variant mb-4">
              Your order has been logged into our artisan schedule. A confirmation invoice along with delivery timelines will be shared on your registered email/phone shortly.
            </p>
            <div className="bg-surface-container-low p-4 rounded-lg text-xs text-left text-on-surface-variant font-body mb-8 border border-primary/5 space-y-2">
              <div className="flex justify-between">
                <span className="font-bold text-primary">Shipping to:</span>
                <span>{shippingName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-primary">Contact:</span>
                <span>{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-primary">Method:</span>
                <span>{paymentMethod === "catalog-invoice" ? "Catalog Invoice" : "Credit Card / UPI"}</span>
              </div>
            </div>
            <Link
              href="/"
              className="inline-block w-full py-4 bg-primary text-on-primary hover:bg-primary-container font-label text-sm font-semibold rounded shadow-md transition-all duration-300"
            >
              Return to Gallery
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Back */}
          <div className="mb-8">
            <Link
              href="/cart"
              className="inline-flex items-center text-sm font-label text-on-surface-variant hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Return to Cart
            </Link>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-12">
            Secure Checkout
          </h1>

          {cart.length === 0 ? (
            <div className="py-24 bg-surface rounded-xl border border-primary/5 shadow-sm text-center max-w-2xl mx-auto flex flex-col items-center">
              <CheckCircle2 className="w-16 h-16 text-outline-variant mb-6 stroke-1" />
              <h2 className="font-display text-xl font-bold text-primary mb-2">
                No active orders
              </h2>
              <p className="font-body text-sm text-on-surface-variant mb-8">
                Add products to your selection before initiating checkout.
              </p>
              <Link
                href="/"
                className="px-8 py-4 bg-primary text-on-primary hover:bg-primary-container font-label text-sm font-semibold rounded transition-all duration-300 shadow-md"
              >
                Go to Shop
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Form details (Left) */}
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping Details */}
                <div className="p-8 rounded-xl bg-surface border border-primary/5 shadow-sm">
                  <h2 className="font-display text-xl font-bold text-primary mb-6 border-b border-primary/5 pb-4">
                    1. Shipping & Installation Address
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label text-xs font-semibold text-primary mb-2 uppercase">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-primary/10 focus:border-primary focus:outline-none py-2 font-body text-primary transition-colors"
                        type="text"
                        required
                        value={shippingName}
                        onChange={(e) => setShippingName(e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block font-label text-xs font-semibold text-primary mb-2 uppercase">
                        Contact Phone
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-primary/10 focus:border-primary focus:outline-none py-2 font-body text-primary transition-colors"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block font-label text-xs font-semibold text-primary mb-2 uppercase">
                        Delivery Address
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-primary/10 focus:border-primary focus:outline-none py-2 font-body text-primary transition-colors"
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Apartment, Street address, Landmark"
                      />
                    </div>

                    <div>
                      <label className="block font-label text-xs font-semibold text-primary mb-2 uppercase">
                        City / District
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-primary/10 focus:border-primary focus:outline-none py-2 font-body text-primary transition-colors"
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Mumbai"
                      />
                    </div>

                    <div>
                      <label className="block font-label text-xs font-semibold text-primary mb-2 uppercase">
                        ZIP / PIN Code
                      </label>
                      <input
                        className="w-full bg-transparent border-b border-primary/10 focus:border-primary focus:outline-none py-2 font-body text-primary transition-colors"
                        type="text"
                        required
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                        placeholder="400001"
                      />
                    </div>
                  </div>
                </div>

                {/* Sourcing & Payment Methods */}
                <div className="p-8 rounded-xl bg-surface border border-primary/5 shadow-sm">
                  <h2 className="font-display text-xl font-bold text-primary mb-6 border-b border-primary/5 pb-4">
                    2. Sourcing Options & Payment
                  </h2>

                  <div className="space-y-4">
                    {/* Catalog Invoice (default recommended) */}
                    <div
                      onClick={() => setPaymentMethod("catalog-invoice")}
                      className={`p-4 rounded-lg border transition-all cursor-pointer flex items-start gap-4 ${
                        paymentMethod === "catalog-invoice"
                          ? "border-secondary bg-secondary/5"
                          : "border-primary/10 hover:border-primary/20"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={paymentMethod === "catalog-invoice"}
                        onChange={() => setPaymentMethod("catalog-invoice")}
                        className="mt-1 accent-primary"
                      />
                      <div>
                        <span className="font-display text-base font-semibold text-primary flex items-center gap-1.5">
                          Artisan Catalog Invoice
                          <span className="text-[10px] uppercase font-label bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-bold">
                            Recommended
                          </span>
                        </span>
                        <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                          No instant checkout charges. Receive a curated material layout breakdown, wooden grain catalog proofing, and schedule confirmation. Pay via bank transfer or cash upon setup.
                        </p>
                      </div>
                    </div>

                    {/* Online payment */}
                    <div
                      onClick={() => setPaymentMethod("online")}
                      className={`p-4 rounded-lg border transition-all cursor-pointer flex items-start gap-4 ${
                        paymentMethod === "online"
                          ? "border-secondary bg-secondary/5"
                          : "border-primary/10 hover:border-primary/20"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={paymentMethod === "online"}
                        onChange={() => setPaymentMethod("online")}
                        className="mt-1 accent-primary"
                      />
                      <div className="flex-grow">
                        <span className="font-display text-base font-semibold text-primary flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-on-surface-variant" /> Online Credit / Debit Cards / UPI
                        </span>
                        <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                          Secure instant digital settlement using credit/debit cards or scanning UPI QR. Protected by international payment encryptions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary sidebar (Right) */}
              <div className="space-y-6">
                <div className="p-8 rounded-xl bg-surface border border-primary/10 shadow-md">
                  <h2 className="font-display text-xl font-bold text-primary mb-6">
                    Review Order
                  </h2>

                  {/* Minimized items list */}
                  <div className="space-y-4 mb-6 border-b border-primary/5 pb-6">
                    {cart.map((item) => (
                      <div key={`${item.product.id}-${item.selectedFinish}`} className="flex justify-between items-center gap-4 text-xs font-body">
                        <div className="flex-grow">
                          <span className="font-semibold text-primary line-clamp-1">{item.product.name}</span>
                          <span className="text-on-surface-variant mt-0.5 block">Qty: {item.quantity} | {item.selectedFinish}</span>
                        </div>
                        <span className="font-semibold text-primary text-right shrink-0">
                          ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Summary lists */}
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between font-body text-sm text-on-surface-variant">
                      <span>Selection Subtotal</span>
                      <span className="font-semibold text-primary">
                        ₹{cartTotal.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="flex justify-between font-body text-sm text-on-surface-variant">
                      <span>Delivery & Assembly</span>
                      <span className="text-secondary font-semibold">Complimentary</span>
                    </div>
                    <div className="border-t border-primary/10 pt-4 flex justify-between">
                      <span className="font-display text-base font-semibold text-primary">Order Total</span>
                      <span className="font-display text-xl font-bold text-primary">
                        ₹{cartTotal.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary font-label text-sm font-bold rounded shadow-md flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                  >
                    Confirm & Book Order
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Trust Seal */}
                <div className="p-4 rounded-lg bg-surface border border-primary/5 flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-secondary shrink-0" />
                  <div>
                    <span className="font-label text-xs font-bold text-primary uppercase">Guaranteed Security</span>
                    <p className="font-body text-[10px] text-on-surface-variant leading-relaxed mt-0.5">
                      Your inputs are guarded. All listings are subject to verification via wood selection checks.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
