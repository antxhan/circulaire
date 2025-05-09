import type { Metadata } from "next";
import Head from 'next/head';
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Navbar/Nav";
import Header from "./_components/Header/Header";

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
      className={`${inter.variable} ${leagueSpartan.variable} font-body`}
    >
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;700&display=swap" />
      </Head>
      <body className={`antialiased`}>
        <Header/>
        {children}
      </body>
      
    </html>
  );
}
