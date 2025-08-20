import { ArrowRight, Users } from 'lucide-react';
import ChatDemo from '@/components/ChatDemo';

export default function LiveDemo() {
  return (
    <section id="live-demo" className="py-24">
      <div className="container grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--brand-deep)' }}>Mood-aware chat</h2>
          <p className="text-gray-600 mt-2">Pick a mood—chill, romantic, or adventurous—and watch the plan adapt in real time. Ask for tweaks in chat; we re-route instantly.</p>
          <div className="mt-6 grid gap-2 text-sm">
            <div className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"/> Live demo</div>
            <div className="inline-flex items-center gap-2"><Users className="w-4 h-4 text-sky-600"/> Works solo or with friends</div>
          </div>
          <a href="#download" className="mt-8 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-white" style={{ background: 'var(--brand-deep)' }}>
            Get the app <ArrowRight className="w-4 h-4"/>
          </a>
        </div>
        <div className="lg:col-span-7">
          <ChatDemo />
        </div>
      </div>
    </section>
  );
}
