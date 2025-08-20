export default function Characters() {
  const chars = [
    { key: 'golocally', name: 'GoLocally', color: 'var(--brand-deep)', tagline: 'Balanced, local-first companion.', bullets: ['Blends food, culture, nature', 'Time-aware & mood-aware', 'Great for first-timers'] },
    { key: 'goculture',  name: 'GoCulture',  color: 'var(--brand-navy)', tagline: 'Museums, stories, and soul.',    bullets: ['Crowd-avoiding windows', 'Indie galleries & talks', 'Context that sticks'] },
    { key: 'gofoodie',   name: 'GoFoodie',   color: 'var(--brand-red)',  tagline: 'Taste-led routes & bars.',       bullets: ['Zero tourist traps', 'Natural wine & bodegas', 'Book in one tap'] },
  ];
  return (
    <section id="characters" className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center" style={{ color:'var(--brand-deep)' }}>
          Meet the characters
        </h2>
        <p className="text-center text-gray-600 mt-2">Three voices. One city—seen like a local.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {chars.map((c) => (
            <div key={c.key} className="rounded-2xl border p-6 bg-white hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl" style={{ background: c.color, opacity: 0.9 }} />
              <h3 className="text-xl font-bold mt-4" style={{ color:'var(--brand-deep)' }}>{c.name}</h3>
              <p className="text-sm text-gray-600">{c.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
                {c.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
