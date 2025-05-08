import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Circulaire",
  description: "The #1 Realtime Pricing Insights Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
