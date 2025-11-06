import { Share2, Shapes, Workflow, Shield } from 'lucide-react';

const features = [
  {
    icon: Shapes,
    title: 'Schema Modeling',
    desc: 'Draw nodes and edges, define properties, and validate constraints with visual feedback.',
  },
  {
    icon: Workflow,
    title: 'Query Playground',
    desc: 'Prototype Cypher/Gremlin-like queries and preview results with instant diagrams.',
  },
  {
    icon: Share2,
    title: 'Collaboration',
    desc: 'Share editable canvases, comment on changes, and time-travel through versions.',
  },
  {
    icon: Shield,
    title: 'Education Mode',
    desc: 'Interactive lessons explain graph theory concepts through animated examples.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to design graph databases</h2>
          <p className="mt-3 text-white/70">A focused toolkit for modeling, visualizing, and teaching graphs.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-cyan-400 to-emerald-500 text-black">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
