import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import heroBanner from '../images/hero-banner.svg';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-menuxp-red">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Column (Image) — aparece primeiro no MOBILE */}
          <div className="relative order-1 lg:order-2">
            <div className="relative flex justify-center">
              {/* Menor no mobile, intermediário no tablet, full no desktop */}
              <img
                src={heroBanner}
                alt="Seu restaurante merece um app próprio."
                className="w-1/2 md:w-3/4 lg:w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Left Column (Texto/CTAs) — aparece depois no MOBILE */}
          <div className="space-y-8 order-2 lg:order-1 text-center md:text-left">
            <h1 className="font-tanker text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Seu <span className="text-[#FEBA0C]">restaurante</span> merece mais <span className="text-[#FEBA0C]">experiência.</span>
            </h1>

            <p className="text-white text-lg md:text-xl font-montserrat leading-relaxed">
              <span className="font-bold text-white"> #1 Plataforma gamificada para restaurantes:</span> <br />
              cardápio digital + pedidos online + jogos personalizados
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="group bg-[#FEBA0C] text-black px-8 py-4 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] font-regular text-lg transition-all duration-200 hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] active:translate-y-[6px] active:shadow-none">
                COMEÇAR GRÁTIS AGORA
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group bg-transparent text-black px-8 py-4 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] font-regular text-lg transition-all duration-200 hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] hover:bg-white active:translate-y-[6px] active:shadow-none">
                <Play className="inline-block mr-2 w-5 h-5" />
                VER COMO FUNCIONA
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 justify-center md:justify-start">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <span className="text-sm text-white font-montserrat">
                  App pronto em minutos: simples, rápido e sem burocracia.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <span className="text-sm text-white font-montserrat">
                  Sem taxas por pedido: pague apenas uma mensalidade fixa.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
                <span className="text-sm text-white font-montserrat">
                  Gamificação exclusiva: fidelize seus clientes como nunca.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
