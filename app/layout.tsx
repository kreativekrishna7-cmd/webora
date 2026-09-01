import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "./lib/site";

export const metadata: Metadata = {
  title: {
    default: "Webora | Web Design & Development Solutions",
    template: "%s | Webora",
  },
  description: siteConfig.description,
  applicationName: "Webora",
  generator: "Next.js",
  keywords: [
    "web design",
    "website development",
    "web design India",
    "business website",
    "e-commerce website",
    "landing page design",
    "website redesign",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Webora",
    title: "Webora | Web Design & Development Solutions",
    description: siteConfig.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Webora | Web Design & Development Solutions",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Webora",
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: "IN",
  serviceType: [
    "Website Design",
    "Website Development",
    "E-Commerce Solutions",
    "Landing Pages",
    "Website Redesign",
    "Website Maintenance & Support",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
