"use client";

import React, { useEffect, useState } from "react";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useCart();
  const [animate, setAnimate] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      setAnimate(true);
      document.body.style.overflow = "hidden";
    } else {
      setAnimate(false);
      document.body.style.overflow = "";
      setCheckedOut(false);
    }
  }, [isCartOpen]);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setIsCartOpen(false);
    }, 300);
  };

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      clearCart();
      handleClose();
    }, 2500);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Drawer Panel */}
      <div
        className={`relative w-full max-w-md h-full bg-surface shadow-[0_0_50px_rgba(44,37,35,0.15)] border-l border-primary/10 flex flex-col transition-transform duration-300 transform ${
          animate ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-primary/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h3 className="font-display text-xl font-bold text-primary">Your Cart</h3>
          </div>
          <button
            onClick={handleClose}
            className="text-on-surface-variant hover:text-primary transition-colors p-1"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6">
          {checkedOut ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-semibold text-primary mb-2">
                Order Placed Successfully!
              </h4>
              <p className="font-body text-sm text-on-surface-variant max-w-xs">
                Thank you for shopping with us. A confirmation email and catalog receipt will be sent shortly.
              </p>
            </div>
          ) : cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <ShoppingBag className="w-16 h-16 text-outline-variant mb-6 stroke-1" />
              <h4 className="font-display text-lg font-semibold text-primary mb-2">
                Your cart is empty
              </h4>
              <p className="font-body text-sm text-on-surface-variant max-w-xs mb-8">
                Browse our collections and discover premium pieces for your home.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-primary text-on-primary hover:bg-primary-container font-label text-sm rounded transition-all duration-300 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedFinish}`}
                  className="flex gap-4 p-4 rounded-lg bg-surface-container-lowest border border-primary/5 shadow-sm"
                >
                  <div className="w-20 h-20 bg-surface-container rounded overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.product.image_url}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-base font-semibold text-primary line-clamp-1">
                        {item.product.name}
                      </h4>
                      <p className="font-label text-xs text-on-surface-variant mt-0.5">
                        Finish: {item.selectedFinish}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-primary/10 rounded overflow-hidden bg-surface">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 px-2 hover:bg-surface-container text-on-surface-variant transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 font-label text-sm text-primary">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 px-2 hover:bg-surface-container text-on-surface-variant transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-outline hover:text-error transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-right">
                    <span className="font-label text-sm font-semibold text-primary">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && !checkedOut && (
          <div className="p-6 border-t border-primary/10 bg-surface-container-low">
            <div className="flex justify-between items-center mb-6">
              <span className="font-body text-base text-on-surface-variant">Subtotal</span>
              <span className="font-display text-2xl font-bold text-primary">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>

            <p className="font-body text-xs text-on-surface-variant mb-6">
              Shipping and installation calculations are completed at checkout.
            </p>

            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary transition-all duration-300 font-label rounded shadow-[0_4px_25px_rgba(44,37,35,0.08)] flex items-center justify-center gap-2 cursor-pointer font-bold"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
