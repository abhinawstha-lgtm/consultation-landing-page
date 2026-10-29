import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-16 pt-14 sm:pb-24 sm:pt-20">
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
      <div className="animate-rise-in mx-auto max-w-4xl text-center">
        <p className="soft-pulse mb-5 inline-flex rounded-full border border-primary/10 bg-primary-tint px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary sm:text-sm">
          Free 1-hour one-to-one consultation
        </p>
        <h1 className="text-balance text-[clamp(2.25rem,8.7vw,4.75rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-heading">
          <span className="block">Sales Stuck?</span>
          <span className="block text-primary">Your Next 10 Customers Start Here.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium leading-8 text-body sm:text-xl">
          Book a free 1-hour one-to-one call. Leave with a customized marketing plan in PDF format.
        </p>
        <div className="mx-auto mt-6 max-w-2xl space-y-1.5 text-[15px] leading-7 text-body sm:text-base">
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
    </section>
  );
}
