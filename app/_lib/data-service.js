import { supabase } from "./supabase";
export async function addOnboardingEmail(email) {
  try {
    const { data, error } = await supabase
      .from("onboarding_emails")
      .insert([{ email }]) // Ensuring it's an array of objects
      .select();

    if (error) {
      console.error("Supabase Insert Error:", error);
      return null; // Return null to indicate failure
    }

    return data;
  } catch (error) {
    console.error("Unexpected Error:", error);
    return null;
  }
}
