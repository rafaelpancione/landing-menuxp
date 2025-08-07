import React from 'react';
import { TrendingUp, Target, Zap, DollarSign } from 'lucide-react';
import patternRed from '../images/pattern-red.svg';
import useCase from '../images/use-case.svg'

const AIRevenueSection: React.FC = () => {
  const timelineSteps = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Mapeia',
      description:
        'Analisa pedidos, cardápio, horários, sazonalidade e comportamento dos clientes.',
      color: '#0097E0',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Encontra',
      description:
        'Prevê demanda, segmenta públicos e identifica chances de upsell/cross-sell e horários ociosos.',
      color: '#E53036',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Sugere',
      description:
        'Transforma insights em missões gamificadas (combos, cupons, promo relâmpago, ajustes de preço).',
      color: '#FEBA0C',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Otimiza',
      description:
        'Acompanha o impacto em tempo real, aprende com os resultados e refina as próximas missões para aumentar ticket médio e recorrência.',
      color: '#000000',
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img src={patternRed} alt="Background pattern" className="w-full h-full object-cover opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-tanker text-3xl md:text-4xl text-black mb-4">IA Geradora de Receita</h2>
          <p className="text-gray-600 text-lg font-montserrat">Inteligência artificial que vende por você</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile Version */}
          <div className="lg:hidden space-y-8">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center text-white"
                  style={{ backgroundColor: step.color }}
                >
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-black">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Version */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center h-full">
                  {/* Icon (fixed size + margin) */}
                  <div
                    className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center text-white mb-4 shadow-[4px_6px_0px_#000000]"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.icon}
                  </div>

                  {/* Title (consistent height line) */}
                  <h3 className="font-bold text-lg text-black mb-2 h-[28px] leading-[28px]">{step.title}</h3>

                  {/* Description (clamped & equal min height) */}
                  <p className="text-gray-600 text-sm leading-snug line-clamp-4 min-h-[96px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Results Highlight 
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#FEBA0C] text-black px-8 py-4 rounded-2xl border-2 border-black shadow-[6px_8px_0px_#000000]">
            <div className="font-tanker text-2xl md:text-3xl mb-2">18% menos desperdício 📉</div>
            <div className="text-sm font-montserrat">Resultado médio dos nossos clientes</div>
          </div>
        </div>
*/}
        {/* Case Study */}
        <div className="relative mt-12 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-black p-8 shadow-[6px_8px_0px_#000000]">
          <div className="text-center">
            <h3 className="font-bold text-xl mb-4">Veja como funciona</h3>
            <div className="flex justify-center mb-4">
              <img src={useCase} alt="Caso de uso" className="w-[300px] h-[300px] mx-auto" />
            </div>
            <p className="text-gray-700 mb-4">
              Um restaurante possui 30% de mesas ociosas às terças e ingredientes perto de vencer.
            </p>
            <p className="text-gray-700 mb-4">
               Nossa IA sugere: <strong>"Terça do Chef: Prato especial + drink por R$49"</strong> como promoção relâmpago.
            </p>
            <div className="bg-[#E53036] text-white px-6 py-3 rounded-full inline-block font-bold">
              Resultado projetado: +40% ocupação e 80% redução no desperdício
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRevenueSection;
