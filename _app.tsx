// app/_app.tsx
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <Script
                src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=EUR&intent=capture&components=buttons`}
                strategy="afterInteractive"
                onLoad={() => {
                    console.log("PayPal Client ID:", process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);

                    console.log("window.paypal:", window.paypal);
                }}
                onError={(e) => console.error("❌ PayPal SDK failed to load", e)}
            />



            <Component {...pageProps} />
        </>
    );
}
//the version is not valid ,dalse we have needed just PayPalScript.tsx and PayPalButton.tsx