import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shiv Shakti Furniture House | Artisan Heritage & Warm Minimalism",
  description:
    "Discover premium, handcrafted wooden furniture designed to last generations. Crafted with Deep Walnut, Brass details, and elegant wood grains.",
  keywords: "premium furniture, handcrafted wood, custom dining table, wooden wardrobe, master bedroom set, shiv shakti furniture house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${inter.variable} ${notoSerif.variable} h-full scroll-smooth`}
      >
        <body className="min-h-full flex flex-col font-body bg-background text-on-background antialiased selection:bg-secondary-container selection:text-on-secondary-container">
          <CartProvider>{children}</CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
