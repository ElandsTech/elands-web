import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    tag: "Panels",
    date: "Jun 18, 2026",
    title: "4 Signs Your Facility May Need a Switchgear Upgrade",
    excerpt: "Tripped breakers and capacity limits are more than annoyances — here's when to call it in.",
  },
  {
    tag: "Compliance",
    date: "May 30, 2026",
    title: "What to Know About Industrial Electrical Inspections",
    excerpt: "What inspectors actually check, and how to get your site ready beforehand.",
  },
  {
    tag: "Maintenance",
    date: "Mar 2026",
    title: "Building a Preventive Electrical Maintenance Schedule",
    excerpt: "The maintenance intervals that keep industrial electrical systems reliable.",
  },
];

export default function News() {
  return (
    <section id="news" className="bg-ivory py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-luxe text-slate-text mb-5">From the blog</div>
            <h2 className="font-serif font-light text-4xl sm:text-5xl text-navy">Recent news &amp; articles</h2>
          </div>
          <a href="#" className="text-navy text-[11px] uppercase tracking-luxe border-b border-navy/30 hover:border-volt pb-1 inline-flex items-center gap-1 transition-colors duration-500">
            View all <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-navy/10">
          {articles.map((a) => (
            <article key={a.title} className="group bg-ivory hover:bg-white transition-colors duration-500">
              <div className="h-44 bg-navy-deep relative overflow-hidden">
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-widest text-volt border border-volt/40 px-2.5 py-1">
                  {a.tag}
                </span>
              </div>
              <div className="p-8">
                <div className="text-[11px] text-slate-text/70 tracking-wide">{a.date}</div>
                <h3 className="mt-3 font-serif font-light text-navy text-xl leading-snug">
                  {a.title}
                </h3>
                <p className="mt-3 text-slate-text text-sm font-light leading-relaxed">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}