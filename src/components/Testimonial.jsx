import { Star, Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section id="reviews" className="bg-navy-deep py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        <div className="border border-white/10 p-10 relative">
          <Quote className="text-volt/50" size={32} strokeWidth={1} />
          <div className="flex gap-1 mt-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={13} className="fill-volt text-volt" />
            ))}
          </div>
          <p className="mt-6 text-white/75 text-lg font-light leading-relaxed font-serif italic">
            "They upgraded our switchgear and commissioned the new panels
            without a single day of unplanned downtime. Every technician
            showed up on time and left the site spotless."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-volt/40 grid place-items-center text-volt font-serif text-sm">
              MK
            </div>
            <div>
              <div className="text-white text-sm">Njabulo Mathe</div>
              <div className="text-white/40 text-xs tracking-wide">Gerboai Call Answering</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-luxe text-white/50 mb-5">
            Trusted Electrical Engineering Partner
          </div>
          <h2 className="font-serif font-light text-4xl sm:text-5xl text-white leading-tight">
            Built on safety, precision, and reliability
          </h2>
          <p className="mt-7 text-white/55 text-lg font-light leading-relaxed">
            We've completed hundreds of industrial and commercial projects —
            from installations and switchgear upgrades to full maintenance
            contracts. Every engineer on our team is licensed and trained to
            the latest compliance standards.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {[
              ["500+", "Projects completed"],
              ["15", "Years in business"],
              ["4.9★", "Average rating"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="text-3xl font-serif font-light text-volt">{stat}</div>
                <div className="text-white/40 text-[11px] uppercase tracking-widest mt-2">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}