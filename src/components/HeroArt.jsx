import Hero from "../assets/hero.avif"

export default function HeroArt() {
  return (
    <div className="relative overflow-hidden">
      <img
        src={Hero}
        alt="Electrical Wire and Cable"
        className="w-full h-auto grayscale-[15%] contrast-[1.05] transition-transform duration-[1200ms] hover:scale-105"
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
    </div>
  );
}