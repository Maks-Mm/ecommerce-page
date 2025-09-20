// app/page.tsx
import ClientHelper from './components/ClientHelper';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <ClientHelper />
      {/* Other homepage sections */}
    </>
  );
}