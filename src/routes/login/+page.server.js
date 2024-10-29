import { supabase } from "$lib/supabaseClient";
import { error } from '@sveltejs/kit';

export async function load() {
  const { data } = await supabase.from("users").select();
  return {
    users: data ?? [],
  };
}
