const credentials = [
  "Licensed Electrical Engineers",
  "Industrial Installation Specialists",
  "Code & Compliance Certified",
  "Fully Bonded & Insured",
];

export default function CredentialStrip() {
  return (
    <div className="bg-navy-deep border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-4">
        {credentials.map((c) => (
          <span key={c} className="text-white/35 text-[10px] uppercase tracking-luxe">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}