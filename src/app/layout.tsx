import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

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
    <html lang="pt-BR" className="bg-beige">
      <body
        className={`${mundial.variable} antialiased overflow-x-hidden scrollbar`}
      >
        {children}
      </body>
      <Script
        strategy="lazyOnload" 
        dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1050348320347233');
          fbq('track', 'PageView');
        `,
        }} 
      />
    </html>
  );
}
