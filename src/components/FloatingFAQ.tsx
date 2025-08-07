import React, { useState } from 'react';
import { HelpCircle, X, MessageCircle, Video, CreditCard } from 'lucide-react';

const FloatingFAQ: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      icon: <CreditCard className="w-5 h-5" />,
      question: 'Mudar planos?',
      answer: 'Sim, a qualquer momento!',
      color: '#FEBA0C'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      question: 'Suporte?',
      answer: 'Chat 24h no app',
      color: '#0097E0'
    },
    {
      icon: <Video className="w-5 h-5" />,
      question: 'Treinamento?',
      answer: 'Vídeos explicativos',
      color: '#E53036'
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* FAQ Panel */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl border-2 border-black shadow-[6px_8px_0px_#000000] p-6 w-80 max-w-[calc(100vw-3rem)]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Dúvidas Frequentes</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full border border-black flex items-center justify-center text-white"
                  style={{ backgroundColor: faq.color }}
                >
                  {faq.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm text-black">{faq.question}</div>
                  <div className="text-gray-600 text-sm">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <button className="w-full bg-[#FEBA0C] text-black py-3 rounded-full border-2 border-black shadow-[3px_4px_0px_#000000] font-bold text-sm transition-all duration-200 hover:translate-y-[2px] hover:shadow-[1px_2px_0px_#000000]">
              💬 Chat com Especialista
            </button>
          </div>
        </div>
      )}

      {/* FAQ Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] flex items-center justify-center font-bold text-xl transition-all duration-200 hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] active:translate-y-[6px] active:shadow-none ${
          isOpen ? 'bg-[#E53036] text-white' : 'bg-[#FEBA0C] text-black'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <HelpCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingFAQ;