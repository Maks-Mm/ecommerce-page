// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { FooterR254 } from "./components/Footer";
import PayPalScript from "./components/PayPalScript";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Hier keine Event-Handler mehr */}
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <PayPalScript />
        <main className="flex-grow">{children}</main>
        <FooterR254 />
      </body>
    </html>
  );
}
