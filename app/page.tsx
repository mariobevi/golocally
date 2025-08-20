'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Download,
  MessageSquare,
  Sparkles,
  MapPin,
  Zap,
  Users,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';
import Link from 'next/link';
import { ChatDemo } from '@/components/interactive/ChatDemo';
import { Features, Cities, Pricing, Reviews, BlogPreview, FAQ, Newsletter } from '@/components/Sections';
import { Tech } from '@/components/sections/Tech';
import { StickyCTA } from '@/components/sections/StickyCTA';
import Nav from '@/components/Nav';

export default function Page() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <HeroPro />
        <HowItWorks />
        <CharacterSpotlight />
        <TrustBar />
        <LiveDemo />
        <Features />
        <Tech />
        <Cities />
        <Pricing />
        <Reviews />
        <BlogPreview />
        <FAQ />
        <Newsletter />
        <StickyCTA />
      </main>
      <Footer />
    </>
  );
}

/* ------------------------------- HeroPro ------------------------------- */
function HeroPro() {
  return (
    <section className="relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -top-32 -left-24 w-[720px] h-[720px] rounded-full blur-3xl opacity-40"
          style={{ background: 'var(--brand-navy)' }}
        />
        <div
          className="absolute -bottom-40 -right-24 w-[760px] h-[760px] rounded-full blur-3xl opacity-40"
          style={{ background: 'var(--brand-burgundy)' }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
          style={{ background: 'var(--brand-deep)' }}
        />
      </div>

      <div className="container grid lg:grid-cols-12 gap-10 items-center py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 bg-black/5 dark:bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-black/10 dark:border-white/10 mb-6">
            <Brain className="w-4 h-4" style={{ color: 'var(--brand-lime)' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--brand-deep)' }}>
              AI-powered travel companion
            </span>
          </div>
          <h1
            className="font-extrabold tracking-tight text-4xl sm:text-6xl leading-tight"
            style={{ color: 'var(--brand-deep)' }}
          >
            See the city like a <span style={{ color: 'var(--brand-lime)' }}>local</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-200 max-w-2xl">
            Mood-aware plans, chat-first guidance, and three distinct AI characters—<b>GoLocally</b>,{' '}
            <b>GoCulture</b>, and <b>GoFoodie</b>—curating authentic places beyond the obvious.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3" id="download">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-white shadow-glow"
              style={{ background: 'var(--brand-sky)' }}
            >
              <Download className="w-4 h-4" /> Download on App Store
            </a>
            <a
              href="#live-demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 border"
              style={{ borderColor: 'var(--brand-deep)', color: 'var(--brand-deep)' }}
            >
              <MessageSquare className="w-4 h-4" /> Try the chat demo
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 max-w-xl gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-600" />
              <span className="text-sm text-gray-700 dark:text-gray-200">Privacy-first</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-yellow-500" />
              <span className="text-sm text-gray-700 dark:text-gray-200">Local-only gems</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-rose-500" />
              <span className="text-sm text-gray-700 dark:text-gray-200">Beat tourist traps</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="lg:col-span-5"
        >
          {/* Mobile frame with ChatDemo */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: 'var(--brand-deep)' }}>
            <div className="aspect-[9/16] bg-white dark:bg-neutral-900">
              <ChatDemo />
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------- HowItWorks ---------------------------- */
function HowItWorks() {
  const steps = [
    { title: 'Set your mood', desc: 'Chill, romantic, or adventurous. Plans adapt to your energy and time.', icon: '💫' },
    { title: 'Chat & refine', desc: 'Ask follow-ups in plain language. The agent re-routes in seconds.', icon: '💬' },
    { title: 'Go live', desc: 'Pins, tickets, and tables in one tap. No tourist traps, just local flow.', icon: '📍' },
  ];
  return (
    <section id="how" className="py-20">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center" style={{ color: 'var(--brand-deep)' }}>
        How it works
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">Mood input → Chat guidance → Real plans</p>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border p-8 bg-white dark:bg-neutral-900 shadow-sm"
            >
              <div className="text-2xl">{s.icon}</div>
              <h3 className="text-xl font-bold mt-3" style={{ color: 'var(--brand-deep)' }}>{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ CharacterSpotlight ------------------------ */
function CharacterSpotlight() {
  const chars = [
    {
      key: 'golocally',
      name: 'GoLocally',
      color: 'var(--brand-deep)',
      tagline: 'Balanced, local-first companion.',
      bullets: ['Blends food, culture, nature', 'Time-aware & mood-aware', 'Great for first-timers'],
    },
    {
      key: 'goculture',
      name: 'GoCulture',
      color: 'var(--brand-navy)',
      tagline: 'Museums, stories, and soul.',
      bullets: ['Crowd-avoiding windows', 'Indie galleries & talks', 'Context that sticks'],
    },
    {
      key: 'gofoodie',
      name: 'GoFoodie',
      color: 'var(--brand-red)',
      tagline: 'Taste-led routes & bars.',
      bullets: ['Zero tourist traps', 'Natural wine & bodegas', 'Book in one tap'],
    },
  ];
  return (
    <section id="characters" className="py-24 bg-gray-50 dark:bg-neutral-950">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center" style={{ color: 'var(--brand-deep)' }}>
          Meet the characters
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-2">Three voices. One city—seen like a local.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {chars.map((c) => (
            <div key={c.key} className="rounded-2xl border p-6 bg-white dark:bg-neutral-900 hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl" style={{ background: c.color, opacity: 0.9 }} />
              <h3 className="text-xl font-bold mt-4" style={{ color: 'var(--brand-deep)' }}>{c.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{c.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
                {c.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- TrustBar ----------------------------- */
function TrustBar() {
  const items = [
    { k: 'fast', t: 'Fast & lightweight' },
    { k: 'private', t: 'Privacy-first' },
    { k: 'local', t: 'Local-only insights' },
    { k: 'book', t: 'One-tap bookings' },
  ];
  return (
    <section className="py-6 border-y bg-white dark:bg-neutral-900">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-300">
        {items.map((i) => (
          <div key={i.k} className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4" /> {i.t}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ LiveDemo ----------------------------- */
function LiveDemo() {
  return (
    <section id="live-demo" className="py-24">
      <div className="container grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--brand-deep)' }}>
            Mood-aware chat
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Pick a mood—chill, romantic, or adventurous—and watch the plan adapt in real time. Ask for tweaks in chat; we re-route instantly.
          </p>
          <div className="mt-6 grid gap-2 text-sm">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> Live demo
            </div>
            <div className="inline-flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" /> Time-aware suggestions
            </div>
            <div className="inline-flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-600" /> Works solo or with friends
            </div>
          </div>
          <a
            href="#download"
            className="mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-white"
            style={{ background: 'var(--brand-deep)' }}
          >
            Get the app <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: 'var(--brand-deep)' }}>
            <div className="aspect-[16/10] bg-white dark:bg-neutral-900">
              <ChatDemo />
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Footer ------------------------------- */
function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg" style={{ background: 'var(--brand-deep)' }} />
          <span className="font-bold" style={{ color: 'var(--brand-deep)' }}>
            Go Locally
          </span>
          <span className="text-gray-400 text-sm">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            About
          </a>
          <a href="#faq" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            FAQs
          </a>
          <a href="#blog" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Blog
          </a>
          <a href="#download" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Download
          </a>
        </nav>
      </div>
    </footer>
  );
}
