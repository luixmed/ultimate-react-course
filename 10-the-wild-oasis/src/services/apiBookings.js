import supabase from "./supabase";

export async function getBookings() {
  const { data, error } = supabase.from("bookings").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}
