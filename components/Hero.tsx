import Image from "next/image";
import { ArrowRight, Check, Sparkles, TrendingUp } from "lucide-react";

const consultationIncludes = [
  "A direct 30–40 minute one-to-one business call",
  "A strategy built around your products or services",
  "A customized marketing plan in PDF format",
];

export function Hero() {
  return (
    <section className="hero-aurora relative isolate overflow-hidden px-5 pb-16 pt-12 sm:pb-24 sm:pt-16 lg:min-h-[760px] lg:pt-20">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-beam pointer-events-none absolute -right-44 top-8 -z-10 h-[640px] w-[760px] rotate-[-10deg] rounded-[45%]" aria-hidden="true" />
      <div className="float-soft pointer-events-none absolute left-[4%] top-24 -z-10 h-24 w-24 rounded-full bg-primary-tint/80 blur-2xl sm:h-40 sm:w-40" aria-hidden="true" />
      <div className="float-soft-delayed pointer-events-none absolute right-[4%] top-28 -z-10 h-24 w-24 rounded-full bg-secondary/20 blur-3xl sm:h-44 sm:w-44" aria-hidden="true" />
      <div className="decorative-ring orbit-drift pointer-events-none absolute -left-16 top-[38%] -z-10 h-36 w-36 rounded-full sm:left-[2%] sm:h-52 sm:w-52" aria-hidden="true" />
      <div className="decorative-ring orbit-drift-reverse pointer-events-none absolute -right-16 bottom-4 -z-10 h-28 w-28 rounded-full sm:right-[3%] sm:h-40 sm:w-40" aria-hidden="true" />
      <div className="decorative-dots pointer-events-none absolute left-[48%] top-10 -z-10 hidden opacity-60 lg:block" aria-hidden="true" />

      <div className="animate-rise-in mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(440px,0.98fr)] lg:gap-16">
        <div className="relative z-10 text-center lg:text-left">
          <p className="soft-pulse mb-5 inline-flex rounded-full border border-primary/10 bg-primary-tint px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
            Free 30–40 minute one-to-one consultation
          </p>
          <h1 className="text-balance text-[clamp(2.25rem,8.7vw,4.85rem)] font-extrabold leading-[1.04] tracking-[-0.05em] text-heading lg:text-[clamp(3.5rem,5.5vw,4.85rem)]">
            <span className="block">Sales Stuck?</span>
            <span className="hero-gradient-text block">Your Next 10 Customers Start Here.</span>
          </h1>
          <div className="mx-auto mt-6 max-w-2xl space-y-1.5 text-[15px] leading-7 text-body sm:text-base lg:mx-0">
            <p>This is a free AI marketing consultation for small and medium business owners.</p>
            <p>If your products or services aren&apos;t selling the way you want, this call is for you.</p>
            <p>We look at your business and build a plan that fits it.</p>
          </div>
          <a
            href="#book"
            className="group mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-white shadow-[0_12px_30px_rgba(0,48,140,0.22)] transition hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_16px_38px_rgba(0,48,140,0.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 sm:w-auto sm:min-w-64"
          >
            Book Free Consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start" aria-label="Consultation highlights">
            {["One-to-one", "30–40 minutes", "PDF action plan"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3.5 py-2 text-xs font-bold text-heading shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
          <div className="hero-photo-glow pointer-events-none absolute -inset-8 -z-10 rounded-[3rem]" aria-hidden="true" />
          <div className="portrait-stage relative min-h-[570px] overflow-hidden rounded-[2.25rem] border border-white/80 bg-primary-tint shadow-[0_35px_90px_rgba(0,48,140,0.22)] sm:min-h-[640px]">
            <Image
              src="/abhinav-marketing-consultant.png"
              alt="Abhinav Shrestha, AI marketing consultant"
              fill
              priority
              sizes="(max-width: 1023px) 92vw, 46vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/5 via-transparent to-primary-dark/90" aria-hidden="true" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.2),transparent_28%,transparent_70%,rgba(47,91,211,0.18))]" aria-hidden="true" />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3.5 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-primary shadow-lg backdrop-blur-md sm:left-7 sm:top-7">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              AI marketing, made practical
            </div>

            <div className="float-card absolute right-4 top-24 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 text-heading shadow-xl backdrop-blur-md sm:right-6 sm:top-28">
              <div className="flex items-center gap-2 text-sm font-extrabold">
                <TrendingUp className="h-4 w-4 text-secondary" aria-hidden="true" />
                Clarity → Plan → Action
              </div>
            </div>

            <aside className="absolute inset-x-4 bottom-4 overflow-hidden rounded-[1.65rem] border border-white/25 bg-primary-dark/85 p-5 text-left text-white shadow-2xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6" aria-label="Free consultation includes">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-white/80 to-secondary" aria-hidden="true" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-200">Built around your business</p>
                  <h2 className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl">Free Consultation Includes</h2>
                </div>
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-primary">Free</span>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {consultationIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm font-semibold leading-5 text-white/90 sm:block">
                    <span className="mb-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/15 pt-3 text-xs font-semibold text-blue-100">No group calls. No generic template.</p>
            </aside>
          </div>

          <div className="pointer-events-none absolute -bottom-5 -left-5 -z-10 h-28 w-28 rounded-full border border-secondary/20 bg-primary-tint/70" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-6 -top-6 -z-10 h-24 w-24 rounded-full border-[18px] border-white/70 shadow-[0_15px_50px_rgba(47,91,211,0.15)]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
