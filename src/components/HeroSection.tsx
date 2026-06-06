import { motion } from "motion/react";
import { Button, FadeIn } from "./ui";
import { content } from "../data";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const { hero } = content;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
    };

    if (document.readyState === 'complete') {
      playVideo();
    } else {
      window.addEventListener('load', playVideo);
      return () => window.removeEventListener('load', playVideo);
    }
  }, []);

  return (
    <section className="relative min-h-svh w-full flex flex-col items-center justify-between overflow-hidden bg-temple-black">
      {/* Background Animated Image (Video Placeholder) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="http://templocriativo.com/wp-content/uploads/2026/06/Feminine_hands_moving_gracefully…_202606061736.mp4"
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        />
        
        {/* Soft, dark overlay to ensure readability */}
        <div className="absolute inset-0 bg-temple-black/60 pointer-events-none" />
      </div>

      {/* Header */}
      <header className="relative z-10 w-full flex justify-between items-center px-8 py-10 md:px-16 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-sans leading-relaxed text-temple-white"
        >
          Carolina Cor <br />
          <span className="opacity-60 text-temple-gold">O Templo Criativo</span>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:flex gap-12 text-[10px] tracking-[0.15em] uppercase font-sans text-temple-white/80"
        >
          <a href="#travessia" className="hover:text-temple-gold transition-colors">A Travessia</a>
          <a href="#como-funciona" className="hover:text-temple-gold transition-colors">Como Funciona</a>
          <a href="#oferta" className="hover:text-temple-gold transition-colors">Oferta</a>
          <a href="#faq" className="hover:text-temple-gold transition-colors">FAQ</a>
        </motion.nav>
      </header>

      {/* Central Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl mx-auto mt-12 md:mt-0">
        <FadeIn delay={0.3}>
          <p className="text-xs md:text-sm tracking-[0.2em] font-sans text-temple-gold uppercase mb-6 md:mb-8">
            {hero.eyebrow}
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-serif text-temple-white leading-[0.9] tracking-tight mb-10 text-balance font-normal">
            {hero.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.7} className="max-w-2xl mx-auto">
          <p className="text-sm md:text-base lg:text-lg text-temple-white/80 font-sans leading-relaxed mb-8 text-balance">
            {hero.subheadline}
          </p>
          <p className="text-xs tracking-wider uppercase text-temple-gold mb-12">
            {hero.data}
          </p>
        </FadeIn>

        <FadeIn delay={0.9} className="w-full flex flex-col items-center gap-4">
          <Button onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}>
            {hero.cta}
          </Button>
          <p className="text-[10px] md:text-xs tracking-widest uppercase font-sans text-temple-white/50 mt-2">
            {hero.microcopy}
          </p>
        </FadeIn>
      </main>

      {/* Footer of Hero */}
      <footer className="relative z-10 w-full flex justify-between items-end px-8 py-10 md:px-16 w-full text-[10px] tracking-widest uppercase text-temple-white/50 font-sans hidden md:flex">
        <div className="flex gap-8">
          <a href="#" className="hover:text-temple-gold transition-colors">Instagram</a>
          <a href="#" className="hover:text-temple-gold transition-colors">WhatsApp</a>
        </div>
        <div className="flex gap-4 items-center">
          <span>16/06 · 9 semanas · mentoria viva</span>
        </div>
      </footer>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-temple-white/40 md:hidden"
      >
        <ChevronDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
