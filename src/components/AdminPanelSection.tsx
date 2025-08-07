import React, { useState } from 'react';
import { BarChart3, Bot, Gamepad2 } from 'lucide-react';
import pattern from '../images/pattern.svg';

const AdminPanelSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Visão 360° do Negócio',
      emoji: '📋',
      description: 'Dashboards em tempo real com vendas, ticket médio e desempenho por canal (mesa, balcão e delivery).',
      hoverContent: 'Screenshot do painel Kanban com pedidos organizados por status: Novo, Preparando, Pronto, Entregue'
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Insights e Sugestões Inteligentes',
      emoji: '🤖',
      description: 'IA identifica padrões de compra e indica as promoções que vão aumentar seu faturamento.',
      badge: 'EXCLUSIVO',
      hoverContent: 'IA identificou que terça-feira às 15h tem baixa venda de sobremesas. Sugestão: Promoção 30% OFF!'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Gamificação para Retenção',
      emoji: '🎮',
      description: 'Defina missões, cupons e recompensas customizadas que reforçam a lealdade do cliente.',
      hoverContent: 'Exemplo: "Quiz do Chef" - cliente responde perguntas sobre culinária italiana e ganha desconto na pizza'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img 
          src={pattern}
          alt="Background pattern" 
          className="w-full h-full object-cover opacity-5"
        />
        {/* Red overlay tint above the pattern */}
        <div className="absolute inset-0 bg-menuxp-red mix-blend-multiply"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-tanker text-3xl md:text-4xl text-white mb-4">
            Controle total do seu negócio
          </h2>
          <p className="text-menuxp-yellow text-lg font-montserrat">
            Veja como o MenuXP transforma a gestão do seu restaurante com tecnologia de ponta e inteligência artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white/95 backdrop-blur-sm p-6 rounded-2xl border-2 border-black shadow-[6px_8px_0px_#000000] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[8px_12px_0px_#000000] h-full overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">{feature.emoji}</div>
                  <h3 className="font-bold text-xl text-black">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                  {feature.badge && (
                    <div className="inline-block bg-[#E53036] text-white px-3 py-1 rounded-full text-sm font-bold border border-black">
                      {feature.badge}
                    </div>
                  )}
                </div>

                {/* Hover Content */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-black/90 rounded-2xl border-2 border-black p-6 flex items-center justify-center transition-all duration-300">
                    <div className="text-center">
                      <div className="text-white text-sm leading-relaxed">
                        {feature.hoverContent}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Hint 
        <div className="text-center mt-12">
          <div className="inline-block bg-[#FEBA0C] text-black px-6 py-3 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] font-bold">
            💡 Passe o mouse nos cards para ver detalhes
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default AdminPanelSection;
