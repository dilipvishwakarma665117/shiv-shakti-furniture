"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth, UserButton } from "@clerk/nextjs";

export const Header: React.FC = () => {
  const { cartCount, setIsConsultationOpen, setSelectedCategory, isConsultationOpen, selectedCategory } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isSignedIn } = useAuth();
  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scrollspy logic to automatically update active nav indicator
      const collectionsEl = document.getElementById("collections");
      const colLivingEl = document.getElementById("col-living");
      const colBedroomEl = document.getElementById("col-bedroom");
      const colDiningEl = document.getElementById("col-dining");
      const trendingEl = document.getElementById("trending");
      
      const scrollPosition = window.scrollY + 250; // active section threshold offset
      
      if (trendingEl && scrollPosition >= trendingEl.offsetTop) {
        setActiveSection("trending");
      } else if (colDiningEl && scrollPosition >= colDiningEl.offsetTop) {
        setActiveSection("Dining");
      } else if (colBedroomEl && colLivingEl) {
        const isMobile = colBedroomEl.offsetTop > colLivingEl.offsetTop;
        if (isMobile) {
          if (scrollPosition >= colBedroomEl.offsetTop) {
            setActiveSection("Bedroom");
          } else if (scrollPosition >= colLivingEl.offsetTop) {
            setActiveSection("Living Room");
          } else if (collectionsEl && scrollPosition >= collectionsEl.offsetTop) {
            setActiveSection("Living Room");
          }
        } else {
          if (collectionsEl && scrollPosition >= collectionsEl.offsetTop) {
            if (selectedCategory === "Bedroom") {
              setActiveSection("Bedroom");
            } else if (selectedCategory === "Dining") {
              setActiveSection("Dining");
            } else {
              setActiveSection("Living Room");
            }
          }
        }
      } else if (collectionsEl && scrollPosition >= collectionsEl.offsetTop) {
        setActiveSection("Living Room");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedCategory]);

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

  const handleCategoryLink = (category: string) => {
    setSelectedCategory(category);
    handleMobileLinkClick();

    if (pathname !== "/") {
      router.push("/#collections");
    } else {
      const collectionsSection = document.getElementById("collections");
      if (collectionsSection) {
        collectionsSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleHomeLink = () => {
    setSelectedCategory("All");
    handleMobileLinkClick();
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isLinkActive = (category: string) => {
    if (category === "All") {
      return pathname === "/" && activeSection === "home";
    }
    if (category === "Contact") {
      return isConsultationOpen;
    }
    if (pathname === "/") {
      if (activeSection === "trending") {
        return selectedCategory === category;
      }
      return activeSection === category;
    }
    return false;
  };

  const navLinks = [
    { label: "Home", category: "All", onClick: handleHomeLink },
    { label: "Living Room", category: "Living Room", onClick: () => handleCategoryLink("Living Room") },
    { label: "Bedroom", category: "Bedroom", onClick: () => handleCategoryLink("Bedroom") },
    { label: "Dining Room", category: "Dining", onClick: () => handleCategoryLink("Dining") },
    { label: "Contact Us", category: "Contact", onClick: () => setIsConsultationOpen(true) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-surface shadow-md border-primary/10"
          : "bg-surface/95 backdrop-blur-sm border-transparent"
      }`}
    >
      {/* Collapsing Announcement Bar */}
      <div
        className={`bg-primary text-on-primary text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-center uppercase transition-all duration-300 flex items-center justify-center overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-9 opacity-100 border-b border-primary/10"
        }`}
      >
        Premium Solid Wood Furniture • Custom Designs Available
      </div>

      <div
        className={`relative z-50 flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full transition-all duration-300 ${
          isScrolled ? "py-2.5" : "py-4"
        }`}
      >
        {/* Left Side: Brand Logo and Navigation Links */}
        <div className="flex items-center gap-8 xl:gap-12">
          {/* Logo and Brand Text */}
          <button
            onClick={handleHomeLink}
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 transition-transform duration-300 hover:scale-[0.98] cursor-pointer bg-transparent border-none text-left p-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Shiv Shakti Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-primary/10 shadow-sm"
            />
            <div className="flex flex-col justify-center">
              <span className="font-display text-lg sm:text-xl font-bold text-primary leading-none tracking-tight">
                Shiv Shakti
              </span>
              <span className="font-label text-[8px] sm:text-[9px] font-semibold text-on-surface-variant uppercase tracking-[0.25em] mt-1 leading-none">
                Furniture House
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className={`group font-label text-[11px] uppercase tracking-[0.18em] font-bold py-1.5 relative transition-colors duration-300 cursor-pointer ${
                  isLinkActive(link.category)
                    ? "text-primary"
                    : "text-on-surface-variant/80 hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-primary transition-transform duration-300 origin-left ${
                    isLinkActive(link.category) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>

        {/* Trailing Icons */}
        <div className="flex items-center space-x-1 md:space-x-3">
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
            className="lg:hidden p-2 text-on-surface-variant cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-surface/98 backdrop-blur-md z-40 transform transition-transform duration-300 pt-28 px-margin-mobile lg:hidden flex flex-col justify-start space-y-8 h-screen ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.onClick}
              className={`group font-display text-2xl font-semibold text-left transition-colors duration-300 cursor-pointer flex items-center justify-between py-1 border-b border-primary/5 ${
                isLinkActive(link.category)
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <span>{link.label}</span>
              <span
                className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${
                  isLinkActive(link.category) ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                }`}
              />
            </button>
          ))}

          {/* Mobile Auth options */}
          <div className="pt-6 border-t border-primary/10 font-display">
            {isSignedIn ? (
              <div className="flex items-center gap-3 py-2">
                <UserButton />
                <span className="font-label text-sm text-primary font-bold">My Account</span>
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="inline-block w-full py-4 bg-primary text-white hover:bg-secondary transition-all duration-300 font-label-md text-label-md rounded shadow-[0_4px_25px_rgba(44,37,35,0.08)] text-center cursor-pointer font-bold uppercase tracking-wider"
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
