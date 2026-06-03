"use client";

import React, { useState } from "react";
import { Plus, Check, Eye } from "lucide-react";
import { useCart, Product } from "@/context/CartContext";

const PRODUCTS_DATA: Product[] = [
  {
    id: "prod-1",
    name: "Mahogany 6-Seater Dining Table",
    category: "Dining",
    description: "Handcrafted from kiln-dried mahogany with rich grain patterns, matching robust structural elegance.",
    finish: "Deep Mahogany",
    price: 124999,
    originalPrice: 149999,
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUuTZpL2dg3UxvNxhULRmEGykrFVHeB7hrmwMxAceg_x7XtiLTAvcqEE2SxnoJ1mIP5tjHw8xfxPevWDwsgBu_gnWw733up8n1Cqp_k3zvEBEFcTYD-mDyM7Cm9pOWqEJi1GCgB5cZnm9w_VVvxz55FGvwToFf_bw8xf6mcYq26tRo_dZQ0kY0wWJyHIQcKNtE6JIw9ZnZZV8xqFIqwhv1uvtvQQFnP_hueIegmxfMNCXryUtSBb1rkCqpFlw-Sc3GkEUgb5N-aw",
  },
  {
    id: "prod-2",
    name: "Royal Velvet Accent Chair",
    category: "Living Room",
    description: "Upholstered in rich charcoal velvet, supported by elegant tapered brass legs for a touch of mid-century luxury.",
    finish: "Charcoal & Brass",
    price: 45000,
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-vKKTf2LArauZUt_kXUEZqMs6R78EdtFrorRzdYqrvxPV-35FicYAFLRHbpDbfEMIEuuYjaSKzg7X4hdeIOF2ZvtYaITLd94vZYqQtraOHjMStHowF3iY2zXVxH1Z-S-qqldUxmIkLBR-5_BxJTZT5_VMbp0Ac8ClL8bOLYjeG6CKUzb8BOa_d5A_TUihsDB1cxIRkdCdVgWzAJiF0OkeOoRSRiYmivon5mwk-mMoMikFmoeLoR-8Noe2oybQiP3iCrGYgNTUUg",
  },
  {
    id: "prod-3",
    name: "Luxury Master Bed Set",
    category: "Bedroom",
    description: "Features a clean-lined solid walnut bed frame with an upholstered headboard, delivering quiet luxury to your bedroom.",
    finish: "Natural Walnut",
    price: 185000,
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB40Xnw1pr9Zf9NqzsRodVyYEfSicYLISjJ-gz5kp1tNjnS3GoWLREEg1mhRATIMxBVJhsDlYMOX9kTvqMZ6rK34xA9uJIPsWNuGWmAHBAwAoTY975I9AF2v__URTopwZLjhlXeDiHXCJz0nmGgfWTWLXdx6rH6Jt4mcDp-SchKBUGqGKtqXS3HEDmn1kSdl-vBpuT7we6BjQ3bieDKtJ8AoDlIpcQrPLxUmrYKMlGLMuqPKWA2mfIQ1U4UvlKtVLEn_9Lyfq2ZbA",
  },
  {
    id: "prod-4",
    name: "Modern Wooden Wardrobe",
    category: "Bedroom",
    description: "Four-door custom timber wardrobe complete with integrated drawers and sleek brass handles.",
    finish: "Kiln Oak",
    price: 95000,
    image_url:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfjX-spMBEiXLqBmkcZFUIZ0hOUL8HYUc_zKxSm1saEJs_n1Qw63mSwbI2tpmuu4haYUDmALQiuBWy-VD_wvaDkmxdKgs6FESgQZYb4KJEIEuCkFRFp5Dpyg3AUi_ZbfmZ8ZamSv4uXsmA4Sfv0x0tkFJDXfIFtPuEtsl2LhfbPH_JWLFUJLUXAhTEjcr5ylPn56nYcXMF5ddISQwFdkv6tlzaWtFAn4UEvJQYNrvjg-Wt1qGYgkQI00O68AabYQmDgTQf7jvIcQ",
  },
];

interface TrendingProductsProps {
  products?: Product[];
}

