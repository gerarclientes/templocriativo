import React, { useState } from "react";
import { content } from "../data";
import { FadeIn, Button } from "./ui";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function FaqItem({
  pergunta,
  resposta,
}: {
  pergunta: string;
  resposta: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-temple-black/10">
      <button
        className="w-full py-8 flex justify-between items-center text-left hover:text-temple-gold transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-lg md:text-xl pr-8 text-temple-black">{pergunta}</span>
        {isOpen ? (
          <Minus className="shrink-0 text-temple-gold" size={20} strokeWidth={1.5} />
        ) : (
          <Plus className="shrink-0 text-temple-gray" size={20} strokeWidth={1.5} />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-sm md:text-base font-sans text-temple-gray leading-relaxed max-w-3xl">
              {resposta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ClosingSection() {
  const { depoimentos, faq, cta_final, footer } = content;

  return (
    <div className="bg-temple-white text-temple-black">
      
      {/* Depoimentos */}
      <section className="px-6 py-24 md:py-40 bg-temple-offwhite">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20 md:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-temple-black">
              {depoimentos.headline}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {depoimentos.itens.map((depoimento, index) => (
              <FadeIn key={index} delay={index * 0.1} className="flex flex-col text-center px-4">
                <span className="text-4xl font-serif text-temple-gold/40 h-8 leading-none block mb-6 px-1">“</span>
                <p className="font-serif text-lg md:text-xl text-temple-black leading-snug mb-8 flex-1">
                  {depoimento.texto}
                </p>
                <span className="text-xs tracking-widest uppercase font-sans text-temple-gray">
                  {depoimento.autor}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - 50/50 Layout */}
      <section id="faq" className="w-full bg-temple-white">
        <div className="flex flex-col md:flex-row w-full min-h-[60vh]">
            <div className="w-full md:w-1/3 flex flex-col pt-24 md:p-24 px-12 pb-12">
               <FadeIn>
                <h2 className="text-3xl md:text-5xl font-serif text-temple-black text-balance">
                  {faq.headline}
                </h2>
              </FadeIn>
            </div>
            <div className="w-full md:w-2/3 px-12 pb-24 md:p-24 md:pl-0">
               <div className="border-t border-temple-black/10">
                {faq.perguntas.map((item, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <FaqItem pergunta={item.pergunta} resposta={item.resposta} />
                  </FadeIn>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative px-6 py-32 md:py-48 overflow-hidden text-temple-white bg-[url('http://templocriativo.com/wp-content/uploads/2026/06/ChatGPT-Image-6-de-jun.-de-2026-17_15_07.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-temple-black/80 z-0" />
        
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <FadeIn>
            <p className="text-xs tracking-[0.2em] font-sans text-temple-gold uppercase mb-8">
              {cta_final.headline}
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.05] text-temple-white mb-12 text-balance font-normal">
              {cta_final.frase_principal}
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-sm md:text-base font-sans leading-relaxed text-temple-white/80 max-w-2xl mx-auto mb-16 text-balance">
              {cta_final.texto}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="w-full flex flex-col items-center gap-6">
            <Button onClick={() => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" })}>
              {cta_final.cta}
            </Button>
            <p className="text-[10px] md:text-xs tracking-widest uppercase font-sans text-temple-white/40">
              {cta_final.microcopy}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-temple-black px-6 py-12 border-t border-temple-white/10 text-center text-xs tracking-widest uppercase font-sans text-temple-white/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-lg text-temple-white/80 tracking-normal capitalize">
            {footer.logo}
          </div>
          <div>
            <span className="opacity-70">{footer.texto}</span>
          </div>
          <div className="opacity-70 hover:opacity-100 hover:text-temple-gold transition-all cursor-pointer">
            {footer.contato}
          </div>
        </div>
      </footer>

    </div>
  );
}
