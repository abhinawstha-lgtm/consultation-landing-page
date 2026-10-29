import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Free AI Marketing Consultation | Abhinav Shrestha",
  description:
    "Book a free 30–40 minute one-to-one AI marketing consultation and get a customized digital marketing plan in PDF format for your business.",
  openGraph: {
    title: "Free AI Marketing Consultation | Abhinav Shrestha",
    description:
      "Book a free 30–40 minute one-to-one AI marketing consultation and get a customized digital marketing plan in PDF format for your business.",
    url: siteUrl,
    siteName: "Abhinav Shrestha",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Abhinav Shrestha — Free AI Marketing Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Consultation | Abhinav Shrestha",
    description:
      "Book a free 30–40 minute one-to-one AI marketing consultation and get a customized digital marketing plan in PDF format for your business.",
    images: ["/og.png"],
  },
  // TODO: Add a favicon cropped from the blue “A” icon in the logo.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00308C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} bg-background text-heading antialiased`}>
        {children}
      </body>
    </html>
  );
}
