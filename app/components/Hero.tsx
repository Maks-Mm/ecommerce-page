// app/components/Hero.tsx
import React from 'react';
import DynamicAd from './DynamicAd';

function Hero() {
    return (
        <div className="p-8 bg-white">
            <div className="text-left pl-12">
  {/* Hero text with colored top word */}
  <h1 className="text-5xl font-extrabold">
    <span className="block" style={{ color: '#ffb400' }}>Perfektionieren</span>
    <span className="block">Sie den Online-Auftritt</span>
    <span className="block">Ihres Unternehmens</span>
  </h1>
</div>




            {/* Top Hero Ad */}
            <DynamicAd section="hero" theme="cars" size="large" />

            {/* Middle content */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold">Featured Products</h2>
                <p className="mt-2 text-gray-700">Check out our latest offers and collections.</p>
            </section>

            {/* Middle Ad */}
            <DynamicAd section="middle" theme="coaching" size="medium" />

            {/* Bottom content */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold">More Deals</h2>
                <p className="mt-2 text-gray-700">Don’t miss our special discounts.</p>
            </section>

            {/* Footer Ad */}
            <DynamicAd section="footer" theme="education" size="large" />
        </div>
    );
}

export default Hero;
