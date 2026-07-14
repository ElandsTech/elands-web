import { PhoneCall, ClipboardList, FileText, Wrench } from "lucide-react";
import CurrentLine from "./CurrentLine";

const steps = [
  { icon: PhoneCall, title: "Contact", desc: "Call or fill out the form. We'll ask a few questions to understand the job." },
  { icon: ClipboardList, title: "Consultation", desc: "An electrician visits to assess the site and talk through options." },
  { icon: FileText, title: "Proposal", desc: "You get a clear, itemized quote — no hidden fees, no surprises." },
  { icon: Wrench, title: "Installation", desc: "Our licensed crew completes the work, cleans up, and walks you through it." },
];

export default function Process() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="text-[11px] uppercase tracking-luxe text-slate-text mb-5">How it works</div>
          <h2 className="font-serif font-light text-4xl sm:text-5xl text-navy">
            Getting the electrical work you need is easy
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative border-t border-navy/10 pt-8">
              <span className="text-[11px] tracking-widest text-slate-text/60">0{i + 1}</span>
              <Icon size={22} strokeWidth={1.25} className="text-volt mt-4" />
              <h3 className="mt-5 text-lg font-serif text-navy">{title}</h3>
              <p className="mt-3 text-slate-text text-sm font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <CurrentLine />
      </div>
    </section>
  );
}