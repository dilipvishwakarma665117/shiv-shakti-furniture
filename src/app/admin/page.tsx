import React from "react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AdminForm } from "./AdminForm";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  // Check Clerk authentication
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in?redirect_url=/admin");
  }

  // Get user details and check admin authorization
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;

  if (email !== "dileepv9721@gmail.com") {
    return (
      <main className="min-h-screen bg-[#110d0c] text-white flex items-center justify-center p-6">
        <div className="bg-[#1a1412] border border-rose-950/40 p-8 rounded-lg max-w-md w-full text-center shadow-2xl animate-fade-in-up">
          <h1 className="text-xl font-bold text-rose-500 mb-2">Access Denied</h1>
          <p className="text-[#d0c4c0] text-sm">Admin Unauthorized</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#110d0c] text-white flex items-center justify-center p-6 md:p-12">
      <AdminForm />
    </main>
  );
}
