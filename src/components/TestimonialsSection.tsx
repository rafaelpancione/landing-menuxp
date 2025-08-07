import React, { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Carlos Silva',
      business: 'Burger Premium',
      type: 'Dono hamburgueria',
      quote: 'Clientes agora jogam e pedem mais!',
      video: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
      result: '+65% pedidos em 30 dias',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Maria Santos',
      business: 'Pizza Express',
      type: 'Gerente pizzaria',
      quote: 'IA gerou R$1200 extra em 1 dia!',
      video: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
      result: 'R$ 18.500 receita adicional/mês',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'João Oliveira',
      business: 'Sushi Master',
      type: 'Proprietário',
      quote: 'App próprio sem pagar desenvolvedor!',
      video: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
      result: 'Economia de R$ 15.000 em desenvolvimento',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-tanker text-3xl md:text-4xl text-black mb-4">
            Depoimentos Reais 🎬
          </h2>
          <div className="inline-block bg-[#0097E0] text-white px-6 py-3 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] font-bold">
            Recomendado por ABRASEL • +572 restaurantes
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border-2 border-black shadow-[8px_12px_0px_#000000] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Video Thumbnail */}
              <div className="relative bg-gray-900 aspect-video md:aspect-square flex items-center justify-center overflow-hidden">
                <img 
                  src={testimonials[currentTestimonial].video}
                  alt={testimonials[currentTestimonial].business}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-[#E53036] rounded-full border-2 border-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </button>
                <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                  ▶️ {testimonials[currentTestimonial].type}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-12 h-12 rounded-full border-2 border-black"
                    />
                    <div className="text-4xl text-[#FEBA0C]">💬</div>
                  </div>
                  <blockquote className="text-xl font-bold text-black leading-relaxed">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="space-y-2">
                    <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].business}</div>
                    <div className="bg-[#FEBA0C] text-black px-4 py-2 rounded-lg font-bold text-sm inline-block">
                      📈 {testimonials[currentTestimonial].result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[4px_6px_0px_#000000] hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full border-2 border-black transition-all ${
                    index === currentTestimonial ? 'bg-[#E53036]' : 'bg-white'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[4px_6px_0px_#000000] hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;