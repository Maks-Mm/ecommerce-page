// app/components/ClientImage.tsx
"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK_SRC =
  "https://i.ytimg.com/vi/_v3IxO84IUk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLBXVvvhQEIlQEs_i3Cqmd_DfJP7Ow";

export default function ClientImage({ src, alt, ...rest }: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <Image
      {...rest}
      src={error ? FALLBACK_SRC : src}
      alt={alt}
      onError={() => setError(true)} // ✅ fallback on broken images
    />
  );
}
