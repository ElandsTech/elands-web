import { Factory, Wrench, ArrowRight } from "lucide-react";
import Slider from "./Slider";

const cards = [
  {
    icon: Factory,
    title: "Industrial Installations",
    desc: "Complete electrical systems for industrial sites — from design through installation and commissioning, built for demanding environments.",
    items: ["Industrial Wiring", "Switchgear & Distribution", "Commissioning"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Upgrades",
    desc: "Scheduled maintenance and panel or switchgear upgrades that keep operations running with minimal downtime.",
    items: ["Panel & Switchgear Upgrades", "Preventive Maintenance", "Compliance Checks"],
  },
];

export default function ServiceSplit() {
  return (
    <section id="services" className="bg-ivory py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-2xl mb-20">
          <div className="text-[11px] uppercase tracking-luxe text-slate-text mb-5">What we do</div>
          <h2 className="font-serif font-light text-4xl sm:text-5xl text-navy leading-tight">
            Electrical engineering for industrial and commercial sites
          </h2>
          <p className="mt-6 text-slate-text text-lg font-light leading-relaxed">
            Whether it's a new installation or keeping existing systems
            running, we scope the job right the first time.
          </p>
        </div>

        <Slider
          slides={cards}
          slideClassName="w-[88%] sm:w-[60%] lg:w-[48%]"
          renderSlide={({ icon: Icon, title, desc, items }) => (
            <div className="group bg-white border border-navy/10 p-12 h-full hover:border-volt/40 transition-colors duration-500">
              <Icon size={24} className="text-volt" strokeWidth={1.25} />
              <h3 className="mt-8 text-2xl font-serif font-light text-navy">{title}</h3>
              <p className="mt-4 text-slate-text font-light leading-relaxed">{desc}</p>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                {items.map((i) => (
                  <li key={i} className="text-[11px] uppercase tracking-widest text-slate-text/80">
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-navy border-b border-navy/30 group-hover:border-volt pb-1 transition-colors duration-500"
              >
                Learn more
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-500" />
              </a>
            </div>
          )}
        />
      </div>
    </section>
  );
}
