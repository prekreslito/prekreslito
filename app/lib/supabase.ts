import { createClient } from "@supabase/supabase-js";

console.log("URL =", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log("SERVICE =", process.env.SUPABASE_SERVICE_ROLE_KEY);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(
  supabaseUrl,
  serviceRoleKey
);