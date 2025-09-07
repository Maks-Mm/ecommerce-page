//app/layout.tsx

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Hero from "./components/Hero";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {/* <Hero /> */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}