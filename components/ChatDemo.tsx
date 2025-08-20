'use client';
import { useMemo, useState } from 'react';

export default function ChatDemo() {
  const [mood, setMood] = useState<'chill'|'romantic'|'adventurous'>('chill');

  const plan = useMemo(() => ({
    chill: {
      a: 'Hi! I’m GoLocally. What’s your mood today?',
      b: 'Chill & hungry',
      c: 'Sunlit brunch patio 10 mins away. Want directions?'
    },
    romantic: {
      a: 'What kind of night are you dreaming of?',
      b: 'Romantic walk & wine',
      c: 'Golden-hour river stroll, then a natural-wine bar locals love. Book a table?'
    },
    adventurous: {
      a: 'How far do you want to go?',
      b: 'Outside the city',
      c: 'Skyline trail 40 min away. Sunset bus at 18:10 — shall I pin the route?'
    }
  }[mood]), [mood]);

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: 'var(--brand-deep)' }}>
      <div className="aspect-[16/10] bg-white">
        <div className="h-full w-full p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <button onClick={() => setMood('chill')} className={`text-xs px-3 py-1 rounded-full border ${mood==='chill'?'bg-[var(--brand-lime)] text-[var(--brand-deep)]':'bg-white'}`}>Chill</button>
            <button onClick={() => setMood('romantic')} className={`text-xs px-3 py-1 rounded-full border ${mood==='romantic'?'bg-[var(--brand-lime)] text-[var(--brand-deep)]':'bg-white'}`}>Romantic</button>
            <button onClick={() => setMood('adventurous')} className={`text-xs px-3 py-1 rounded-full border ${mood==='adventurous'?'bg-[var(--brand-lime)] text-[var(--brand-deep)]':'bg-white'}`}>Adventurous</button>
          </div>
          <div className="flex-1 rounded-2xl border bg-white p-4 flex flex-col gap-2">
            <div className="self-start max-w-[85%] rounded-2xl p-3 text-sm bg-[#f5f7ff] border" style={{ borderColor: 'var(--brand-sky)' }}>{plan.a}</div>
            <div className="self-end max-w-[85%] rounded-2xl p-3 text-sm border bg-white">{plan.b}</div>
            <div className="self-start max-w-[85%] rounded-2xl p-3 text-sm" style={{ background: 'var(--brand-lime)', color: 'var(--brand-deep)' }}>{plan.c}</div>
            <div className="self-end max-w-[85%] rounded-2xl p-3 text-sm border bg-white">Yes, please →</div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-3xl" />
    </div>
  );
}
