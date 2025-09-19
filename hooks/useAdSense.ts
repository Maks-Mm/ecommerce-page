// hooks/useAdSense.ts// hooks/useAdSense.ts
import { useEffect } from 'react';

export const useAdSense = (clientId: string, enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const loadAdSense = () => {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (err) {
        console.warn("adsbygoogle.push error:", err);
      }
    };

    if ((window as any).adsbygoogle) {
      loadAdSense();
    } else {
      const script = document.createElement('script');
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = loadAdSense;
      document.head.appendChild(script);
    }
  }, [clientId, enabled]);
};