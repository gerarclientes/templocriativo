import { motion } from "motion/react";
import { content } from "../data";
import { FadeIn, Button } from "./ui";

export function JourneySection() {
  const { manifesto, templo_apresentacao, como_funciona, travessia, quem_te_guia } = content;

  return (
    <div className="bg-temple-white text-temple-black">
      
      {/* Manifesto - 50/50 Split */}
      <section className="flex flex-col md:flex-row w-full min-h-svh">
        <div className="w-full md:w-1/2 bg-temple-offwhite flex items-center justify-center p-12 md:p-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 800 800" className="w-[100vw] h-[100vh] min-w-[800px] animate-[spin_200s_linear_infinite]">
              <ellipse cx="400" cy="400" rx="380" ry="200" fill="none" stroke="currentColor" strokeWidth="2" className="text-temple-black"/>
              <ellipse cx="400" cy="400" rx="280" ry="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-temple-black" transform="rotate(45 400 400)"/>
            </svg>
          </div>
          <FadeIn className="max-w-xl relative w-full">
            <p className="text-xs tracking-[0.2em] font-sans text-temple-gold uppercase mb-8">
              {manifesto.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-12 text-balance text-temple-black">
              {manifesto.headline}
            </h2>
            <div className="space-y-6 font-sans text-sm md:text-base leading-relaxed text-temple-gray text-left">
              <p>{manifesto.texto[0]}</p>
              <p>{manifesto.texto[1]}</p>
              <p>{manifesto.texto[2]}</p>
            </div>
          </FadeIn>
        </div>
        <div className="w-full md:w-1/2 bg-temple-black flex flex-col items-center justify-center bg-[url('https://templocriativo.com/wp-content/uploads/2026/06/1-1.webp')] bg-cover bg-center relative p-12 md:p-24">
           {/* Dark overlay */}
           <div className="absolute inset-0 bg-temple-black/80" />
           <FadeIn delay={0.2} className="relative max-w-xl">
             <p className="text-2xl md:text-3xl font-serif text-temple-gold leading-snug my-12 text-center italic">
                “{manifesto.texto[3]}”
              </p>
              <div className="w-12 h-px bg-temple-gold/30 mx-auto my-12" />
              <div className="space-y-6 font-sans text-sm md:text-base leading-relaxed text-temple-white/80 text-left">
                <p>{manifesto.texto[4]}</p>
                <p>{manifesto.texto[5]}</p>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* Templo Apresentacao - 50/50 Split */}
      <section id="travessia" className="flex flex-col md:flex-row w-full min-h-[80vh]">
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full order-2 md:order-1 overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="http://templocriativo.com/wp-content/uploads/2026/06/2-1.webp"
            alt="Ateliê criativo"
            className="absolute inset-0 w-full h-full object-cover grayscale-[10%] sepia-[10%]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-temple-white order-1 md:order-2">
          <FadeIn className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8 text-temple-black text-balance">
              {templo_apresentacao.headline}
            </h2>
            <p className="text-base md:text-lg text-temple-gray font-sans leading-relaxed">
              {templo_apresentacao.texto}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Como Funciona - Quadrantes 2x2 */}
      <section id="como-funciona" className="w-full bg-temple-black text-temple-white py-24 md:py-0">
        <div className="flex flex-col md:flex-row min-h-svh">
            {/* Header Column */}
            <div className="w-full md:w-1/3 flex flex-col justify-center p-12 md:p-24 border-b md:border-b-0 md:border-r border-temple-white/10 bg-temple-black-soft">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
                  {como_funciona.headline}
                </h2>
                <p className="text-temple-gold font-sans text-sm tracking-widest uppercase mb-8">
                  {como_funciona.subheadline}
                </p>
                <p className="text-base text-temple-white/80 font-sans leading-relaxed">
                  {como_funciona.intro}
                </p>
              </FadeIn>
            </div>
            
            {/* Grid 2x2 Column */}
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2">
              {como_funciona.pilares.map((pilar, index) => (
                <FadeIn 
                  key={index} 
                  delay={index * 0.1}
                  className={`p-12 md:p-16 flex flex-col justify-between ${index === 0 || index === 2 ? 'border-b md:border-r md:border-b' : 'border-b'} border-temple-white/10 hover:bg-temple-white/5 transition-colors duration-500`}
                >
                  <div>
                    <span className="text-xs font-serif text-temple-gold tracking-widest block mb-8">
                      {pilar.numero}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-temple-white mb-4">
                      {pilar.titulo}
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-temple-white/50 font-sans mb-8">
                      {pilar.subtitulo}
                    </p>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-temple-white/70 font-sans mt-auto pt-8 border-t border-temple-white/10">
                    {pilar.texto}
                  </p>
                </FadeIn>
              ))}
            </div>
        </div>
      </section>

      {/* A Travessia 50/50 Split */}
      <section className="flex flex-col md:flex-row w-full min-h-[80vh]">
          {/* Left Side - Onde está hoje */}
          <div className="w-full md:w-1/2 p-12 md:p-24 bg-temple-offwhite flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] text-temple-black mb-16 text-balance">
                {travessia.headline}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="text-xl md:text-2xl font-serif text-temple-black mb-10 pb-6 border-b border-temple-black/10">
                {travessia.onde_esta_hoje.titulo}
              </h3>
              <ul className="space-y-6">
                {travessia.onde_esta_hoje.itens.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-temple-black font-sans text-sm md:text-base leading-relaxed">
                    <span className="text-temple-gray mt-1">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Right Side - Onde chega */}
          <div className="w-full md:w-1/2 p-12 md:p-24 bg-temple-white border-l border-temple-black/5 flex flex-col justify-center relative overflow-hidden">
             <FadeIn delay={0.2} className="relative z-10 w-full mt-auto md:mt-24">
              <h3 className="text-xl md:text-2xl font-serif text-temple-gold mb-10 pb-6 border-b border-temple-gold/20">
                {travessia.onde_chega.titulo}
              </h3>
              <ul className="space-y-6">
                {travessia.onde_chega.itens.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-temple-black font-sans text-sm md:text-base leading-relaxed">
                    <span className="text-temple-gold mt-1">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
      </section>

      {/* Quem Te Guia - 50/50 Split */}
      <section className="flex flex-col md:flex-row w-full min-h-[80vh]">
        <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-full overflow-hidden">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="http://templocriativo.com/wp-content/uploads/2026/06/3.webp"
            alt="Carolina Cor"
            className="absolute inset-0 w-full h-full object-cover grayscale-[10%] sepia-[10%]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 bg-temple-white">
          <FadeIn className="max-w-xl">
            <p className="text-xs tracking-[0.2em] font-sans text-temple-gold uppercase mb-6">
              {quem_te_guia.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-10 text-temple-black">
              {quem_te_guia.headline}
            </h2>
            <div className="space-y-6 text-sm md:text-base text-temple-gray font-sans leading-relaxed">
              <p>{quem_te_guia.texto[0]}</p>
              <p>{quem_te_guia.texto[1]}</p>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
