import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.talentsprout.in"),

  title: {
    default: "Talent Sprout | Recruitment & Staffing Solutions in India",
    template: "%s | Talent Sprout",
  },

  description:
    "Talent Sprout is a leading recruitment and staffing company in India offering IT GCC hiring, BFSI recruitment, corporate staffing, and POSH training services to help businesses build high-performing teams.",

  keywords: [
    "Recruitment company in India",
    "Staffing services India",
    "IT GCC hiring",
    "BFSI recruitment services",
    "Corporate hiring solutions",
    "Talent acquisition company",
  ],

  icons: {
    icon: "/favicon1.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Talent Sprout | Recruitment & Staffing Solutions in India",
    description:
      "Professional recruitment, staffing, IT GCC hiring, BFSI recruitment, and corporate hiring solutions across India.",
    url: "https://www.talentsprout.in",
    siteName: "Talent Sprout",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Talent Sprout Recruitment & Staffing Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Talent Sprout | Recruitment & Staffing Solutions",
    description:
      "Helping businesses hire top talent through expert recruitment and staffing solutions across India.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.talentsprout.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}