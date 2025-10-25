import React from 'react';
import { CheckCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Essential',
    price: '$1,800',
    blurb: 'Half‑day local assignment. Ideal for press releases and short features.',
    features: [
      'Up to 4 hours on location',
      '30+ edited images (high‑res JPEG)',
      'Basic color + crop',
      'Standard editorial license (1 year, web + print)'
    ],
    cta: 'Book Essential',
  },
  {
    name: 'Professional',
    price: '$4,900',
    blurb: 'Full‑day field coverage with premium edit. Best for brand stories and campaigns.',
    features: [
      'Up to 10 hours on location',
      '80+ edited images + select RAWs',
      'Advanced retouching & calibrated color',
      'Commercial license (2 years, non‑exclusive)'
    ],
    highlighted: true,
    cta: 'Book Professional',
  },
  {
    name: 'Expedition',
    price: 'Custom',
    blurb: 'Multi‑day remote shoots with logistics, permits and fixers. Tailored to your brief.',
    features: [
      'Pre‑production, scouting and permits',
      'Daily selects within 24–48h',
      'Safety plan + insured operations',
      'Flexible licensing or full buyout'
    ],
    cta: 'Start a brief',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Transparent pricing, premium results</h2>
          <p className="mt-3 text-slate-300">Every package includes shot planning, on‑site safety, backups, and delivery via secure gallery. Travel outside local area quoted separately.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlighted ? 'border-teal-400/50 bg-slate-900/60' : 'border-white/10 bg-slate-900/40'} p-6 flex flex-col`}>
              {t.highlighted && (
                <span className="absolute -top-3 right-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-teal-500 text-slate-950 shadow">Most Popular</span>
              )}
              <div>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="mt-1 text-3xl font-bold tracking-tight">{t.price}</p>
                <p className="mt-2 text-sm text-slate-300">{t.blurb}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-teal-400 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#contact" className={`inline-flex w-full justify-center px-4 py-2 rounded-md font-medium transition ${t.highlighted ? 'bg-teal-500 text-slate-950 hover:bg-teal-400' : 'border border-white/20 hover:border-white/40'}`}>{t.cta}</a>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">VAT/taxes and travel not included. Detailed quote provided after brief.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
