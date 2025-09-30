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
    }, 100);

    return () => clearInterval(check);
  }, []);

  useEffect(() => {
    if (!loaded || !window.paypal) return;

    window.paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{ amount: { value: "10.00" } }],
        });
      },
      onApprove: async (data: any, actions: any) => {
        return actions.order.capture();
      },
    }).render("#paypal-button-container");
  }, [loaded]);

  return <div id="paypal-button-container" />;
}
