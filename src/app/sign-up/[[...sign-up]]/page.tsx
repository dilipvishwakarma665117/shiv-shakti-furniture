"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full flex flex-col items-center space-y-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-2">
            Shiv Shakti Furniture House
          </h2>
          <p className="font-body text-sm text-on-surface-variant">
            Create an account to save custom furniture collections
          </p>
        </div>
        <SignUp
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
