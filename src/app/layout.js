import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar/Navbar";
import Footer from "@/components/Common/Footer/Footer";
import ScrollToTop from "@/components/Common/ScrollToTop";
import Preloader from "@/components/Common/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexzone | Premium Office Equipment & Networking Solutions",
  description: "Your trusted partner for printer sales, maintenance, networking solutions, and office equipment in Dubai. Innovating productivity with top-tier brands like Xerox, Canon, and HP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <meta name="apple-mobile-web-app-title" content="Nexzone" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
