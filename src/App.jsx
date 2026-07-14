import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CredentialStrip from "./components/CredentialStrip";
import ServiceSplit from "./components/ServiceSplit";
import Testimonial from "./components/Testimonial";
import Process from "./components/Process";
import Commitment from "./components/Commitment";
import FullService from "./components/FullService";
import News from "./components/News";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function App() {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    let observer;
    const raf = requestAnimationFrame(() => {
      const el = document.getElementById("site-footer");
      if (!el) {
        console.warn("site-footer element not found — check Footer.jsx has id='site-footer'");
        return;
      }
      setFooterHeight(el.getBoundingClientRect().height);
      observer = new ResizeObserver((entries) => {
        setFooterHeight(entries[0].contentRect.height);
      });
      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <div
        className="relative z-10 bg-ivory shadow-[0_40px_60px_-20px_rgba(0,0,0,0.35)]"
        style={{ paddingBottom: footerHeight }}
      >
        <Navbar />
        <Hero />
        <CredentialStrip />
        <ServiceSplit />
        <Testimonial />
        <Process />
        <Commitment />
        <FullService />
        <News />
        <CtaBanner />
      </div>

      <Footer />
    </div>
  );
}