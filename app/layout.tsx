// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { FooterR254 } from "./components/Footer";
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Google / AdSense script (load once globally) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5404208486949480"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Optional: small init to enable page-level ads (uncomment if you need it) */}
        {/* <Script
          id="ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-5404208486949480",
                enable_page_level_ads: true
              });
            `,
          }}
        /> */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <FooterR254 />
      </body>
    </html>
  );
}
