import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-24 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Real-time Graph Database Designer
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Design, visualize, and teach graph data like a pro
            </h1>
            <p className="mt-4 text-white/80">
              Build interactive schemas, relationships, and queries in an immersive 3D workspace. Perfect for technology teams, educators, and anyone exploring the future of connected data.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#editor" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-emerald-500 px-5 py-3 text-sm font-medium text-black shadow hover:opacity-90 transition">
                Launch Designer
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
