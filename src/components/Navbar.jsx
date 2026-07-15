import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo/logo-dark.png"

const links = [
  { label: "Our Services", href: "#services" },
  { label: "Electrical Engineering", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Blog", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Elands Tech" className="h-7 sm:h-8 lg:h-9 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            
             <a key={l.label}
              href={l.href}
              className="text-[11px] uppercase tracking-luxe text-white/60 hover:text-white transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-8">
          <a href="tel:+27734012101" className="flex items-center gap-2 text-white/70 text-xs">
            <Phone size={14} className="text-volt" />
            <span className="tracking-wide">+27 (0)73 401 2101</span>
          </a>

          <a
            href="#contact"
            className="border border-white/30 hover:border-volt text-white text-[11px] uppercase tracking-luxe px-6 py-3 transition-colors duration-500"
          >
            Get a Quote
          </a>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          
          <a  href="tel:+27734012101"
            aria-label="Call us"
            className="text-white/80 hover:text-volt transition-colors"
          >
            <Phone size={18} />
          </a>
          <button
            className="text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10 px-6 sm:px-8 py-8 flex flex-col gap-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 text-sm uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}

          
         <a   href="tel:+27734012101"
            className="flex items-center gap-2 text-white/70 text-xs pt-2 border-t border-white/10"
          >
            <Phone size={14} className="text-volt" />
            <span className="tracking-wide">+27 (0)73 401 2101</span>
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="border border-white/30 text-white text-[11px] uppercase tracking-luxe px-6 py-3.5 text-center"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}