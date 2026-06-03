"use client";

import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const ConsultationModal: React.FC = () => {
  const { isConsultationOpen, setIsConsultationOpen } = useCart();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState("Living Room Setup");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isConsultationOpen) {
      setAnimate(true);
      document.body.style.overflow = "hidden";
    } else {
      setAnimate(false);
      document.body.style.overflow = "";
      setIsSubmitted(false);
    }
  }, [isConsultationOpen]);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setIsConsultationOpen(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setName("");
    setContact("");
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!isConsultationOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-lg bg-surface rounded-xl shadow-[0_20px_60px_rgba(44,37,35,0.15)] border border-primary/10 transition-all duration-300 overflow-hidden transform ${
          animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="font-display text-2xl font-bold text-primary">
              Book a Consultation
            </h3>
            <button
              className="text-on-surface-variant hover:text-primary transition-colors p-1"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-semibold text-primary mb-2">
                Appointment Requested!
              </h4>
              <p className="font-body text-sm text-on-surface-variant max-w-sm">
                Our master craftsmen will reach out to you shortly to confirm your booking.
              </p>
            </div>
          ) : (
            <>
              <p className="font-body text-sm text-on-surface-variant mb-8">
                Discuss your vision with our master craftsmen. We&apos;ll help you select or design the perfect piece for your space.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-label text-sm text-primary mb-2 font-semibold">
                    Name
                  </label>
                  <input
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 font-body text-primary transition-colors"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block font-label text-sm text-primary mb-2 font-semibold">
                    Phone / Email
                  </label>
                  <input
                    className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 font-body text-primary transition-colors"
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Enter your phone or email"
                  />
                </div>

                <div>
                  <label className="block font-label text-sm text-primary mb-2 font-semibold">
                    Interest
                  </label>
                  <select
                    className="w-full bg-surface-container border-b-2 border-outline-variant focus:border-primary focus:outline-none py-2 font-body text-primary transition-colors cursor-pointer"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    <option>Living Room Setup</option>
                    <option>Custom Dining Table</option>
                    <option>Bedroom Furnishing</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <button
                  className="w-full py-4 bg-primary text-white hover:bg-secondary transition-all duration-300 font-label-md text-label-md rounded shadow-[0_4px_25px_rgba(44,37,35,0.08)] mt-8 cursor-pointer font-bold uppercase tracking-wider"
                  type="submit"
                >
                  Request Appointment
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
