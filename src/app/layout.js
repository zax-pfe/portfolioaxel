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
  title: "Axel Puech - Web Developer & AI Enthusiast | Portfolio",
  description:
    "Explore the portfolio of Axel Puech — showcasing projects in web development, artificial intelligence, and creative design.",

  keywords: [
    "Axel Puech",
    "Web Developer",
    "AI Projects",
    "Portfolio",
    "Frontend Development",
    "Fullstack Developer",
    "Creative Design",
  ],
  authors: [{ name: "Axel Puech" }],

  openGraph: {
    title: "Axel Puech - Web Developer & AI Enthusiast | Portfolio",
    description:
      "Explore the portfolio of Axel Puech — showcasing projects in web development, artificial intelligence, and creative design.",
    url: "https://www.axelpuech.com",
    siteName: "Axel Puech Portfolio",

    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/assets/icon/favicon.png",
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
