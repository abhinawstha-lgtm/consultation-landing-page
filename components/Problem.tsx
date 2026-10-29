import { CircleAlert } from "lucide-react";

const problems = [
  "Your page gets likes and views. But few real sales.",
  'Customers message “price?” and then disappear.',
  "You don’t have time to plan content every day.",
  "You spend on ads and don’t know what worked.",
  "You keep guessing what to do next.",
];

export function Problem() {
  return (
    <section className="bg-soft px-5 py-16 sm:py-24" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">The real problem</p>
          <h2 id="problem-heading" className="mt-3 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            Sound familiar?
          </h2>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={problem}
              className={`flex items-start gap-3 rounded-2xl border border-border bg-white p-5 ${index === problems.length - 1 ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.375rem)]" : ""}`}
            >
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary">
                <CircleAlert className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="leading-7 text-body">{problem}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-bold leading-8 text-heading">
          You don&apos;t need more guessing. You need a clear plan for your business.
        </p>
      </div>
    </section>
  );
}
