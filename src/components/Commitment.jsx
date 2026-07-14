export default function Commitment() {
  return (
    <section className="bg-navy-deep py-20 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
        <div className="w-16 h-16 rounded-full border border-volt/40 grid place-items-center text-volt font-serif text-lg shrink-0">
          DK
        </div>
        <div className="flex-1">
          <p className="text-white/85 font-serif italic font-light text-xl sm:text-2xl leading-snug">
            "Our commitment is simple: quality work, honest pricing, and a
            crew that treats your property like our own."
          </p>
        </div>
        <div className="text-white shrink-0 text-center sm:text-right">
          <div className="font-serif italic text-2xl">Magorimbo</div>
          <div className="text-[10px] not-italic uppercase tracking-luxe text-white/40 mt-2">
            CEO, Elands Tech
          </div>
        </div>
      </div>
    </section>
  );
}