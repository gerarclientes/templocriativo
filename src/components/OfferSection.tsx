import { content } from "../data";
import { FadeIn, Button } from "./ui";

export function OfferSection() {
  const { oferta, garantia, para_quem } = content;

  return (
    <div className="bg-temple-black text-temple-white">
      
      {/* Oferta */}
      <section id="oferta" className="px-6 py-24 md:py-40 relative">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none">
           <svg viewBox="0 0 800 800" className="w-[150vw] h-[150vh] animate-[spin_100s_linear_infinite]">
             <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="2" className="text-temple-white"/>
           </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-temple-white mb-6">
              {oferta.headline}
            </h2>
            <p className="text-sm md:text-base text-temple-white/70 font-sans leading-relaxed max-w-2xl mx-auto mb-16 text-balance">
              {oferta.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-temple-black-soft border border-temple-white/10 p-8 md:p-16 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-serif text-temple-white mb-2">
                {oferta.produto.nome}
              </h3>
              <p className="text-xs tracking-widest uppercase font-sans text-temple-gold font-normal mb-12">
                {oferta.produto.descricao}
              </p>

              <div className="space-y-6 text-left mb-16">
                {oferta.produto.itens.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start pb-6 border-b border-temple-white/5 last:border-0 last:pb-0">
                    <span className="text-temple-gold mt-1 text-lg">✦</span>
                    <div>
                      <h4 className="text-sm md:text-base font-sans text-temple-white font-normal mb-1">
                        {item.titulo}
                      </h4>
                      <p className="text-xs md:text-sm font-sans text-temple-gray leading-relaxed">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-temple-white/10 flex flex-col items-center">
                <p className="line-through text-temple-gray text-sm font-sans mb-4">
                  {oferta.produto.valor_real}
                </p>
                <p className="text-2xl md:text-4xl font-serif text-temple-gold mb-2">
                  {oferta.produto.preco}
                </p>
                <p className="text-sm font-sans text-temple-white/60 mb-10">
                  {oferta.produto.parcelamento}
                </p>
                
                <Button className="w-full sm:w-auto" variant="primary">
                  {oferta.produto.cta}
                </Button>
                
                <p className="text-[10px] tracking-widest uppercase font-sans text-temple-gray mt-6">
                  {oferta.produto.microcopy}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Garantia */}
      <section className="px-6 py-24 bg-temple-black border-y border-temple-white/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-center justify-center">
          <FadeIn className="shrink-0 w-40 h-40 flex items-center justify-center">
            <img 
              src="http://templocriativo.com/wp-content/uploads/2026/06/ChatGPT-Image-6-de-jun.-de-2026-17_11_07-1.-de-2026-17_11_07-1.webp" 
              alt={garantia.destaque}
              className="w-full h-full object-contain drop-shadow-lg"
              referrerPolicy="no-referrer"
            />
          </FadeIn>
          <FadeIn delay={0.2} className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-serif text-temple-white mb-6">
              {garantia.headline}
            </h2>
            <p className="text-sm md:text-base font-sans leading-relaxed text-temple-white/70">
              {garantia.texto}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Para Quem É - 50/50 full width layout */}
      <section className="w-full">
        <div className="p-12 md:p-24 bg-temple-black border-b border-temple-white/10 text-center">
           <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] text-temple-white">
              {para_quem.headline}
            </h2>
          </FadeIn>
        </div>
        <div className="flex flex-col md:flex-row w-full min-h-[60vh]">
            <div className="w-full md:w-1/2 p-12 md:p-24 bg-temple-white text-temple-black">
               <FadeIn delay={0.1} className="max-w-lg ml-auto mr-auto md:ml-auto md:mr-12 xl:mr-24">
                <h3 className="text-xl md:text-2xl font-serif text-temple-black mb-10 pb-6 border-b border-temple-black/20">
                  {para_quem.para_voce.titulo}
                </h3>
                <ul className="space-y-6">
                  {para_quem.para_voce.itens.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-temple-black font-sans text-sm md:text-base leading-relaxed">
                      <span className="text-temple-gold mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2 p-12 md:p-24 bg-temple-offwhite text-temple-black">
                <FadeIn delay={0.2} className="max-w-lg mr-auto ml-auto md:mr-auto md:ml-12 xl:ml-24 opacity-80">
                <h3 className="text-xl md:text-2xl font-serif text-temple-gray mb-10 pb-6 border-b border-temple-black/10">
                  {para_quem.nao_para_voce.titulo}
                </h3>
                <ul className="space-y-6">
                  {para_quem.nao_para_voce.itens.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-temple-gray font-sans text-sm md:text-base leading-relaxed">
                      <span className="text-temple-gray mt-1">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
        </div>
      </section>

    </div>
  );
}
