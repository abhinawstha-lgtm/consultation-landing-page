import { ArrowUpRight, Check } from "lucide-react";
import { WHATSAPP_MESSAGE } from "@/lib/config";

const steps = [
  "Watch the short video below.",
  "Message us on WhatsApp so we can confirm your call time.",
  "Get ready to talk about your business. We’ll build your plan in PDF format after the call.",
];

function getVimeoEmbedUrl(value: string | undefined) {
  if (!value) return null;
  try {
    const url = new URL(value);
    if (!url.hostname.endsWith("vimeo.com")) return null;
    const match = url.pathname.match(/(?:video\/)?(\d+)/);
    return match ? `https://player.vimeo.com/video/${match[1]}` : null;
  } catch {
    return null;
  }
}

export function ThankYouContent() {
  const vimeoUrl = getVimeoEmbedUrl(process.env.NEXT_PUBLIC_VIMEO_URL);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : null;
  const showDevNotices = process.env.NODE_ENV !== "production";

  return (
    <section className="relative isolate min-h-[calc(100vh-82px)] overflow-hidden px-5 py-14 sm:py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[520px] max-w-5xl opacity-90"
        style={{
          background:
            "radial-gradient(circle at 50% 12%, rgba(47,91,211,0.12), rgba(232,238,251,0.62) 34%, rgba(255,255,255,0) 72%)",
        }}
        aria-hidden="true"
      />
      <div className="float-soft pointer-events-none absolute left-[6%] top-28 -z-10 h-24 w-24 rounded-full bg-primary-tint blur-2xl" aria-hidden="true" />
      <div className="float-soft-delayed pointer-events-none absolute right-[6%] top-44 -z-10 h-20 w-20 rounded-full bg-secondary/10 blur-2xl" aria-hidden="true" />
      <div className="animate-rise-in mx-auto max-w-4xl text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_12px_30px_rgba(0,48,140,0.22)]">
          <Check className="h-7 w-7" strokeWidth={3} aria-hidden="true" />
        </span>
        <h1 className="mt-7 text-balance text-[clamp(2.2rem,8vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-heading">
          Congratulations! You&apos;re <span className="text-primary">One Step Closer.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-body">
          Your request is in. Watch the short video below to see what happens next.
        </p>

        <ol className="mx-auto mt-9 grid max-w-3xl gap-3 text-left">
          {steps.map((step, index) => (
            <li key={step} className="card-interactive flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-sm font-extrabold text-primary">
                {index + 1}
              </span>
              <p className="pt-1 text-[15px] font-semibold leading-6 text-heading sm:text-base">{step}</p>
            </li>
          ))}
        </ol>

        {vimeoUrl ? (
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-black shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
            <div className="aspect-video">
              <iframe
                src={vimeoUrl}
                title="What happens next after your consultation request"
                className="h-full w-full"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : showDevNotices ? (
          <p className="mx-auto mt-8 max-w-md rounded-xl border border-dashed border-primary/30 bg-primary-tint px-4 py-3 text-sm font-bold text-primary">
            Add NEXT_PUBLIC_VIMEO_URL
          </p>
        ) : null}

        {whatsappUrl ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-extrabold text-[#082d17] shadow-[0_12px_30px_rgba(37,211,102,0.25)] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/30 sm:w-auto sm:min-w-72"
          >
            Message Us on WhatsApp
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </a>
        ) : showDevNotices ? (
          <p className="mx-auto mt-5 max-w-md rounded-xl border border-dashed border-primary/30 bg-primary-tint px-4 py-3 text-sm font-bold text-primary">
            Add NEXT_PUBLIC_WHATSAPP_NUMBER
          </p>
        ) : null}
      </div>
    </section>
  );
}
