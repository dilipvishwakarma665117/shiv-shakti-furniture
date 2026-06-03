"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth, UserButton } from "@clerk/nextjs";

export const Header: React.FC = () => {
  const { cartCount, setIsConsultationOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-surface shadow-md border-primary/10 py-4"
          : "bg-surface/95 backdrop-blur-sm border-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
        {/* Logo */}
        <Link
          className="font-display text-xl md:text-2xl font-bold text-primary shrink-0 transition-transform duration-300 hover:scale-98"
          href="/"
        >
          Shiv Shakti Furniture House
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            className="text-primary hover:text-secondary transition-colors font-label text-sm font-semibold"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm font-semibold"
            href="/#collections"
          >
            Collections
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm font-semibold"
            href="/#trending"
          >
            Trending
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm font-semibold"
            href="/#features"
          >
            Why Us
          </Link>
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm font-semibold cursor-pointer"
          >
            Consultation
          </button>
        </nav>

        {/* Trailing Icons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            aria-label="search"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            aria-label="favorite"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors hidden md:block cursor-pointer"
          >
            <Heart className="w-5 h-5" />
          </button>

          {/* Cart Redirect Link (Triggers middleware if not signed in) */}
          <Link
            href="/cart"
            aria-label="shopping_cart"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors relative group cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5" />
            <span
              className={`absolute top-1 right-0 bg-primary text-on-primary font-label text-[10px] w-4 h-4 rounded-full flex items-center justify-center transform origin-center transition-all duration-300 ${
                cartCount > 0 ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              {cartCount}
            </span>
          </Link>

          {/* User Profile Button */}
          <div className="flex items-center pl-2 border-l border-primary/10">
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Link
                href="/sign-in"
                className="text-primary hover:text-secondary transition-colors font-label text-xs font-bold border border-primary/10 rounded px-3 py-1.5 bg-surface-container-lowest"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Menu"
            className="md:hidden p-2 text-on-surface-variant cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-surface z-40 transform transition-transform duration-300 pt-28 px-margin-mobile md:hidden flex flex-col justify-start space-y-8 h-screen ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <Link
            className="font-display text-2xl font-semibold text-primary"
            href="/"
            onClick={handleMobileLinkClick}
          >
            Home
          </Link>
          <Link
            className="font-display text-2xl font-semibold text-on-surface-variant hover:text-primary transition-colors"
            href="/#collections"
            onClick={handleMobileLinkClick}
          >
            Collections
          </Link>
          <Link
            className="font-display text-2xl font-semibold text-on-surface-variant hover:text-primary transition-colors"
            href="/#trending"
            onClick={handleMobileLinkClick}
          >
            Trending Pieces
          </Link>
          <Link
            className="font-display text-2xl font-semibold text-on-surface-variant hover:text-primary transition-colors"
            href="/#features"
            onClick={handleMobileLinkClick}
          >
            Why Choose Us
          </Link>
          <button
            className="font-display text-2xl font-semibold text-on-surface-variant hover:text-primary transition-colors text-left cursor-pointer"
            onClick={() => {
              handleMobileLinkClick();
              setIsConsultationOpen(true);
            }}
          >
            Book Consultation
          </button>

          {/* Mobile Auth options */}
          <div className="pt-6 border-t border-primary/10">
            {isSignedIn ? (
              <div className="flex items-center gap-3">
                <UserButton />
                <span className="font-label text-sm text-primary font-bold">My Account</span>
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="inline-block w-full py-4 bg-primary text-on-primary font-label text-sm font-bold rounded text-center cursor-pointer"
                onClick={handleMobileLinkClick}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
