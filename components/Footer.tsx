export default function Footer() {
  return (
    <footer className="py-12 border-t bg-white text-center text-sm text-gray-600">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg" style={{ background: 'var(--brand-deep)' }} />
          <span className="font-bold" style={{ color: 'var(--brand-deep)' }}>Go Locally</span>
          <span className="text-gray-400 text-sm">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex flex-wrap gap-5">
          <a href="#characters" className="hover:underline">Characters</a>
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#reviews" className="hover:underline">Reviews</a>
        </nav>
      </div>
      <p className="mt-6">Not a map. A mirror.</p>
    </footer>
  );
}
