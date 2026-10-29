import { Benefits } from "@/components/Benefits";
import { CTAForm } from "@/components/CTAForm";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Urgency } from "@/components/Urgency";
import { SHOW_URGENCY, URGENCY_TEXT } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Benefits />
        <Process />
        {SHOW_URGENCY && URGENCY_TEXT ? <Urgency text={URGENCY_TEXT} /> : null}
        <CTAForm />
      </main>
    </>
  );
}
