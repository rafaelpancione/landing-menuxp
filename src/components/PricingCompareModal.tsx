import React, { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';

export type Feature = {
  name: string;
  included: boolean;
};

export type PlanComparison = {
  name: string;
  price: string;
  period: string;
  description: string;
  highlight?: boolean;
  badge?: string;
  featureList: Feature[];
};

interface PricingCompareModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  plans: PlanComparison[];
}

const PricingCompareModal: React.FC<PricingCompareModalProps> = ({
  open,
  onClose,
  title = 'Comparação de Planos',
  plans,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // Fechamento por ESC + foco inicial + bloqueio de scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => closeBtnRef.current?.focus());

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const renderIcon = (included: boolean) =>
    included ? (
      <Check className="w-5 h-5 text-green-600" aria-hidden="true" />
    ) : (
      <X className="w-5 h-5 text-red-500" aria-hidden="true" />
    );

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pricing-compare-title"
      onClick={(e) => {
        if (e.currentTarget === e.target) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Wrapper rolável para MOBILE */}
      <div className="relative flex items-start md:items-center justify-center w-full h-full p-4">
        {/* Dialog: altura responsiva e rolável */}
        <div
          className="relative w-full max-w-6xl bg-white rounded-2xl border-2 border-black shadow-[10px_12px_0px_#000000] overflow-hidden"
          role="document"
        >
          {/* Cabeçalho sticky garante botão sempre visível no mobile */}
          <div className="sticky top-0 z-10 bg-white border-b-2 border-black px-6 md:px-8 py-4 flex items-center justify-between">
            <h3
              id="pricing-compare-title"
              className="font-tanker text-2xl md:text-3xl text-black"
            >
              {title}
            </h3>

            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] bg-white font-bold transition-all duration-200 hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] active:translate-y-[6px] active:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              aria-label="Fechar modal"
            >
              Fechar
            </button>
          </div>

          {/* Conteúdo rolável */}
          <div className="max-h-[100dvh] overflow-y-auto p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border-2 p-6 shadow-[6px_8px_0px_#000000] ${
                    plan.highlight ? 'border-[#FEBA0C] border-4' : 'border-black'
                  }`}
                  aria-label={`Coluna do plano ${plan.name}`}
                >
                  <div className="text-center mb-6">
                    {plan.badge && (
                      <div className="mb-3 inline-block bg-[#E53036] text-white px-3 py-1 rounded-full border-2 border-black shadow-[3px_4px_0px_#000000] font-bold text-xs">
                        {plan.badge}
                      </div>
                    )}
                    <h4 className="font-tanker text-xl md:text-2xl text-black mb-1">
                      {plan.name}
                    </h4>
                    <div className="mb-1">
                      <span className="text-3xl font-bold text-black">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {plan.featureList.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        {renderIcon(f.included)}
                        <span className={`${f.included ? 'text-black' : 'text-gray-400'}`}>
                          {f.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Observações */}
            <div className="text-center mt-8">
              <span className="inline-block bg-gray-100 px-5 py-3 rounded-full border-2 border-black">
                <strong>💡 Dica:</strong> Você pode mudar de plano a qualquer momento.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCompareModal;
