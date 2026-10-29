import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-border/70 bg-white" aria-label="Brand">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-4 sm:py-5">
        <Image
          src="/logo.png"
          width={944}
          height={264}
          priority
          alt="Abhinav Shrestha"
          className="h-auto w-[150px] object-contain sm:w-[190px]"
        />
      </div>
    </header>
  );
}
