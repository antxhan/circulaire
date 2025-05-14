import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "./_sections/Header";
import Footer from "./_sections/Footer";
import { ThemeProvider } from "next-themes";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${inter.variable} ${leagueSpartan.variable} font-body 
        bg-neutral-100 text-black dark:bg-black dark:text-white !scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={`antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
