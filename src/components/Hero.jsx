import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[88vh] md:h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex items-center">
        <div className="max-w-2xl">
          <p className="text-teal-300/90 text-sm font-medium tracking-wide uppercase">Wildlife Photography as a Service</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">Premium, conservation‑grade imagery for brands, publishers and NGOs</h1>
          <p className="mt-5 text-slate-200/90 max-w-xl">From remote field expeditions to editorial assignments, we deliver ethical, high‑impact visuals—shot, edited and licensed end‑to‑end.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#pricing" className="px-6 py-3 rounded-md bg-teal-500 text-slate-950 font-medium hover:bg-teal-400 transition">See Packages</a>
            <a href="#portfolio" className="px-6 py-3 rounded-md border border-white/20 hover:border-white/40 transition">View Portfolio</a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-300">
            <li>Permits & logistics handled</li>
            <li>RAW + color‑graded delivery</li>
            <li>Usage licensing clarity</li>
            <li>Global travel ready</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
