import { FileText, ListChecks, PlayCircle, SearchCheck, UserRound } from "lucide-react";

const benefits = [
  { text: "Know what to fix first to get more sales", icon: SearchCheck },
  { text: "Get a customized marketing plan in PDF format", icon: FileText },
  { text: "Start implementing it right after the call", icon: PlayCircle },
  { text: "Stop guessing what to post and where to spend", icon: ListChecks },
  { text: "Talk to someone who looks at your business, not a generic template", icon: UserRound },
];

export function Benefits() {
  return (
    <section className="px-5 py-16 sm:py-24" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">What you leave with</p>
          <h2 id="benefits-heading" className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            How You Benefit From This Consultation
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {benefits.map(({ text, icon: Icon }, index) => (
            <article
              key={text}
              className={`rounded-3xl border border-border bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] ${index === benefits.length - 1 ? "md:col-span-2 md:mx-auto md:w-1/2" : ""}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-tint text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-5 font-bold leading-7 text-heading">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
