'use client';
import { motion } from 'framer-motion';
import { Download, Smartphone, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* brand blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 w-[720px] h-[720px] rounded-full blur-3xl opacity-40" style={{ background: 'var(--brand-navy)' }} />
        <div className="absolute -bottom-40 -right-24 w-[760px] h-[760px] rounded-full blur-3xl opacity-40" style={{ background: 'var(--brand-burgundy)' }} />
        <div className="absolute top-1/3 right-1/3 w-[420px] h-[420px] rounded-full blur-3xl opacity-40" style={{ background: 'var(--brand-deep)' }} />
      </div>

      <div className="container grid lg:grid-cols-12 gap-10 items-center py-24 sm:py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7">
          <h1 className="font-extrabold tracking-tight text-4xl sm:text-6xl leading-tight" style={{ color:'var(--brand-deep)' }}>
            See the city like a <span style={{ color:'var(--brand-lime)' }}>local</span>.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl">
            Mood-aware plans, chat-first guidance, and three distinct AI characters — <b>GoLocally</b>, <b>GoCulture</b>, <b>GoFoodie</b> — curating authentic places beyond the obvious.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3" id="download">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-white shadow-glow" style={{ background:'var(--brand-sky)' }}>
              <Download className="w-4 h-4" /> App Store
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 border" style={{ borderColor:'var(--brand-deep)', color:'var(--brand-deep)' }}>
              <Smartphone className="w-4 h-4" /> Google Play
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 max-w-xl gap-6">
            <div className="flex items-center gap-2"><ShieldCheck className="text-green-600" /><span className="text-sm text-gray-700">Privacy-first</span></div>
            <div className="flex items-center gap-2"><Sparkles className="text-yellow-500" /><span className="text-sm text-gray-700">Local-only gems</span></div>
            <div className="flex items-center gap-2"><MapPin className="text-rose-500" /><span className="text-sm text-gray-700">Beat tourist traps</span></div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="lg:col-span-5">
          <div className="rounded-2xl border p-6 bg-gray-50 shadow-sm text-center">
            <p className="text-sm text-gray-600">“Not a map. A mirror.”</p>
            <p className="text-lg font-semibold mt-2" style={{ color:'var(--brand-deep)' }}>Travel slower. Feel deeper.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