export const TrendingProducts: React.FC<TrendingProductsProps> = ({
  products = [],
}) => {
  const { addToCart, selectedCategory, setSelectedCategory } = useCart();
  const [addingId, setAddingId] = useState<string | null>(null);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string>("");

  const categories = ["All", "Living Room", "Bedroom", "Dining"];

  // Fallback to static list if database list is empty (e.g. Supabase connection pending config)
  const displayProducts = products && products.length > 0 ? products : PRODUCTS_DATA;

  const filteredProducts =
    selectedCategory === "All"
      ? displayProducts
      : displayProducts.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setAddingId(product.id);
    addToCart(product);
    setTimeout(() => {
      setAddingId(null);
    }, 1000);
  };

  const handleOpenDetails = (product: Product) => {
    setDetailProduct(product);
    setSelectedFinish(product.finish || "Natural Oak");
  };

  const handleDetailsAddToCart = () => {
    if (detailProduct) {
      addToCart(detailProduct, selectedFinish);
      setDetailProduct(null);
    }
  };

  return (
    <section id="trending" className="py-24 bg-surface-container-lowest border-y border-primary/5">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
              Trending Pieces
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Exceptional craftsmanship, engineered for generations.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-label-md text-label-md transition-all cursor-pointer rounded ${
                  selectedCategory === cat
                    ? "bg-secondary text-white font-bold"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-gutter gap-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col animate-fade-in-up">
              {/* Image box with relative icons */}
              <div className="relative aspect-square mb-6 overflow-hidden bg-surface-container-low rounded border border-primary/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={product.name}
                  className="w-full h-full object-cover object-center mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                  src={product.image_url}
                />

                {product.originalPrice && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-secondary-container text-on-secondary-container font-label-sm text-[10px] uppercase tracking-wider rounded-sm font-bold">
                      Best Seller
                    </span>
                  </div>
                )}

                {/* Floating action buttons */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleOpenDetails(product)}
                    className="w-12 h-12 bg-surface-container-lowest text-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 cursor-pointer"
                    aria-label="View details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-12 h-12 bg-surface-container-lowest text-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 cursor-pointer"
                    aria-label="Add to cart"
                  >
                    {addingId === product.id ? (
                      <Check className="w-5 h-5 text-secondary" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-lg text-primary mb-1 group-hover:text-secondary transition-colors font-semibold">
                    {product.name}
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant mb-3 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-label-md text-label-md font-bold text-primary">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>
                    {product.originalPrice && (
                      <span className="font-body-md text-sm text-outline line-through">
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {detailProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
            onClick={() => setDetailProduct(null)}
          />
          <div className="relative w-full max-w-3xl bg-surface rounded-xl shadow-2xl border border-primary/10 overflow-hidden transform transition-all duration-300 flex flex-col md:flex-row">
            {/* Left side: Image */}
            <div className="md:w-1/2 aspect-square md:aspect-auto bg-surface-container-low flex items-center justify-center relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={detailProduct.image_url}
                alt={detailProduct.name}
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>

            {/* Right side: Options */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider rounded-sm font-semibold">
                    {detailProduct.category}
                  </span>
                  <button
                    onClick={() => setDetailProduct(null)}
                    className="text-on-surface-variant hover:text-primary transition-colors p-1 font-label-sm text-label-sm cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                <h3 className="font-headline-lg text-2xl font-bold text-primary mb-2">
                  {detailProduct.name}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {detailProduct.description}
                </p>

                {/* Finish Selector */}
                <div className="mb-6">
                  <label className="block font-label-md text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    Select Wood Finish: {selectedFinish}
                  </label>
                  <div className="flex gap-3">
                    {[detailProduct.finish || "Natural Oak", "Teak Finish", "Charcoal Stain"].map((f) => (
                      <button
                        key={f}
                        onClick={() => setSelectedFinish(f)}
                        className={`px-3 py-1.5 font-label-sm text-xs rounded border transition-all cursor-pointer ${
                          selectedFinish === f
                            ? "border-secondary bg-secondary/5 text-secondary font-semibold"
                            : "border-primary/10 hover:border-primary/30 text-on-surface-variant"
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-primary/5 pt-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-label-md text-2xl font-bold text-primary">
                      ₹{detailProduct.price.toLocaleString("en-IN")}
                    </span>
                    {detailProduct.originalPrice && (
                      <span className="font-body-md text-sm text-outline line-through">
                        ₹{detailProduct.originalPrice.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  onClick={() => setDetailProduct(null)}
                  className="flex-1 py-3 border border-primary/20 hover:bg-primary/5 transition-all text-primary font-label-md text-sm rounded cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDetailsAddToCart}
                  className="flex-1 py-3 bg-primary text-on-primary hover:bg-primary-container font-label-md text-sm rounded transition-all cursor-pointer font-bold"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
