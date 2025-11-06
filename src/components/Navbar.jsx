import { useState } from 'react';
import { Database } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-emerald-500 text-black">
              <Database className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-white">GraphCraft</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#editor" className="hover:text-white transition">Designer</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#docs" className="hover:text-white transition">Docs</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-white/80 hover:text-white transition">Sign in</a>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-emerald-500 px-4 py-2 text-sm font-medium text-black shadow-sm hover:opacity-90 transition">Get Started</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white/80 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-white/10 text-sm text-white/80">
            <div className="flex flex-col gap-3">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#editor" className="hover:text-white transition">Designer</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#docs" className="hover:text-white transition">Docs</a>
              <div className="pt-2 flex items-center gap-3">
                <a href="#" className="hover:text-white transition">Sign in</a>
                <a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-emerald-500 px-3 py-2 text-sm font-medium text-black shadow-sm hover:opacity-90 transition">Get Started</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
