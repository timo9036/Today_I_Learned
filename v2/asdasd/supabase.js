import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jqsnakrijhahzfqizgwf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxc25ha3JpamhhaHpmcWl6Z3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3MDg3NjEsImV4cCI6MTk5MzI4NDc2MX0.c6sgf4CB7xQ9UcFJkLAhivGLs3jOgOIIhDxpDqeoj64";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
