import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gcickuehlcbhlwbbydku.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjaWNrdWVobGNiaGx3YmJ5ZGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczOTk3MTIsImV4cCI6MTk5Mjk3NTcxMn0.p7PJ_6lvKi_C_ZfvhvPIMwoxd21p-wMPEDjW62N6p08";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
