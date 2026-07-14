import { ArrowRight } from "lucide-react";
import HeroArt from "./HeroArt";

export default function CtaBanner() {
  return (
    <section id="contact" className="bg-navy-deep relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-32 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-serif font-light text-4xl sm:text-5xl text-white leading-tight">
            Got an electrical problem? We've got the solution.
          </h2>
          <p className="mt-7 text-white/55 text-lg font-light max-w-md leading-relaxed">
            Tell us what's going on and we'll get back to you within one
            business day with next steps and a ballpark quote.
          </p>
          
          <a  href="tel:0000000000"
            className="mt-10 inline-flex items-center gap-3 border border-white/30 hover:border-volt text-white text-[11px] uppercase tracking-luxe px-8 py-4 transition-colors duration-500"
          >
            Request a Free Estimate
            <ArrowRight size={15} />
          </a>
        </div>
        <div className="opacity-90 max-w-sm mx-auto lg:ml-auto">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}