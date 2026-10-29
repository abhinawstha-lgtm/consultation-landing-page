export type LeadFormData = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

export type LeadFormErrors = Partial<Record<keyof LeadFormData, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9][0-9 ]{6,19}$/;

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateLead(data: LeadFormData): LeadFormErrors {
  const errors: LeadFormErrors = {};

  if (!data.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!data.email.trim()) errors.email = "Please enter your active email.";
  else if (!emailPattern.test(data.email.trim())) errors.email = "Please enter a valid email address.";
  if (!data.whatsapp.trim()) errors.whatsapp = "Please enter your WhatsApp number.";
  else if (!phonePattern.test(data.whatsapp.trim()))
    errors.whatsapp = "Use only +, numbers, and spaces (at least 7 digits).";
  if (!data.businessName.trim()) errors.businessName = "Please enter your business name.";
  if (data.website.trim() && !isValidUrl(data.website.trim()))
    errors.website = "Please enter a full URL, starting with http:// or https://.";

  return errors;
}
