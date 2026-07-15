import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Rolls-Royce-style horizontal slider.
 * Full-width panels that snap-scroll horizontally, with thin
 * underline pagination dots and round arrow controls — instead
 * of a static CSS grid.
 *
 * Usage:
 *   <Slider slides={items} dark renderSlide={(item) => (...) } />
 */
export default function Slider({
  slides,
  renderSlide,
  dark = false,
  slideClassName = "w-[85%] sm:w-[60%] lg:w-[42%]",
}) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[i];
    if (child) {
      track.scrollTo({
        left: child.offsetLeft - track.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft - track.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  const next = () => scrollToIndex(Math.min(active + 1, slides.length - 1));
  const prev = () => scrollToIndex(Math.max(active - 1, 0));

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 sm:gap-6 pb-2 -mx-6 sm:-mx-8 px-6 sm:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {slides.map((slide, i) => (
          <div key={i} className={`snap-start shrink-0 ${slideClassName}`}>
            {renderSlide(slide, i)}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8 sm:mt-10 gap-4">
        <div className="flex flex-wrap gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[2px] transition-all duration-500 ${
                i === active
                  ? "w-8 bg-volt"
                  : `w-4 ${dark ? "bg-white/25" : "bg-navy/20"}`
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2 sm:gap-3 shrink-0">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border grid place-items-center transition-colors duration-500 ${
              dark
                ? "border-white/25 text-white hover:border-volt"
                : "border-navy/20 text-navy hover:border-volt"
            }`}
          >
            <ChevronLeft size={16} className="sm:hidden" />
            <ChevronLeft size={17} className="hidden sm:block" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full border grid place-items-center transition-colors duration-500 ${
              dark
                ? "border-white/25 text-white hover:border-volt"
                : "border-navy/20 text-navy hover:border-volt"
            }`}
          >
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={17} className="hidden sm:block" />
          </button>
        </div>
      </div>
    </div>
  );
}