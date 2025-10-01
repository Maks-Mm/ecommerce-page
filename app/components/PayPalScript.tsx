// app/components/PayPalScript.tsx
"use client";

import Script from "next/script";

export default function PayPalScript() {
  return (
    <Script
      src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=EUR&intent=capture&components=buttons`}
      strategy="afterInteractive"
      onLoad={() => console.log("✅ PayPal SDK script loaded")}
      onError={(e) => console.error("❌ PayPal SDK failed to load", e)}
    />
  );
}
