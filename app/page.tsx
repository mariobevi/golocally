'use client';

import { motion } from 'framer-motion';
import { Download, MapPin, Sparkles, Users, ShieldCheck } from 'lucide-react';

/* ------------------------------- Page ------------------------------- */
export default function Page() {
  return (
    <>
      <Hero />
      <Characters />
      <Features />
      <Pricing />
      <Reviews />
      <Footer />
    </>
  );
}

/* ------------------------------- Hero ------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container grid lg:grid-cols-12 gap-10 items-center py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-6xl leading-tight"
              style={{ color: 'var(--brand-deep)' }}>
            See the city like a <span style={{ color: 'var(--brand-lime)' }}>local</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl">
            Mood-aware plans, chat-first guidance, and three distinct AI characters —
            <b> GoLocally</b>, <b> GoCulture</b>, and <b> GoFoodie</b> — curating authentic places
            beyond the obvious.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-white shadow-glow"
               style={{ background: 'var(--brand-sky)' }}>
              <Download className="w-4 h-4"/> App Store
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 border"
               style={{ borderColor: 'var(--brand-deep)', color: 'var(--brand-deep)' }}>
              <Download className="w-4 h-4"/> Google Play
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl border p-6 bg-gray-50 shadow-sm text-center">
            <p className="text-sm text-gray-600">“Not a map. A mirror.”</p>
            <p className="text-lg font-semibold mt-2" style={{ color: 'var(--brand-deep)' }}>
              Travel slower. Feel deeper.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------ Characters Section ------------------------ */
function Characters() {
  const chars = [
    {
      key: 'golocally',
      name: 'GoLocally',
      color: 'var(--brand-deep)',
      desc: 'Balanced, local-first companion. Blends food, culture, nightlife, and hidden gems.'
    },
    {
      key: 'goculture',
      name: 'GoCulture',
      color: 'var(--brand-navy)',
      desc: 'Museums, history, and artistic soul. From world-class icons to hidden ateliers.'
    },
    {
      key: 'gofoodie',
      name: 'GoFoodie',
      color: 'var(--brand-red)',
      desc: 'Taste-led discovery. Authentic cafés, markets, bodegas, and bars locals swear by.'
    },
  ];
  return (
    <section id="characters" className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center"
            style={{ color: 'var(--brand-deep)' }}>
          Meet the Characters
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Three voices. One city — seen like a local.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {chars.map((c) => (
            <div key={c.key} className="rounded-2xl border p-6 bg-white hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl mb-3" style={{ background: c.color }} />
              <h3 className="text-xl font-bold" style={{ color: 'var(--brand-deep)' }}>{c.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Features ---------------------------- */
function Features() {
  const feats = [
    { title: 'Mood-aware plans', desc: 'Plans adapt to your vibe, time, and energy.', icon: Sparkles },
    { title: 'AI characters', desc: 'Each with a unique voice and style.', icon: Users },
    { title: 'Skip tourist traps', desc: 'Local-only gems with insider timing.', icon: MapPin },
    { title: 'Privacy-first', desc: 'Minimal tracking, you control what’s shared.', icon: ShieldCheck },
  ];
  return (
    <section id="features" className="py-24">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center"
            style={{ color: 'var(--brand-deep)' }}>
          Why Go Locally?
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {feats.map((f) => (
            <div key={f.title} className="rounded-2xl border p-6 bg-white shadow-sm">
              <f.icon className="w-6 h-6 mb-4" style={{ color: 'var(--brand-sky)' }} />
              <h3 className="font-semibold" style={{ color: 'var(--brand-deep)' }}>{f.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Pricing ---------------------------- */
function Pricing() {
  const tiers = [
    { name: 'Free', price: '€0', desc: 'Explore with limited daily recommendations.' },
    { name: 'Premium', price: '€4.99 / week', desc: 'Unlimited plans, chat, and bookings.' },
  ];
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--brand-deep)' }}>
          Pricing
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border p-8 bg-white shadow-sm">
              <h3 className="text-xl font-bold" style={{ color: 'var(--brand-deep)' }}>{t.name}</h3>
              <p className="mt-2 text-3xl font-extrabold" style={{ color: 'var(--brand-sky)' }}>{t.price}</p>
              <p className="mt-2 text-gray-600">{t.desc}</p>
              <a href="#download" className="mt-6 inline-block rounded-xl px-5 py-2 text-white"
                 style={{ background: 'var(--brand-deep)' }}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Reviews ---------------------------- */
function Reviews() {
  const items = [
    { name: 'Anna, 🇮🇹 Rome', text: 'Finally felt like I belonged in the city. GoCulture made the Vatican stress-free.' },
    { name: 'James, 🇬🇧 London', text: 'Booked cafés and gigs in one chat. GoFoodie = my new best friend.' },
    { name: 'Lucía, 🇪🇸 Madrid', text: 'GoLocally showed me spots even my local friends didn’t know.' },
  ];
  return (
    <section id="testimonials" className="py-24">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center"
            style={{ color: 'var(--brand-deep)' }}>
          What people say
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((r) => (
            <div key={r.name} className="rounded-2xl border p-6 bg-white shadow-sm">
              <p className="text-gray-700">“{r.text}”</p>
              <p className="mt-3 text-sm font-semibold text-gray-600">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Footer ---------------------------- */
function Footer() {
  return (
    <footer className="py-12 border-t bg-white text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} Go Locally — The most personal way to explore the world.</p>
      <p className="mt-2">Not a map. A mirror.</p>
    </footer>
  );
}
