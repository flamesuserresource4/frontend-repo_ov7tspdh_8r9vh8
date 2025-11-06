export default function CTA() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start modeling in minutes</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Try the interactive designer free. Upgrade when you need unlimited canvases, team collaboration, and classroom features.
        </p>
        <div className="mt-8 inline-flex items-center gap-3">
          <a href="#editor" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-emerald-500 px-6 py-3 text-sm font-medium text-black shadow hover:opacity-90 transition">
            Get Started Free
          </a>
          <a href="#docs" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
            Read Docs
          </a>
        </div>
        <p className="mt-4 text-xs text-white/50">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
}
