import React from 'react';
import { Camera, Shield, Clock, Star } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'On‑Location Field Shoots',
    desc: 'Remote expeditions for wildlife, habitats and conservation stories. Scouting, permits and safety briefings included.',
  },
  {
    icon: Shield,
    title: 'Ethical & Safe Practice',
    desc: 'Species‑first approach: no baiting, disturbance or flash around sensitive fauna. Compliance with local regulations.',
  },
  {
    icon: Clock,
    title: 'Fast Turnarounds',
    desc: 'Efficient ingest, culling and color workflows deliver selects within 72 hours; full galleries within agreed timelines.',
  },
  {
    icon: Star,
    title: 'Premium Post‑Production',
    desc: 'RAW processing, calibrated color, retouching, and consistent look tailored to your brand or publication style.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">We produce field‑ready coverage and crafted edits for conservation campaigns, eco‑tourism brands and editorial features.</p>
          </div>
          <a href="#contact" className="inline-flex w-max px-4 py-2 rounded-md border border-white/20 hover:border-white/40 text-sm">Request availability</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-slate-900/40 p-6">
              <div className="h-10 w-10 rounded-lg bg-teal-500/15 text-teal-300 flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-slate-900/40">
            <h4 className="font-medium">Deliverables</h4>
            <ul className="mt-3 text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li>Curated gallery of high‑res JPEGs</li>
              <li>Optional RAW files for archives</li>
              <li>Short social cuts (vertical)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-slate-900/40">
            <h4 className="font-medium">Logistics</h4>
            <ul className="mt-3 text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li>Permits and local fixers where needed</li>
              <li>Insurance and risk assessments</li>
              <li>Backup strategy: dual cards + offsite</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-slate-900/40">
            <h4 className="font-medium">Licensing</h4>
            <ul className="mt-3 text-sm text-slate-300 space-y-2 list-disc pl-5">
              <li>Clear usage terms (editorial/commercial)</li>
              <li>Region and term based options</li>
              <li>Extended buyouts on request</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
