'use client';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Characters from '@/components/Characters';
import LiveDemo from '@/components/LiveDemo';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Hero />
        <TrustBar />
        <Characters />
        <LiveDemo />
        <Features />
        <Pricing />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
