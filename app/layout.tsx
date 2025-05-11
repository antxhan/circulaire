import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Circulaire",
  description: "The #1 Realtime Pricing Insights Platform",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${leagueSpartan.variable} font-body`}
    >
      <body className="antialiased ">{children}</body>
    </html>
  );
}
