import { ArrowRight, Check, Sparkles } from "lucide-react";

const consultationIncludes = [
  "A direct 30–40 minute one-to-one business call",
  "A strategy built around your products or services",
  "A customized marketing plan in PDF format",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-14 sm:pb-24 sm:pt-20">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[520px] max-w-5xl opacity-90"
        style={{
          background:
            "radial-gradient(circle at 50% 18%, rgba(47,91,211,0.12), rgba(232,238,251,0.62) 34%, rgba(255,255,255,0) 72%)",
        }}
        aria-hidden="true"
      />
      <div className="float-soft pointer-events-none absolute left-[4%] top-24 -z-10 h-24 w-24 rounded-full bg-primary-tint/80 blur-2xl sm:h-40 sm:w-40" aria-hidden="true" />
      <div className="float-soft-delayed pointer-events-none absolute right-[3%] top-40 -z-10 h-20 w-20 rounded-full bg-secondary/10 blur-2xl sm:h-36 sm:w-36" aria-hidden="true" />
      <div className="decorative-ring pointer-events-none absolute -left-14 top-1/3 -z-10 h-32 w-32 rounded-full sm:left-[3%] sm:h-44 sm:w-44" aria-hidden="true" />
      <div className="decorative-ring pointer-events-none absolute -right-12 bottom-10 -z-10 h-24 w-24 rounded-full sm:right-[5%] sm:h-36 sm:w-36" aria-hidden="true" />
      <div className="animate-rise-in mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-14">
        <div className="text-center lg:text-left">
          <p className="soft-pulse mb-5 inline-flex rounded-full border border-primary/10 bg-primary-tint px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
            Free 30–40 minute one-to-one consultation
          </p>
          <h1 className="text-balance text-[clamp(2.25rem,8.7vw,4.6rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-heading lg:text-[clamp(3.25rem,5.8vw,4.6rem)]">
            <span className="block">Sales Stuck?</span>
            <span className="block text-primary">Your Next 10 Customers Start Here.</span>
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
        </div>

        <aside className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-primary/10 bg-white/90 p-6 text-left shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:p-8 lg:mx-0" aria-label="Free consultation includes">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" aria-hidden="true" />
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-tint/80 blur-2xl" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint text-primary">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-white">Free</span>
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-primary">Built around your business</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-heading">Free Consultation Includes</h2>
            <ul className="mt-6 space-y-4">
              {consultationIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="font-semibold leading-7 text-heading">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl bg-soft px-4 py-3 text-sm font-semibold leading-6 text-body">No group calls. No generic template.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
