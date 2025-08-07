import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Modern Restaurant"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative space-y-8">
          <h2 className="font-tanker text-3xl md:text-5xl lg:text-6xl leading-tight">
            Sua concorrência ainda não tem isso...
          </h2>
          
          <p className="text-xl md:text-2xl font-montserrat text-gray-300 max-w-3xl mx-auto">
            Seja o restaurante mais moderno! 🚀
          </p>

          {/* Urgency Elements */}
          <div className="flex flex-wrap justify-center gap-4 my-8">
            <div className="bg-[#E53036] text-white px-4 py-2 rounded-full border-2 border-white shadow-[3px_4px_0px_#FFFFFF] font-bold text-sm">
              ⏰ Apenas hoje: Setup GRÁTIS
            </div>
            <div className="bg-[#FEBA0C] text-black px-4 py-2 rounded-full border-2 border-white shadow-[3px_4px_0px_#FFFFFF] font-bold text-sm">
              🎁 Bônus: 30 dias de IA Premium
            </div>
          </div>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <button className="group bg-[#E53036] text-white px-8 py-4 rounded-full border-2 border-white shadow-[6px_8px_0px_#FFFFFF] font-regular text-lg transition-all duration-200 hover:translate-y-[3px] hover:shadow-[3px_4px_0px_#FFFFFF] active:translate-y-[6px] active:shadow-none w-full sm:w-auto">
              Criar Meu App AGORA
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-transparent text-white px-8 py-4 rounded-full border-2 border-white shadow-[6px_8px_0px_#FFFFFF] font-regular text-lg transition-all duration-200 hover:translate-y-[3px] hover:shadow-[3px_4px_0px_#FFFFFF] hover:bg-white hover:text-black active:translate-y-[6px] active:shadow-none w-full sm:w-auto">
              <Play className="inline-block mr-2 w-5 h-5" />
              Ver Demonstração
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>572+ restaurantes ativos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>98% satisfação</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex justify-center space-x-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm">Dados Seguros</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm">ABRASEL</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm">Setup 5min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;