import { Factory, Wrench, PanelTop, Building } from "lucide-react";
import Slider from "./Slider";

const services = [
  { icon: Factory, title: "Industrial Electrical Installations", desc: "End-to-end electrical installations for industrial sites, from design through commissioning." },
  { icon: Wrench, title: "Maintenance & Commissioning", desc: "Scheduled maintenance and commissioning to keep electrical systems reliable and compliant." },
  { icon: PanelTop, title: "Panel & Switchgear Upgrades", desc: "Upgrades to panels and switchgear that improve capacity, safety, and code compliance." },
  { icon: Building, title: "Commercial", desc: "Build-outs, maintenance contracts, and code compliance for commercial sites." },
];

export default function FullService() {
  return (
    <section className="bg-navy-deep py-32">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="text-[11px] uppercase tracking-luxe text-white/50 mb-5">Full-service contractor</div>
          <h2 className="font-serif font-light text-4xl sm:text-5xl text-white leading-tight">
            Everything electrical, under one roof
          </h2>
          <p className="mt-7 text-white/55 text-lg font-light leading-relaxed max-w-md">
            Elands Tech handles the complete range of industrial and
            commercial electrical services — no subcontracting, no runaround.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 border border-white/30 hover:border-volt text-white text-[11px] uppercase tracking-luxe px-8 py-4 transition-colors duration-500"
          >
            See All Services
          </a>
        </div>

        <Slider
          slides={services}
          dark
          slideClassName="w-[70%] sm:w-[55%] lg:w-[90%]"
          renderSlide={({ icon: Icon, title, desc }) => (
            <div className="bg-navy-mid/40 border border-white/10 p-8 h-full hover:bg-navy-mid transition-colors duration-500">
              <Icon size={20} strokeWidth={1.25} className="text-volt" />
              <h3 className="mt-6 text-white font-serif font-light">{title}</h3>
              <p className="mt-3 text-white/45 text-sm font-light leading-relaxed">{desc}</p>
            </div>
          )}
        />
      </div>
    </section>
  );
}
