import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://repeat-lank.web.app"),
  title: {
    default: "Repeat — Habit & Reminder App | Build Routines That Stick",
    template: "%s | Repeat",
  },
  description:
    "Minimalist habit and reminder app: schedule one-time or recurring reminders, track streaks, and build routines with smart notifications. Free and privacy-first.",
  applicationName: "Repeat",
  keywords: [
    "habit tracker",
    "reminder app",
    "routine builder",
    "task management",
    "productivity app",
    "streak tracking",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "https://repeat-lank.web.app/",
    siteName: "Repeat",
    title: "Repeat — Habit & Reminder App",
    description:
      "Schedule one-time or recurring reminders, track streaks, and build routines that stick. Minimalist, free, and privacy-first.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Repeat habit and reminder app" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Repeat — Habit & Reminder App",
    description:
      "Schedule reminders, track streaks, and build routines that stick. Minimalist and privacy-first.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Repeat',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'All modern web browsers',
    url: 'https://repeat-lank.web.app/',
    description:
      'Minimalist habit and reminder app: recurring reminders, streaks, and routines. Free and privacy-first.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: 'M Gilank Putra Ramadhan', url: 'https://lankdev.my.id' },
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-screen font-sans selection:bg-primary selection:text-canvas transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
