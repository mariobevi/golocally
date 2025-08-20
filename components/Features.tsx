import { MapPin, Users, ShieldCheck, Sparkles, Stars } from 'lucide-react';

export default function Features() {
  const items = [
    { title: 'Mood‑aware plans', desc: 'Plans adapt to your vibe, time, and energy.', icon: Sparkles, tint: 'var(--brand-red)' },
    { title: 'AI characters', desc: 'GoLocally, GoCulture, GoFoodie — each with a style.', icon: Users, tint: 'var(--brand-lime)' },
    { title: 'Skip tourist traps', desc: 'Local‑only gems with context and timing.', icon: MapPin, tint: 'var(--brand-burgundy)' },
    { title: 'Privacy‑first', desc: 'Minimal tracking, you control what’s shared.', icon: ShieldCheck, tint: 'var(--brand-deep)' },
    { title: 'One‑tap actions', desc: 'Book tables, tickets, and routes instantly.', icon: Stars, tint: 'var(--brand-sky)' },
  ];
  return (
    <section id="features" className="py-24">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center" style={{ color:'var(--brand-deep)' }}>
          Travel smarter, feel deeper
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border p-8 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background:'rgba(0,0,0,0.04)' }}>
                <i.icon className="w-7 h-7" style={{ color: i.tint }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color:'var(--brand-deep)' }}>{i.title}</h3>
              <p className="text-gray-600 mt-2">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
