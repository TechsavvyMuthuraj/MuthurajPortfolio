import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import MouseFollower from "@/components/ui/mouse-follower";
import Footer from "@/components/ui/footer";
import Script from "next/script";
import LenisSmoothScroll from "@/components/ui/lenis-smooth-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muthuraj C ",
  description:
    "Java Backend Developer with strong knowledge in SQL, OOP, and scalable application development. Passionate Vibe Coder focused on building efficient and structured software solutions.",
  keywords:
    "Muthuraj C, Java Developer, Backend Developer, SQL, Spring Boot, OOP, REST API, Portfolio, Vibe Coder",
  icons: {
    icon: "/public/favicon.ico",
  },
  authors: [{ name: "Muthuraj C" }],
  creator: "Muthuraj C",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com", // change when you deploy
    title: "Muthuraj C | Java Backend Developer",
    description:
      "Java Backend Developer specializing in scalable systems, clean architecture, and performance-driven development.",
    siteName: "Muthuraj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muthuraj C | Java Backend Developer",
    description:
      "Java Backend Developer focused on backend systems, SQL optimization, and scalable architecture.",
    creator: "@yourtwitterhandle", // optional (remove if not using Twitter)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/public/favicon.ico" />

        {/* ✅ Umami Analytics */}
        <Script
          defer
          src="https://analytics.adityavikram.dev/script.js"
          data-website-id="2cab5db9-c5ca-4020-944c-e6c7c00a6950"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased pb-16`}
      >

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MouseFollower />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
