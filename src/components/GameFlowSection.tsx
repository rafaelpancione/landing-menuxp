import React from 'react';
import AccessAppIcon from '../images/access-app.svg';
import NoLoginIcon from '../images/no-login.svg';
import PlayWinIcon from '../images/play.svg';
import RewardIcon from '../images/reward.svg';
import WhatsAppIcon from '../images/whatsapp-checkout.svg';
import patternRed from '../images/pattern-red.svg';

const GameFlowSection: React.FC = () => {
  const flowSteps = [
    { icon: AccessAppIcon, title: 'Acesso ao App', description: 'QR na mesa ou link para delivery e balcão' },
    { icon: NoLoginIcon, title: 'Pedir sem Login', description: 'ZERO cadastro necessário' },
    { icon: PlayWinIcon, title: 'Jogar e Ganhar', description: 'Desafios personalizados' },
    { icon: RewardIcon, title: 'Voltar e Recompensar', description: 'Fidelização automática' }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={patternRed}
          alt="Background pattern"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-tanker text-3xl md:text-4xl text-black mb-4">Fluxo Gamificado</h2>
          <p className="text-gray-600 text-lg font-montserrat">Experiência completa sem fricção!</p>
        </div>

        {/* Mobile: Vertical Layout */}
        <div className="lg:hidden space-y-8">
          {flowSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="p-6 transition-all duration-300 hover:scale-105">
                <img src={step.icon} alt={step.title} className="w-[200px] h-[200px] mx-auto mb-4" />
                <h3 className="font-bold text-lg text-black mb-2">{step.title}</h3>
                {/* Description + (optional) WhatsApp inline, directly adjacent */}
                <div className="flex flex-col items-center">
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  {step.title === 'Pedir sem Login' && (
                    <div className="inline-flex items-center space-x-2 justify-center text-green-700">
                      <img src={WhatsAppIcon} alt="Checkout com WhatsApp" className="h-6 w-6" />
                      <span className="font-bold whitespace-nowrap">Checkout com WhatsApp</span>
                    </div>
                  )}
                </div>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-1 h-8 bg-black rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal Layout (aligned with arrows) */}
        <div className="hidden lg:block">
          <div className="flex items-stretch justify-between">
            {flowSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 max-w-xs flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <img src={step.icon} alt={step.title} className="w-[200px] h-[200px] mx-auto mb-4" />
                  {/* Title with fixed line height */}
                  <h3 className="font-bold text-lg text-black mb-2 h-[28px] leading-[28px]">{step.title}</h3>
                  {/* Description + optional WhatsApp inside a single equal-height block */}
                  <div className="mb-2 leading-snug min-h-[128px] flex flex-col items-center justify-start">
                    <p className="text-gray-600 text-sm leading-snug line-clamp-4">{step.description}</p>
                    {step.title === 'Pedir sem Login' && (
                      <div className="mt-2 inline-flex items-center space-x-2 justify-center text-green-700">
                        <img src={WhatsAppIcon} alt="Checkout com WhatsApp" className="h-6 w-6" />
                        <span className="font-bold whitespace-nowrap">Checkout com WhatsApp</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right arrow between steps (pure black, aligned to icon center) */}
                {index < flowSteps.length - 1 && (
                  <div className="flex-shrink-0 mx-4 self-start h-[200px] flex items-center">
                    <svg width="64" height="16" viewBox="0 0 64 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="0" y1="8" x2="52" y2="8" stroke="#000000" strokeWidth="2" />
                      <polygon points="52,3 64,8 52,13" fill="#000000" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameFlowSection;
