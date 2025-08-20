import { HeartHandshake } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { k: 'fast', t: 'Fast & lightweight' },
    { k: 'private', t: 'Privacy-first' },
    { k: 'local', t: 'Local-only insights' },
    { k: 'book', t: 'One-tap bookings' },
  ];
  return (
    <section className="py-6 border-y bg-white">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
        {items.map(i => (
          <div key={i.k} className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4" /> {i.t}
          </div>
        ))}
      </div>
    </section>
  );
}
