"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CalendarCheck, FileCheck2, LockKeyhole, MessageSquareText, UserRound } from "lucide-react";
import { submitLead } from "@/lib/submitLead";
import { validateLead } from "@/lib/validation";
import type { LeadFormData, LeadFormErrors } from "@/lib/validation";

const initialData: LeadFormData = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
};

const infoBlocks = [
  {
    title: "Book the Call",
    description: "Pick your time and secure your free spot.",
    icon: CalendarCheck,
  },
  {
    title: "One-to-One Consultation",
    description: "A direct 1-hour conversation about your business. No group calls.",
    icon: UserRound,
  },
  {
    title: "Customized Strategy for Your Business",
    description: "A plan built around your products or services, delivered in PDF format.",
    icon: FileCheck2,
  },
];

type FieldProps = {
  id: keyof LeadFormData;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "url";
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function FormField({ id, label, placeholder, required, type = "text", value, error, onChange }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-heading">
        {label}{" "}
        {required ? (
          <span className="text-error" aria-hidden="true">*</span>
        ) : (
          <span className="font-medium text-body">(optional)</span>
        )}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="min-h-12 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-heading outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 aria-[invalid=true]:border-error aria-[invalid=true]:focus:ring-error/10"
      />
      {error ? <p id={errorId} className="mt-1.5 text-sm font-medium text-error">{error}</p> : null}
    </div>
  );
}

export function CTAForm() {
  const router = useRouter();
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function updateField(field: keyof LeadFormData, value: string) {
    setData((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateLead(data);
    setErrors(nextErrors);
    setSubmitError("");

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0];
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead(data);
      router.push("/thank-you");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <section id="book" className="scroll-mt-4 bg-soft px-5 py-16 sm:py-24" aria-labelledby="booking-heading">
      <div className="section-reveal mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Your next step</p>
          <h2 id="booking-heading" className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            Book Your Free Consultation
          </h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {infoBlocks.map(({ title, description, icon: Icon }) => (
            <article key={title} className="card-interactive group flex gap-4 rounded-2xl border border-border bg-white p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary transition-transform duration-200 group-hover:scale-110">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-bold text-heading">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-body">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" aria-hidden="true" />
          <div className="mb-8 flex items-start gap-4 border-b border-border pb-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
              <MessageSquareText className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-heading">Tell us about your business</h3>
              <p className="mt-1 text-sm leading-6 text-body">Fill out the short form. Required fields are marked with *.</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <FormField id="fullName" label="Full Name" placeholder="e.g. Ramesh Sharma" required value={data.fullName} error={errors.fullName} onChange={(value) => updateField("fullName", value)} />
            <FormField id="email" label="Active Email" placeholder="you@example.com" type="email" required value={data.email} error={errors.email} onChange={(value) => updateField("email", value)} />
            <FormField id="whatsapp" label="WhatsApp Number" placeholder="+977 98XXXXXXXX" type="tel" required value={data.whatsapp} error={errors.whatsapp} onChange={(value) => updateField("whatsapp", value)} />
            <FormField id="businessName" label="Business Name" placeholder="Your business name" required value={data.businessName} error={errors.businessName} onChange={(value) => updateField("businessName", value)} />
            <div className="sm:col-span-2">
              <FormField id="website" label="Website or Facebook URL" placeholder="https://example.com" type="url" value={data.website} error={errors.website} onChange={(value) => updateField("website", value)} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-bold text-heading">
                Anything You Want to Say <span className="font-medium text-body">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={data.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us about your biggest marketing or sales challenge."
                className="w-full resize-y rounded-xl border border-border bg-white px-4 py-3 text-base text-heading outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>
          </div>

          {submitError ? <p className="mt-5 text-center text-sm font-bold text-error" role="alert">{submitError}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-7 flex min-h-14 w-full items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(0,48,140,0.22)] transition hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_16px_38px_rgba(0,48,140,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? "Booking..." : "Book Free Consultation"}
          </button>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-body">
            <LockKeyhole className="h-4 w-4 text-primary" aria-hidden="true" />
            We respect your privacy. No spam.
          </p>
        </form>
      </div>
    </section>
  );
}
