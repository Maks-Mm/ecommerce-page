"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function PaypalTest() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.paypal && ref.current) {
        console.log("✅ window.paypal gefunden:", window.paypal);
        window.paypal.Buttons({
          createOrder: (_: any, actions: any) =>
            actions.order.create({
              purchase_units: [{ amount: { value: "5.00" } }],
            }),
          onApprove: async (_: any, actions: any) => {
            const details = await actions.order.capture();
            alert(`Zahlung erfolgreich: ${details?.id}`);
          },
        }).render(ref.current);

        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>PayPal Test</h1>
      <div ref={ref} style={{ minHeight: "50px" }} />
    </div>
  );
}
