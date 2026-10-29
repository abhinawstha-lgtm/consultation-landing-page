type UrgencyProps = {
  text: string;
};

export function Urgency({ text }: UrgencyProps) {
  return (
    <section className="bg-primary-tint px-5 py-8" aria-label="Important information">
      <p className="mx-auto max-w-3xl text-center font-bold leading-7 text-primary-dark">{text}</p>
    </section>
  );
}
