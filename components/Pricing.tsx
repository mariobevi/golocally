export default function Pricing() {
  const tiers = [
    { name: 'Free', price: '€0', note: 'Discover with limited access', btnBg: '#e5e7eb', btnText: '#111827' },
    { name: 'Weekly', price: '€4.99', note: 'Unlimited plans & chat', btnBg: 'var(--brand-deep)', btnText: '#fff' },
  ];
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center" style={{ color:'var(--brand-deep)' }}>
          Pricing
        </h2>
        <p className="text-center text-gray-600 mt-2">Simple pricing for extraordinary experiences</p>
        <div className="mt-12 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {tiers.map((t) => (
            <div key={t.name} className="relative rounded-2xl border p-6 bg-white">
              <h3 className="text-lg font-bold" style={{ color:'var(--brand-deep)' }}>{t.name}</h3>
              <div className="text-3xl font-extrabold mt-2" style={{ color:'var(--brand-deep)' }}>{t.price}</div>
              <div className="text-xs text-gray-600 mt-1">{t.note}</div>
              <a href="#download" className="mt-5 inline-flex justify-center w-full rounded-xl px-4 py-2"
                 style={{ background:t.btnBg, color:t.btnText }}>
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
