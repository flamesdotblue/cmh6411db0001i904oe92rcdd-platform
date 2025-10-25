import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-teal-300/30 selection:text-white">
      <header className="fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-white">WildLens Studio</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <a className="hover:text-white transition" href="#services">Services</a>
            <a className="hover:text-white transition" href="#portfolio">Portfolio</a>
            <a className="hover:text-white transition" href="#pricing">Pricing</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="md:inline-flex hidden px-4 py-2 rounded-md bg-teal-500 text-slate-950 font-medium hover:bg-teal-400 transition">Book a Shoot</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />

        <section id="contact" className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let’s capture the wild, together</h2>
              <p className="mt-4 text-slate-300">Tell us about your project: conservation campaigns, editorial features, eco-tourism branding, or private expeditions. We’ll tailor a plan, permits and logistics included.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:hello@wildlens.studio" className="px-5 py-3 rounded-md bg-teal-500 text-slate-950 font-medium hover:bg-teal-400 transition">Email us</a>
                <a href="tel:+1234567890" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40 transition">Call +1 (234) 567-890</a>
              </div>
              <p className="mt-3 text-xs text-slate-400">Typical response time: under 24 hours.</p>
            </div>
            <div className="rounded-xl border border-white/10 p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/40">
              <h3 className="font-medium">What to include</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc pl-5">
                <li>Location(s) and target species or habitats</li>
                <li>Intended use (editorial, commercial, campaign)</li>
                <li>Timeline and access/permits status</li>
                <li>Preferred deliverables and budget range</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} WildLens Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
