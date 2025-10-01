//app/components/PayPalButton.tsx
"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function PayPalButton() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const check = setInterval(() => {
      if (window.paypal) {
        setLoaded(true);
        clearInterval(check);
      }
    }, 200);

    return () => clearInterval(check);
  }, []);

  useEffect(() => {
    if (!loaded || !window.paypal) return;

    try {
      window.paypal
        .Buttons({
          style: { layout: "vertical", color: "gold", shape: "rect", label: "paypal" },
          createOrder: (_: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: "10.00" } }],
            });
          },
          onApprove: async (_: any, actions: any) => {
            const details = await actions.order.capture();
            console.log("✅ Order approved:", details);
          },
          onError: (err: any) => {
            console.error("❌ PayPal Button Error:", err);
          },
        })
        .render("#paypal-button-container");
    } catch (err) {
      console.error("❌ PayPal init failed:", err);
    }
  }, [loaded]);

  return (
    <div>
      <h3>Pay with PayPal</h3>
      <div id="paypal-button-container" style={{ minHeight: "50px" }}></div>
    </div>
  );
}
