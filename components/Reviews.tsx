export default function Reviews() {
  const items = [
    { text: 'Felt like traveling with a local friend.', author: 'Sarah M.' },
    { text: 'Found places no guidebook listed. Perfect vibe.', author: 'Marcus L.' },
    { text: 'Mood‑aware plans made each day smooth.', author: 'Elena R.' },
  ];
  return (
    <section id="reviews" className="py-24">
      <div className="container max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center" style={{ color:'var(--brand-deep)' }}>
          What travelers say
        </h2>
        <div className="mt-10 grid gap-6">
          {items.map((r, i) => (
            <figure key={i} className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="text-yellow-400 mb-3">★★★★★</div>
              <blockquote className="text-xl text-gray-800">“{r.text}”</blockquote>
              <figcaption className="mt-2 text-sm font-semibold" style={{ color:'var(--brand-deep)' }}>— {r.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
