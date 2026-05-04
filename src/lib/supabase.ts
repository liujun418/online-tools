import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://rmwlbymwlmfduzjcljpi.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_2bV75dUd7pkLscTOFR9OZQ_F8kBEfMY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
