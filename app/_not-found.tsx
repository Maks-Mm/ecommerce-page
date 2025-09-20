//app/_not-found.tsx
"use client";
import ClientImage from "./components/ClientImage";

export default function NotFound() {
  return (
    <div>
      <h1>Seite nicht gefunden</h1>
      <ClientImage src="https://tepeseo.com/wp-content/uploads/2019/05/404notfound-1024x683.png" alt="404" width={400} height={300} />
    </div>
  );
}
