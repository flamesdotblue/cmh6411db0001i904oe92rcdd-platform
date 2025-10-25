import React from 'react';

const images = [
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop', alt: 'Tiger walking through grass at golden hour' },
  { src: 'https://images.unsplash.com/photo-1501706362039-c06b2d715385?q=80&w=1600&auto=format&fit=crop', alt: 'Sea turtle swimming in clear blue ocean' },
  { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop', alt: 'Eagle in flight with mountains in background' },
  { src: 'https://images.unsplash.com/photo-1512218168353-4bba6ac5df77?q=80&w=1600&auto=format&fit=crop', alt: 'Red fox in snowy forest looking at camera' },
  { src: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1600&auto=format&fit=crop', alt: 'School of fish forming patterns underwater' },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1600&auto=format&fit=crop', alt: 'Elephants walking through savannah at sunset' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Portfolio</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">A glimpse of recent assignments across oceans, forests and mountains. More on request to fit your brief.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex w-max px-4 py-2 rounded-md border border-white/20 hover:border-white/40 text-sm">Request full case studies</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="group overflow-hidden rounded-xl border border-white/10 bg-slate-900/40">
              <img src={img.src} alt={img.alt} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="p-3 text-xs text-slate-300 border-t border-white/10">{img.alt}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
