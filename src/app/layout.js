import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mehedi | Frontend Developer",
  description: "Portfolio of Mehedi - Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Blobs */}
          <div className="bg-blob top-0 left-0 animate-pulse"></div>
          <div className="bg-blob bottom-0 right-0 animate-pulse"></div>

          {/* Navbar */}
          <Navbar></Navbar>

          {/* Main Content */}
          <main className="pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
