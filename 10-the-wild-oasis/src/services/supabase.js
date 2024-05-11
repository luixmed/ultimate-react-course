import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://umarsrbgllwxwfevonuf.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtYXJzcmJnbGx3eHdmZXZvbnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxODEwMzEsImV4cCI6MjAyMjc1NzAzMX0.BFyJYlTM5KWeqpIxqxd7-LZlv922eA0KzwXX4pv5P0c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
