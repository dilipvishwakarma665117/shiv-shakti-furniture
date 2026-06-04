"use client";

import React, { useActionState, useRef, useEffect } from "react";
import { createProduct, FormState } from "./actions";
import { Loader2, CheckCircle2, AlertCircle, ArrowLeft, PlusCircle } from "lucide-react";
import Link from "next/link";

const initialState: FormState = {
  success: false,
};

export function AdminForm() {
  const [state, formAction, isPending] = useActionState(createProduct, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Clear form inputs upon successful product creation
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <div className="w-full max-w-2xl bg-[#1a1412] border border-[#3d2e29] rounded-xl shadow-2xl p-8 md:p-10 animate-fade-in-up">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#3d2e29]">
        <div className="flex items-center gap-3">
          <PlusCircle className="w-6 h-6 text-[#e9c349]" />
          <h2 className="font-display text-2xl font-bold text-white">Add New Product</h2>
        </div>
        <Link
          href="/"
          className="inline-flex items-center text-xs font-label uppercase tracking-wider text-[#d0c4c0] hover:text-[#fed65b] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Gallery
        </Link>
      </div>

      {/* Success Banner */}
      {state.success && state.message && (
        <div className="mb-6 p-4 bg-emerald-950/40 border border-emerald-800 text-emerald-300 rounded-lg flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <span className="text-sm font-medium">{state.message}</span>
        </div>
      )}

      {/* Error Banner */}
      {!state.success && state.error && (
        <div className="mb-6 p-4 bg-rose-950/40 border border-rose-800 text-rose-300 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span className="text-sm font-medium">{state.error}</span>
        </div>
      )}

      <form ref={formRef} action={formAction} className="space-y-6">
        {/* Name input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-label text-xs font-semibold text-[#e9c349] uppercase tracking-wider mb-2">
            Product Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="e.g. Solid Oak Dining Table"
            className="w-full bg-[#110c0a] border border-[#4d3b35] focus:border-[#fed65b] focus:outline-none py-3 px-4 rounded text-white font-body text-sm transition-colors placeholder:text-stone-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Price input */}
          <div className="flex flex-col">
            <label htmlFor="price" className="font-label text-xs font-semibold text-[#e9c349] uppercase tracking-wider mb-2">
              Price (₹ INR)
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="1"
              required
              placeholder="e.g. 75000"
              className="w-full bg-[#110c0a] border border-[#4d3b35] focus:border-[#fed65b] focus:outline-none py-3 px-4 rounded text-white font-body text-sm transition-colors placeholder:text-stone-600"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="category" className="font-label text-xs font-semibold text-[#e9c349] uppercase tracking-wider mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              defaultValue=""
              className="w-full bg-[#110c0a] border border-[#4d3b35] focus:border-[#fed65b] focus:outline-none py-3 px-4 rounded text-white font-body text-sm transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23e9c349%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.2em] bg-[right_1rem_center] bg-no-repeat"
            >
              <option value="" disabled className="text-stone-500">Select Category</option>
              <option value="Living Room" className="bg-[#110c0a]">Living Room</option>
              <option value="Bedroom" className="bg-[#110c0a]">Bedroom</option>
              <option value="Dining Room" className="bg-[#110c0a]">Dining Room</option>
            </select>
          </div>
        </div>

        {/* Description textarea */}
        <div className="flex flex-col">
          <label htmlFor="description" className="font-label text-xs font-semibold text-[#e9c349] uppercase tracking-wider mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            placeholder="Describe the product's wood quality, craftsmanship details, finish, and dimensions..."
            className="w-full bg-[#110c0a] border border-[#4d3b35] focus:border-[#fed65b] focus:outline-none py-3 px-4 rounded text-white font-body text-sm transition-colors resize-none placeholder:text-stone-600 leading-relaxed"
          />
        </div>

        {/* Image URL input */}
        <div className="flex flex-col">
          <label htmlFor="image_url" className="font-label text-xs font-semibold text-[#e9c349] uppercase tracking-wider mb-2">
            Image URL
          </label>
          <input
            id="image_url"
            name="image_url"
            type="url"
            required
            placeholder="https://example.com/images/product.jpg"
            className="w-full bg-[#110c0a] border border-[#4d3b35] focus:border-[#fed65b] focus:outline-none py-3 px-4 rounded text-white font-body text-sm transition-colors placeholder:text-stone-600"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full mt-4 py-4 bg-[#735c00] hover:bg-[#e9c349] text-white hover:text-black disabled:bg-stone-800 disabled:text-stone-500 transition-all duration-300 font-label text-sm font-bold uppercase tracking-widest rounded shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Insert Product"
          )}
        </button>
      </form>
    </div>
  );
}
