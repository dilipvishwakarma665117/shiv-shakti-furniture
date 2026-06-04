"use server";

import { createClient } from "@/utils/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export type FormState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function createProduct(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    // 1. Authenticate user server-side
    const user = await currentUser();
    const email = user?.emailAddresses[0]?.emailAddress;

    if (!email || email !== "dileepv9721@gmail.com") {
      return { success: false, error: "Access Denied: Admin Unauthorized" };
    }

    // 2. Extract and validate fields
    const name = formData.get("name") as string;
    const priceRaw = formData.get("price") as string;
    let category = formData.get("category") as string;
    
    // Map "Dining Room" to "Dining" to match frontend Collections filter
    if (category === "Dining Room") {
      category = "Dining";
    }
    const description = formData.get("description") as string;
    const image_url = formData.get("image_url") as string;

    if (!name || !priceRaw || !category || !description || !image_url) {
      return { success: false, error: "All fields are required." };
    }

    const price = parseInt(priceRaw, 10);
    if (isNaN(price) || price <= 0) {
      return { success: false, error: "Price must be a valid positive number." };
    }

    // 3. Insert into Supabase products table
    const supabase = await createClient();
    const { error } = await supabase.from("products").insert({
      name,
      price,
      category,
      description,
      image_url,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: `Database error: ${error.message}` };
    }

    // 4. Revalidate homepage path
    revalidatePath("/");

    return { success: true, message: `Successfully created "${name}"!` };
  } catch (err: any) {
    console.error("Server Action exception:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}
