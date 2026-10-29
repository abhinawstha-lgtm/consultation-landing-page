import { ArrowUpRight, Check, MessageCircle, PlayCircle } from "lucide-react";
import { WHATSAPP_MESSAGE } from "@/lib/config";

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
  const nextSteps = [
    ...(vimeoUrl ? ["Watch the short video to understand what happens next."] : []),
    "Connect with me on WhatsApp so we can confirm a suitable call time.",
    "Come ready to share your goals, biggest sales challenge, and what you’ve already tried.",
  ];

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
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-primary">Thank you for reaching out</p>
        <h1 className="mt-3 text-balance text-[clamp(2.2rem,8vw,4rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-heading">
          Your Consultation <span className="text-primary">Request Is In.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-body">
          Thank you for sharing your business details. You&apos;ve taken the first step toward a clearer marketing plan built around your business.
        </p>

        {vimeoUrl ? (
          <section className="mt-10 overflow-hidden rounded-[2rem] border border-border bg-white p-3 text-left shadow-[0_20px_60px_rgba(15,23,42,0.1)] sm:p-5" aria-labelledby="video-heading">
            <div className="flex items-center gap-3 px-2 pb-4 sm:px-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 id="video-heading" className="font-extrabold text-heading">Watch This Before Our Call</h2>
                <p className="mt-0.5 text-sm leading-6 text-body">See what happens next and how to prepare for a focused 30–40 minute conversation.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-black">
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
          </section>
        ) : showDevNotices ? (
          <p className="mx-auto mt-8 max-w-md rounded-xl border border-dashed border-primary/30 bg-primary-tint px-4 py-3 text-sm font-bold text-primary">
            Add NEXT_PUBLIC_VIMEO_URL
          </p>
        ) : null}

        <section className="mx-auto mt-10 max-w-3xl" aria-labelledby="next-steps-heading">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Simple next steps</p>
          <h2 id="next-steps-heading" className="mt-2 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">What Happens Next</h2>
          <ol className="mt-6 grid gap-3 text-left">
            {nextSteps.map((step, index) => (
              <li key={step} className="card-interactive flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-sm font-extrabold text-primary">
                  {index + 1}
                </span>
                <p className="pt-1 text-[15px] font-semibold leading-6 text-heading sm:text-base">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {whatsappUrl ? (
          <section className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-[#25D366]/25 bg-[#EAFBF0] p-6 text-center shadow-[0_16px_50px_rgba(37,211,102,0.12)] sm:p-8" aria-labelledby="whatsapp-heading">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-[#073B1C]">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 id="whatsapp-heading" className="mt-4 text-2xl font-extrabold tracking-tight text-heading">Let&apos;s Confirm Your Consultation</h2>
            <p className="mx-auto mt-2 max-w-xl leading-7 text-body">Connect with me directly on WhatsApp so we can confirm your call time and make sure you know what to prepare.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-base font-extrabold text-[#073B1C] shadow-[0_12px_30px_rgba(37,211,102,0.25)] transition hover:-translate-y-0.5 hover:brightness-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/30 sm:w-auto sm:min-w-80"
            >
              Connect With Me on WhatsApp
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </section>
        ) : showDevNotices ? (
          <p className="mx-auto mt-5 max-w-md rounded-xl border border-dashed border-primary/30 bg-primary-tint px-4 py-3 text-sm font-bold text-primary">
            Add NEXT_PUBLIC_WHATSAPP_NUMBER
          </p>
        ) : null}
      </div>
    </section>
  );
}
