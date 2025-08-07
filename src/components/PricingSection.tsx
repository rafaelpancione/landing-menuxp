import React from 'react';
import { Check, X, Crown } from 'lucide-react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: 'R$ 0',
      period: '/mês',
      description: 'Para testar',
      color: '#FFFFFF',
      borderColor: '#000000',
      features: [
        { name: 'App White Label', included: true, level: 1 },
        { name: 'IA de Receita', included: false },
        { name: 'Jogo Custom', included: false },
        { name: 'Suporte Chat', included: false },
        { name: 'Analytics Avançado', included: false }
      ]
    },
    {
      name: 'ESSENCIAL',
      price: 'R$ 97',
      period: '/mês',
      description: 'Mais escolhido',
      color: '#FEBA0C',
      borderColor: '#FEBA0C',
      highlight: true,
      badge: '🔥 POPULAR',
      features: [
        { name: 'App White Label', included: true, level: 2 },
        { name: 'IA de Receita', included: true, level: 1 },
        { name: 'Jogo Custom', included: true, level: 1 },
        { name: 'Suporte Chat', included: true, level: 1 },
        { name: 'Analytics Avançado', included: false }
      ]
    },
    {
      name: 'Pro',
      price: 'R$ 197',
      period: '/mês',
      description: 'Máximo poder',
      color: '#E53036',
      borderColor: '#E53036',
      features: [
        { name: 'App White Label', included: true, level: 2 },
        { name: 'IA de Receita', included: true, level: 2 },
        { name: 'Jogo Custom', included: true, level: 2 },
        { name: 'Suporte Chat', included: true, level: 2 },
        { name: 'Analytics Avançado', included: true, level: 1 }
      ]
    }
  ];

  const renderFeatureIcon = (feature: any) => {
    if (!feature.included) {
      return <X className="w-5 h-5 text-red-500" />;
    }
    
    if (feature.level === 2) {
      return <div className="flex"><Check className="w-5 h-5 text-green-600" /><Check className="w-5 h-5 text-green-600 -ml-2" /></div>;
    }
    
    return <Check className="w-5 h-5 text-green-600" />;
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-tanker text-3xl md:text-4xl text-black mb-4">
            Planos & Preços
          </h2>
          <p className="text-gray-600 text-lg font-montserrat">
            Escolha o melhor para seu restaurante
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-[#E53036] text-white px-4 py-2 rounded-full border-2 border-black shadow-[3px_4px_0px_#000000] font-bold text-sm">
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div 
                className={`bg-white rounded-2xl border-2 shadow-[6px_8px_0px_#000000] p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-[8px_12px_0px_#000000] ${
                  plan.highlight ? 'border-[#FEBA0C] border-4' : 'border-black'
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="font-tanker text-2xl text-black mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      {renderFeatureIcon(feature)}
                      <span className={`${feature.included ? 'text-black' : 'text-gray-400'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full py-4 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] font-regular text-lg transition-all duration-200 hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] active:translate-y-[6px] active:shadow-none ${
                    plan.highlight 
                      ? 'bg-[#FEBA0C] text-black' 
                      : 'bg-white text-black hover:bg-gray-50'
                  }`}
                >
                  {plan.name === 'Free' ? 'Ver mais' : 'Ver mais'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <div className="inline-block bg-gray-100 px-6 py-3 rounded-full border-2 border-black">
            <span className="font-bold">💡 Dica:</span> Mude de plano a qualquer momento!
          </div>
          <div className="text-gray-600">
            <p>✅ Sem taxa de setup • Sem fidelidade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;