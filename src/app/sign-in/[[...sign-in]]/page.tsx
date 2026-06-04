"use client";

import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full flex flex-col items-center space-y-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-label text-on-surface-variant hover:text-primary transition-colors group self-start"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <div className="text-center w-full">
          <h2 className="font-display text-3xl font-bold text-primary mb-2">
            Shiv Shakti Furniture House
          </h2>
          <p className="font-body text-sm text-on-surface-variant">
            Access your personalized furniture lookbook & cart
          </p>
        </div>
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-primary hover:bg-primary-container text-on-primary font-semibold text-sm py-2 px-4 rounded transition-colors",
              card: "shadow-none border border-primary/10 bg-surface rounded-xl",
              headerTitle: "text-primary font-display font-semibold",
              headerSubtitle: "text-on-surface-variant font-body text-sm",
              socialButtonsBlockButton: "border border-primary/10 hover:bg-surface-container text-primary",
              formFieldLabel: "text-primary font-semibold font-label text-xs",
              formFieldInput: "border-b border-primary/10 focus:border-primary focus:ring-0 bg-transparent text-primary",
              footerActionLink: "text-secondary hover:text-secondary-fixed transition-colors font-semibold",
            },
          }}
        />
      </div>
    </div>
  );
}
