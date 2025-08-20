import Link from 'next/link';

// Minimal blog index
export default function BlogPage() {
  const posts = [
    {
      slug: 'best-local-cafes-madrid',
      title: 'Best Local Cafés in Madrid',
      excerpt: 'Skip tourist traps — here are the cafés where locals actually go.',
      date: '2025-08-01'
    },
    {
      slug: 'hidden-rome-at-night',
      title: 'Hidden Rome at Night',
      excerpt: 'Discover how the Eternal City transforms after dark.',
      date: '2025-08-10'
    },
    {
      slug: 'weekend-escapes-london',
      title: 'Weekend Escapes from London',
      excerpt: 'Quick trips outside the city that feel worlds away.',
      date: '2025-08-15'
    }
  ];

  return (
    <section className="container py-24">
      <h1 className="text-4xl font-extrabold mb-8" style={{ color: 'var(--brand-deep)' }}>
        Travel Insights
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.slug} className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--brand-deep)' }}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-sm text-gray-600 mb-3">{p.excerpt}</p>
            <time className="text-xs text-gray-400">{p.date}</time>
          </article>
        ))}
      </div>
    </section>
  );
}
