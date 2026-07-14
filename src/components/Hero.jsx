import { ArrowRight, ShieldCheck, Clock } from "lucide-react";
import HeroArt from "./HeroArt";

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy-deep pt-40 pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="text-[11px] uppercase tracking-luxe text-white/50 mb-6">
            Industrial &amp; Commercial Electrical Engineering
          </div>
          <h1 className="font-serif font-light text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.08] text-white">
            Electrical systems built to run your operation.
          </h1>
          <p className="mt-8 text-white/55 text-lg max-w-lg font-light leading-relaxed">
            From industrial installations to panel and switchgear upgrades,
            Elands Tech handles the electrical work behind demanding
            industrial and commercial sites — licensed, insured, and on time.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            
           <a   href="#contact"
              className="group inline-flex items-center gap-3 border border-white/30 hover:border-volt text-white text-[11px] uppercase tracking-luxe px-8 py-4 transition-colors duration-500"
            >
              Book a Free Estimate
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-500" />
            </a>
            
            <a  href="tel:+27734012101"
              className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-500"
            >
              +27 (0)73 401 2101
            </a>
          </div>

          <div className="mt-16 flex flex-wrap gap-10">
            <div className="flex items-center gap-2 text-white/45 text-[11px] uppercase tracking-widest">
              <ShieldCheck size={16} className="text-volt" />
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2 text-white/45 text-[11px] uppercase tracking-widest">
              <Clock size={16} className="text-volt" />
              15 Years of Experience
            </div>
          </div>
        </div>

        <div className="relative">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}