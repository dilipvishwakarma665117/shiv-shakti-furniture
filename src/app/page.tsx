import { createClient } from "@/utils/supabase/server";
import { HomeClient } from "./HomeClient";

// Force dynamic rendering since we are reading request context/cookies in Supabase server client
export const dynamic = "force-dynamic";

export default async function Home() {
  let products: any[] = [];

  try {
    console.log("=== SUPABASE CONNECTION VERIFICATION ===");
    console.log("NEXT_PUBLIC_SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
    console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY length:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0);

    const supabase = await createClient();
    console.log("Supabase Client initialized successfully. Querying 'products' table...");

    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.error("Supabase returned a database query error:", error);
    } else {
      console.log("Supabase query successful! Fetched rows count:", data?.length || 0);
      console.log("Supabase products sample data:", data ? data.slice(0, 2) : []);
    }

    if (!error && data) {
      products = data;
    }
  } catch (e) {
    console.error("Supabase exception caught during initialization/query:", e);
  }

  return <HomeClient initialProducts={products} />;
}
