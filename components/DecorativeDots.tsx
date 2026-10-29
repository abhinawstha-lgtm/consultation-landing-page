type DecorativeDotsProps = {
  className?: string;
};

export function DecorativeDots({ className = "" }: DecorativeDotsProps) {
  return <div className={`decorative-dots pointer-events-none absolute -z-10 ${className}`} aria-hidden="true" />;
}
