import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const mundial = localFont({
  src: "../fonts/mundial-regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-mundial",
});

export const metadata: Metadata = {
  title: "Triz Agency",
  description: "Posicionamos sua empresa no digital com estratégia e criatividade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${mundial.variable} antialiased overflow-x-hidden scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
