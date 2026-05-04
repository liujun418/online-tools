import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("suggestions")
    .select("id, text, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ data });
}

export async function POST(request: Request) {
  const { text } = await request.json();

  if (!text || typeof text !== "string" || text.trim().length === 0) {
    return Response.json({ error: "Text is required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("suggestions")
    .insert([{ text: text.trim() }])
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ data });
}
