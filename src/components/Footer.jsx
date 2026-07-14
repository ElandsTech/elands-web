import { MapPin, Mail, Phone } from "lucide-react";
import logo from "../assets/logo/footer-logo.svg"

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10 pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14">
          <div>
            <img src={logo} alt="Elands Tech" className="h-9 w-auto" />
            <p className="mt-6 text-white/40 text-sm font-light leading-relaxed">
              Industrial and commercial electrical engineering — installations,
              maintenance, and commissioning built to last.
            </p>
          </div>

          <div>
            <h4 className="text-white/70 text-[11px] uppercase tracking-luxe mb-6">Services</h4>
            <ul className="space-y-3 text-white/40 text-sm font-light">
              <li>Industrial Electrical Installations</li>
              <li>Electrical Maintenance &amp; Commissioning</li>
              <li>Panel &amp; Switchgear Upgrades</li>
              <li>Commercial Build-Outs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/70 text-[11px] uppercase tracking-luxe mb-6">Company</h4>
            <ul className="space-y-3 text-white/40 text-sm font-light">
              <li>Our Services</li>
              <li>Reviews</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/70 text-[11px] uppercase tracking-luxe mb-6">Contact</h4>
            <ul className="space-y-4 text-white/40 text-sm font-light">
              <li className="flex items-center gap-3"><MapPin size={15} className="text-volt shrink-0" /> Kookrus, Meyerton, Johannesburg 1961</li>
              <li className="flex items-center gap-3"><Phone size={15} className="text-volt shrink-0" /> +27 (0)73 401 2101</li>
              <li className="flex items-center gap-3"><Mail size={15} className="text-volt shrink-0" /> info@elandstech.co.za</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/30 text-[11px] tracking-widest uppercase">
          <span>© {new Date().getFullYear()} Elands Tech. All rights reserved.</span>
          <span>South Africa</span>
        </div>
      </div>
    </footer>
  );
}