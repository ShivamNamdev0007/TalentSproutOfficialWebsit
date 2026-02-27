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
  metadataBase: new URL("https://yourdomain.com"), // 🔥 replace with real domain

  title: {
    default: "Talent Spout",
    template: "%s | Talent Spout",
  },

  description:
    "Talent Spout is a modern talent discovery and hiring platform connecting skilled professionals with top companies.",

  keywords: [
    "Talent Spout",
    "Hiring Platform",
    "Job Portal",
    "Recruitment",
    "Talent Hiring",
  ],

  icons: {
    icon: "/favicon1.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Talent Spout",
    description:
      "Connecting top talent with leading companies worldwide.",
    url: "https://yourdomain.com",
    siteName: "Talent Spout",
    images: [
      {
        url: "/og-image.png", // put image inside public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Talent Spout",
    description:
      "Connecting top talent with leading companies worldwide.",
    images: ["/og-image.png"],
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