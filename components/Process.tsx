const steps = [
  {
    title: "Tell us about your business.",
    description: "Fill out the short form below.",
  },
  {
    title: "Book your one-to-one call.",
    description: "We talk for 1 hour about your business and your sales problem.",
  },
  {
    title: "Get your customized plan.",
    description:
      "You receive a digital marketing plan in PDF format that you can start using immediately.",
  },
];

export function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-primary px-5 py-16 text-white sm:py-24" aria-labelledby="process-heading">
      <div className="process-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full border border-white/10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-8 -top-12 -z-10 h-48 w-48 rounded-full border border-white/10" aria-hidden="true" />
      <div className="section-reveal mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white/70">Simple and focused</p>
          <h2 id="process-heading" className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            How It Works
          </h2>
        </div>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="group rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-extrabold text-primary shadow-lg shadow-primary-dark/20 transition-transform duration-200 group-hover:scale-110">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 leading-7 text-white/80">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
