import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ThankYouContent } from "@/components/ThankYouContent";

export const metadata: Metadata = {
  title: "Thank You | Abhinav Shrestha",
  description: "Your free AI marketing consultation request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main>
        <ThankYouContent />
      </main>
    </>
  );
}
