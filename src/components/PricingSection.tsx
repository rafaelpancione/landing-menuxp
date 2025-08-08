import React, { useMemo, useState } from 'react';
import { Check, X } from 'lucide-react';
import PricingCompareModal, { PlanComparison } from './PricingCompareModal.tsx';

type CardFeature = {
  name: string;
  included: boolean;
  level?: 1 | 2;
};

type CardPlan = {
  name: 'Free' | 'ESSENCIAL' | 'Pro' | string;
  price: string;
  period: string;
  description: string;
  color: string;
  borderColor: string;
  highlight?: boolean;
  badge?: string;
  features: CardFeature[];
};

const PricingSection: React.FC = () => {
  // Plans para os CARDS (resumo, mantém o que já existia)
  const plans: CardPlan[] = useMemo(
    () => [
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
    ],
    []
  );

  // Dataset COMPLETO para COMPARAÇÃO no modal (mais itens do que os cards)
  const comparisonPlans: PlanComparison[] = useMemo(
    () => [
      {
        name: 'Free',
        price: 'R$ 0',
        period: '/mês',
        description: 'Para testar a ideia rapidamente.',
        highlight: false,
        badge: undefined,
        featureList: [
          { name: 'App White Label básico', included: true },
          { name: '1 tema de cores', included: true },
          { name: 'Menu digital estático', included: true },
          { name: 'Pedidos online', included: false },
          { name: 'Imagens em alta resolução', included: false },
          { name: 'Jogo de roleta (básico)', included: false },
          { name: 'Cupons e promoções', included: false },
          { name: 'IA de recomendação de pratos', included: false },
          { name: 'Upsell automático', included: false },
          { name: 'Carrinho abandonado (recuperação)', included: false },
          { name: 'Analytics avançado', included: false },
          { name: 'Integração com WhatsApp', included: false },
          { name: 'Suporte via chat (5x8)', included: false },
          { name: 'Onboarding guiado', included: true },
          { name: 'Exportação CSV', included: false }
        ]
      },
      {
        name: 'ESSENCIAL',
        price: 'R$ 97',
        period: '/mês',
        description: 'Tudo que precisa para vender todo dia.',
        highlight: true,
        badge: '🔥 POPULAR',
        featureList: [
          { name: 'App White Label completo', included: true },
          { name: '3 temas de cores + logo', included: true },
          { name: 'Menu digital dinâmico', included: true },
          { name: 'Pedidos online com pagamento', included: true },
          { name: 'Fotos HD e galeria', included: true },
          { name: 'Jogo de roleta + raspadinha', included: true },
          { name: 'Cupons e promoções', included: true },
          { name: 'IA de recomendação de pratos', included: true },
          { name: 'Upsell automático', included: true },
          { name: 'Carrinho abandonado (e-mail/WhatsApp)', included: true },
          { name: 'Analytics avançado (básico)', included: true },
          { name: 'Integração com WhatsApp', included: true },
          { name: 'Suporte via chat (5x8)', included: true },
          { name: 'Onboarding guiado + checklists', included: true },
          { name: 'Exportação CSV', included: true }
        ]
      },
      {
        name: 'Pro',
        price: 'R$ 197',
        period: '/mês',
        description: 'Escala, automações e inteligência de receita.',
        highlight: false,
        badge: undefined,
        featureList: [
          { name: 'App White Label completo + múltiplas marcas', included: true },
          { name: 'Temas ilimitados + fontes personalizadas', included: true },
          { name: 'Menu digital dinâmico + combos', included: true },
          { name: 'Pedidos online omnicanal', included: true },
          { name: 'CDN de imagens + otimização automática', included: true },
          { name: 'Suite de jogos (roleta, quiz, caça-níquel)', included: true },
          { name: 'Campanhas com segmentação', included: true },
          { name: 'IA de preço dinâmico e recomendação', included: true },
          { name: 'Upsell/cross-sell com A/B', included: true },
          { name: 'Recuperação de carrinho multi‑toque', included: true },
          { name: 'Analytics avançado + funil de vendas', included: true },
          { name: 'Integrações (ERP, POS, Delivery)', included: true },
          { name: 'Suporte prioritário (7x12)', included: true },
          { name: 'Onboarding assistido + treinamento', included: true },
          { name: 'Exportação CSV/Excel + API', included: true }
        ]
      }
    ],
    []
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const renderFeatureIcon = (feature: CardFeature) => {
    if (!feature.included) {
      return <X className="w-5 h-5 text-red-500" aria-hidden="true" />;
    }
    if (feature.level === 2) {
      return (
        <span className="flex" aria-label="Nível 2 incluído">
          <Check className="w-5 h-5 text-green-600" />
          <Check className="w-5 h-5 text-green-600 -ml-2" />
        </span>
      );
    }
    return <Check className="w-5 h-5 text-green-600" aria-hidden="true" />;
  };

  return (
    <section id="pricing" className="py-16 px-4 bg-white scroll-mt-24">
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
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full py-4 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] font-bold text-lg transition-all duration-200 hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] active:translate-y-[6px] active:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${
                    plan.highlight
                      ? 'bg-[#FEBA0C] text-black'
                      : 'bg-white text-black hover:bg-gray-50'
                  }`}
                  aria-haspopup="dialog"
                >
                  VER MAIS
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

      {/* Modal de comparação (agora importado) */}
      <PricingCompareModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Compare os Planos"
        plans={comparisonPlans}
      />
    </section>
  );
};

export default PricingSection;
