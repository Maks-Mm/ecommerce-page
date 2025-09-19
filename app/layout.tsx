// app/layout.tsx// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { FooterR254 } from "./components/Footer";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.NODE_ENV === "production";
  
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        {isProduction && (
          <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5404208486949480`}
            crossOrigin="anonymous"
            onError={(e) => console.error("AdSense script failed to load", e)}
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FooterR254 />
      </body>
    </html>
  );
}
