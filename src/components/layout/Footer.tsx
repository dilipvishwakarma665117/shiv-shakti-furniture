"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-surface-container w-full py-16 border-t border-primary/5 transition-all duration-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-on-surface">
        {/* Brand & Newsletter */}
        <div className="md:col-span-2 mb-10 md:mb-0 pr-0 md:pr-12">
          <div className="font-display text-2xl font-bold text-primary mb-6">
            Shiv Shakti Furniture House
          </div>
          <p className="font-body text-sm text-on-surface-variant mb-6 max-w-md leading-relaxed">
            Subscribe to our newsletter for exclusive previews of new collections and interior design inspiration.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md relative group">
            {subscribed ? (
              <div className="flex items-center gap-2 text-secondary font-label text-sm py-3 animate-fade-in-up">
                <Check className="w-4 h-4" /> Thank you for subscribing!
              </div>
            ) : (
              <>
                <input
                  className="w-full bg-surface-container-lowest border-b-2 border-outline-variant focus:border-primary focus:outline-none px-4 py-3 font-body text-primary transition-colors placeholder:text-on-surface-variant/50"
                  placeholder="Email Address"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="absolute right-0 bottom-0 top-0 px-4 text-primary hover:text-secondary transition-colors cursor-pointer"
                  type="submit"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Links */}
        <div className="mb-10 md:mb-0">
          <h4 className="font-label text-xs font-bold text-primary mb-6 uppercase tracking-widest">
            Information
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="font-label text-xs text-on-surface-variant hover:text-primary transition-colors underline decoration-transparent hover:decoration-secondary/30"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="font-label text-xs text-on-surface-variant hover:text-primary transition-colors underline decoration-transparent hover:decoration-secondary/30"
                href="#"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="font-label text-xs text-on-surface-variant hover:text-primary transition-colors underline decoration-transparent hover:decoration-secondary/30"
                href="#"
              >
                Shipping Information
              </a>
            </li>
            <li>
              <a
                className="font-label text-xs text-on-surface-variant hover:text-primary transition-colors underline decoration-transparent hover:decoration-secondary/30"
                href="#"
              >
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-label text-xs font-bold text-primary mb-6 uppercase tracking-widest">
            Contact Us
          </h4>
          <ul className="space-y-4 text-on-surface-variant font-body text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="font-label text-xs font-bold text-primary shrink-0 mt-0.5">
                Location:
              </span>
              <span>123 Heritage Lane, Woodcraft District, Mumbai 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="font-label text-xs font-bold text-primary">Phone:</span>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="font-label text-xs font-bold text-primary">Email:</span>
              <span>hello@shivshakti.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label text-xs text-on-surface-variant">
          © {new Date().getFullYear()} Shiv Shakti Furniture House. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors font-label text-xs"
            href="#"
          >
            In
          </a>
          <a
            className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors font-label text-xs"
            href="#"
          >
            Fb
          </a>
        </div>
      </div>
    </footer>
  );
};
