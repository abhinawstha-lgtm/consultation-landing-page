import { LEAD_BACKEND_CONNECTED } from "@/lib/config";
import type { LeadFormData } from "@/lib/validation";

export async function submitLead(data: LeadFormData): Promise<{ success: true }> {
  // TODO: Connect Google Sheets, Formspree, or an email backend here before launch.
  if (!LEAD_BACKEND_CONNECTED) {
    await new Promise((resolve) => setTimeout(resolve, 850));
    void data;
    return { success: true };
  }

  throw new Error("A real lead backend has not been implemented yet.");
}
