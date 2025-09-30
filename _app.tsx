// app/_app.tsx
import Script from "next/script";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: any) {
    return (
        <>
            <Script
                src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=EUR`}
                strategy="afterInteractive"
            />

            <Component {...pageProps} />
        </>
    );
}
