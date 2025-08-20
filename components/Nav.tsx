'use client';
import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const link = 'text-sm font-semibold text-gray-700 hover:text-black';

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'bg-white/80 backdrop-blur shadow-sm' : ''}`}>
      <div className="container h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl" style={{ background: 'var(--brand-deep)' }} />
          <span className="font-extrabold tracking-tight" style={{ color: 'var(--brand-deep)' }}>Go Locally</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#characters" className={link}>Characters</a>
          <a href="#live-demo" className={link}>Demo</a>
          <a href="#features" className={link}>Features</a>
          <a href="#pricing" className={link}>Pricing</a>
          <a href="#reviews" className={link}>Reviews</a>
          <a href="#download" className="rounded-xl px-4 py-2 text-white shadow-glow" style={{ background:'var(--brand-sky)' }}>
            <span className="inline-flex items-center gap-2">
              <Download className="w-4 h-4" /> Download
            </span>
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24">
            {open ? <path d="M6 18L18 6M6 6l12 12" stroke="currentColor"/> : <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#characters" onClick={() => setOpen(false)}>Characters</a>
            <a href="#live-demo" onClick={() => setOpen(false)}>Demo</a>
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
            <a href="#download" className="rounded-xl px-4 py-2 text-center text-white" style={{ background:'var(--brand-sky)' }}>
              Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
