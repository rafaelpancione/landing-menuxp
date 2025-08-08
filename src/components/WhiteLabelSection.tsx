import React, { useState, useEffect, useRef } from 'react';
import { Upload, Palette, Type, Star, Users, Clock, ShoppingCart, Smartphone } from 'lucide-react';
import pattern from '../images/pattern.svg';

const WhiteLabelSection: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('flat');
  const [restaurantName, setRestaurantName] = useState('Meu Restaurante');
  const [selectedColor, setSelectedColor] = useState('#E53036');
  const [logo, setLogo] = useState('🍕');

  const productImg = "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // === Height sync: make preview match Configurações box height ===
  const configCardRef = useRef<HTMLDivElement | null>(null);
  const [configHeight, setConfigHeight] = useState<number | null>(null);

  useEffect(() => {
    if (!configCardRef.current) return;
    const el = configCardRef.current;

    const measure = () => setConfigHeight(Math.round(el.getBoundingClientRect().height));
    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);

    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const templates = [
    { id: 'flat', name: 'Flat Design', description: 'Minimalista e limpo' },
    { id: 'material', name: 'Material Design', description: 'Elevação e sombras' },
    { id: 'neumorphism', name: 'Neumorphism', description: 'Soft UI moderno' },
    { id: 'skeuomorphism', name: 'Skeuomorphism', description: 'Realista e texturizado' },
    { id: 'glassmorphism', name: 'Glassmorphism', description: 'Efeito de vidro' },
    { id: 'brutalist', name: 'Brutalist UI', description: 'Bold e experimental' },
  ];

  const colors = ['#E53036', '#0097E0', '#FEBA0C'];
  const logos = ['🍕', '🍔', '🍣', '🥗', '🍰'];

  // Placeholder leve e acessível para a imagem do produto (data URI, não quebra build)


  const renderMenuCard = () => {
    const baseCardClasses = "text-left space-y-2 text-xs";
    
    switch (selectedTemplate) {
      case 'flat':
        return (
          <div className={`${baseCardClasses} bg-white/95 rounded-lg p-3 border border-black/20`}>
            {renderCardContent()}
          </div>
        );

      case 'material':
        return (
          <div className={`${baseCardClasses} bg-white rounded-lg p-3 shadow-lg`} style={{
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
          }}>
            {renderCardContent()}
          </div>
        );

      case 'neumorphism':
        return (
          <div className={`${baseCardClasses} rounded-lg p-3 overflow-hidden`} style={{
            backgroundColor: '#e0e5ec',
            boxShadow: '6px 6px 12px #a3b1c6, -6px -6px 12px #ffffff'
          }}>
            {renderCardContent()}
          </div>
        );

      case 'skeuomorphism':
        return (
          <div className={`${baseCardClasses} rounded-lg p-3 border border-white/30`} style={{
            background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)'
          }}>
            {renderCardContent()}
          </div>
        );

      case 'glassmorphism':
        return (
          <div className={`${baseCardClasses} rounded-lg p-3 border border-white/20`} style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            {renderCardContent()}
          </div>
        );

      case 'brutalist':
        return (
          <div className={`${baseCardClasses} bg-white p-3 border-2 border-black transform -rotate-1 overflow-hidden`} style={{
            boxShadow: '8px 8px 0px #000000'
          }}>
            {renderCardContent()}
          </div>
        );

      default:
        return (
          <div className={`${baseCardClasses} bg-white/95 rounded-lg p-3 border border-black/20`}>
            {renderCardContent()}
          </div>
        );
    }
  };

  const renderCardContent = () => (
    <>
      {/* Product Image + Discount Overlay */}
      <div className="relative w-full h-24 md:h-32 rounded-md overflow-hidden">
        <img
          src={productImg}
          alt="Imagem ilustrativa do produto Mega Burger"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-2 left-2">{renderDiscountTag()}</div>
      </div>

      {/* Item Header */}
      <div className="flex justify-between items-start mt-2">
        <div className="flex-1">
          <h4 className="font-bold text-black text-xs">Mega Burger</h4>
          <div className="flex items-center space-x-1 mt-1" aria-label="Avaliação 4.8 de 5">
            <Star className="w-2 h-2 text-yellow-500 fill-current" aria-hidden="true" />
            <span className="text-xs text-gray-600">4.8</span>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-xs text-gray-600 leading-tight line-clamp-2">
        Hambúrguer com queijo e bacon
      </p>
      
      {/* Info Tags */}
      <div className="flex items-center gap-1 text-xs" aria-label="Informações do produto">
        {renderInfoTag(<Users className="w-2 h-2" aria-hidden="true" />, "2-3p")}
        {renderInfoTag(<Clock className="w-2 h-2" aria-hidden="true" />, "15min")}
      </div>
      
      {/* Price */}
      <div aria-label="Preço">
        <div className="text-xs text-gray-500 line-through">R$ 32,90</div>
        <div className="font-bold text-black text-sm">R$ 26,32</div>
      </div>

      {/* Full-width Add Button */}
      <div className="pt-1">
        {renderAddButton({ fullWidth: true })}
      </div>
      
      {/* Status Indicator */}
      <div className="flex items-center gap-1 pt-1" aria-live="polite">
        <span className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></span>
        <span className="text-xs text-green-600">Disponível</span>
      </div>
    </>
  );

  const renderDiscountTag = () => {
    const baseTagClasses = "px-1.5 py-0.5 text-[10px] font-bold text-white";
    
    switch (selectedTemplate) {
      case 'flat':
        return (
          <div 
            className={`${baseTagClasses} rounded-full border border-black`}
            style={{ backgroundColor: selectedColor }}
            aria-label="Desconto de 20 por cento"
          >
            -20% OFF
          </div>
        );

      case 'material':
        return (
          <div 
            className={`${baseTagClasses} rounded-full shadow-md`}
            style={{ 
              backgroundColor: selectedColor,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
            aria-label="Desconto de 20 por cento"
          >
            -20% OFF
          </div>
        );

      case 'neumorphism':
        return (
          <div 
            className={`${baseTagClasses} rounded-full`}
            style={{ 
              backgroundColor: selectedColor,
              boxShadow: '3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff'
            }}
            aria-label="Desconto de 20 por cento"
          >
            -20% OFF
          </div>
        );

      case 'skeuomorphism':
        return (
          <div 
            className={`${baseTagClasses} rounded-full border border-white/30`}
            style={{ 
              background: `linear-gradient(145deg, ${selectedColor}, ${selectedColor}dd)`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
            }}
            aria-label="Desconto de 20 por cento"
          >
            -20% OFF
          </div>
        );

      case 'glassmorphism':
        return (
          <div 
            className={`${baseTagClasses} rounded-full border border-white/30`}
            style={{ 
              background: `${selectedColor}aa`,
              backdropFilter: 'blur(10px)'
            }}
            aria-label="Desconto de 20 por cento"
          >
            -20% OFF
          </div>
        );

      case 'brutalist':
        return (
          <div 
            className={`${baseTagClasses} border-2 border-black transform rotate-2`}
            style={{ 
              backgroundColor: selectedColor,
              boxShadow: '2px 2px 0px #000000'
            }}
            aria-label="Desconto de 20 por cento"
          >
            -20% OFF
          </div>
        );

      default:
        return (
          <div 
            className={`${baseTagClasses} rounded-full border border-black`}
            style={{ backgroundColor: selectedColor }}
            aria-label="Desconto de 20 por cento"
          >
            -20% OFF
          </div>
        );
    }
  };

  const renderInfoTag = (icon: React.ReactNode, text: string) => {
    const baseInfoClasses = "flex items-center space-x-1 px-1.5 py-0.5 rounded-full";
    
    switch (selectedTemplate) {
      case 'flat':
        return (
          <div className={`${baseInfoClasses} bg-gray-100`}>
            {icon}
            <span>{text}</span>
          </div>
        );

      case 'material':
        return (
          <div className={`${baseInfoClasses} bg-gray-100 shadow-sm`}>
            {icon}
            <span>{text}</span>
          </div>
        );

      case 'neumorphism':
        return (
          <div className={`${baseInfoClasses}`} style={{
            backgroundColor: '#e0e5ec',
            boxShadow: 'inset 2px 2px 4px #a3b1c6, inset -2px -2px 4px #ffffff'
          }}>
            {icon}
            <span>{text}</span>
          </div>
        );

      case 'skeuomorphism':
        return (
          <div className={`${baseInfoClasses} bg-gray-200 border border-gray-300`} style={{
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
          }}>
            {icon}
            <span>{text}</span>
          </div>
        );

      case 'glassmorphism':
        return (
          <div className={`${baseInfoClasses} border border-white/20`} style={{
            background: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            {icon}
            <span>{text}</span>
          </div>
        );

      case 'brutalist':
        return (
          <div className={`${baseInfoClasses} bg-white border-2 border-black`}>
            {icon}
            <span>{text}</span>
          </div>
        );

      default:
        return (
          <div className={`${baseInfoClasses} bg-gray-100`}>
            {icon}
            <span>{text}</span>
          </div>
        );
    }
  };

  // Agora aceita { fullWidth } para ocupar 100% quando necessário
  const renderAddButton = ({ fullWidth = false }: { fullWidth?: boolean } = {}) => {
    const baseButtonClasses =
      "px-3 py-2 text-xs font-bold text-white flex items-center justify-center gap-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black";

    const sizeAndBorderFlat =
      "rounded-full border border-black shadow-[1px_2px_0px_#000000] hover:translate-y-[1px] hover:shadow-[0px_1px_0px_#000000] active:translate-y-[2px] active:shadow-none";
    const widthClass = fullWidth ? "w-full" : "";

    switch (selectedTemplate) {
      case 'flat':
        return (
          <button 
            className={`${baseButtonClasses} ${sizeAndBorderFlat} ${widthClass}`}
            style={{ backgroundColor: selectedColor }}
            aria-label="Adicionar Mega Burger ao carrinho"
          >
            <ShoppingCart className="w-3 h-3" aria-hidden="true" />
            <span>Adicionar</span>
          </button>
        );

      case 'material':
        return (
          <button 
            className={`${baseButtonClasses} rounded-full shadow-md hover:shadow-lg ${widthClass}`}
            style={{ 
              backgroundColor: selectedColor,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
            aria-label="Adicionar Mega Burger ao carrinho"
          >
            <ShoppingCart className="w-3 h-3" aria-hidden="true" />
            <span>Adicionar</span>
          </button>
        );

      case 'neumorphism':
        return (
          <button 
            className={`${baseButtonClasses} rounded-full ${widthClass}`}
            style={{ 
              backgroundColor: selectedColor,
              boxShadow: '3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff'
            }}
            aria-label="Adicionar Mega Burger ao carrinho"
          >
            <ShoppingCart className="w-3 h-3" aria-hidden="true" />
            <span>Adicionar</span>
          </button>
        );

      case 'skeuomorphism':
        return (
          <button 
            className={`${baseButtonClasses} rounded-full border border-white/30 ${widthClass}`}
            style={{ 
              background: `linear-gradient(145deg, ${selectedColor}, ${selectedColor}dd)`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
            }}
            aria-label="Adicionar Mega Burger ao carrinho"
          >
            <ShoppingCart className="w-3 h-3" aria-hidden="true" />
            <span>Adicionar</span>
          </button>
        );

      case 'glassmorphism':
        return (
          <button 
            className={`${baseButtonClasses} rounded-full border border-white/30 ${widthClass}`}
            style={{ 
              background: `rgba(0, 0, 0, 0.8)`,
              backdropFilter: 'blur(10px)'
            }}
            aria-label="Adicionar Mega Burger ao carrinho"
          >
            <ShoppingCart className="w-3 h-3" aria-hidden="true" />
            <span>Adicionar</span>
          </button>
        );

      case 'brutalist':
        return (
          <button 
            className={`${baseButtonClasses} border-2 border-black transform -rotate-1 hover:rotate-0 overflow-hidden ${widthClass}`}
            style={{ 
              backgroundColor: selectedColor,
              boxShadow: '2px 2px 0px #000000'
            }}
            aria-label="Adicionar Mega Burger ao carrinho"
          >
            <ShoppingCart className="w-3 h-3" aria-hidden="true" />
            <span>Adicionar</span>
          </button>
        );

      default:
        return (
          <button 
            className={`${baseButtonClasses} ${sizeAndBorderFlat} ${widthClass}`}
            style={{ backgroundColor: selectedColor }}
            aria-label="Adicionar Mega Burger ao carrinho"
          >
            <ShoppingCart className="w-3 h-3" aria-hidden="true" />
            <span>Adicionar</span>
          </button>
        );
    }
  };

  const renderTemplatePreview = () => {
    const baseClasses = "w-full h-full rounded-2xl p-6 transition-all duration-300";
    
    switch (selectedTemplate) {
      case 'flat':
        return (
          <div className={baseClasses} style={{ backgroundColor: selectedColor }}>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white rounded-full mx-auto border-2 border-black flex items-center justify-center text-3xl" aria-hidden="true">
                {logo}
              </div>
              <h3 className="text-white font-bold text-lg break-words">
                {restaurantName}
              </h3>
              {renderMenuCard()}
            </div>
          </div>
        );

      case 'material':
        return (
          <div className={baseClasses} style={{ backgroundColor: '#fafafa' }}>
            <div className="text-center space-y-4">
              <div 
                className="w-16 h-16 rounded-full mx-auto shadow-lg flex items-center justify-center text-2xl"
                style={{ backgroundColor: selectedColor + '20', color: selectedColor }}
                aria-hidden="true"
              >
                {logo}
              </div>
              <h3 className="font-medium text-lg" style={{ color: selectedColor }}>
                {restaurantName}
              </h3>
              {renderMenuCard()}
            </div>
          </div>
        );

      case 'neumorphism':
        return (
          <div className={baseClasses} style={{ backgroundColor: '#e0e5ec' }}>
            <div className="text-center space-y-4">
              <div 
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl"
                style={{ 
                  backgroundColor: '#e0e5ec',
                  boxShadow: '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
                  color: selectedColor 
                }}
                aria-hidden="true"
              >
                {logo}
              </div>
              <h3 className="font-medium text-lg" style={{ color: selectedColor }}>
                {restaurantName}
              </h3>
              {renderMenuCard()}
            </div>
          </div>
        );

      case 'skeuomorphism':
        return (
          <div className={baseClasses} style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M0 0h20v20H0z"/%3E%3C/g%3E%3C/svg%3E")'
          }}>
            <div className="text-center space-y-4">
              <div 
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl border-2 border-white/30"
                style={{ 
                  background: `linear-gradient(145deg, ${selectedColor}aa, ${selectedColor}dd)`,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
                  color: 'white'
                }}
                aria-hidden="true"
              >
                {logo}
              </div>
              <h3 className="font-bold text-lg text-white drop-shadow-lg">
                {restaurantName}
              </h3>
              {renderMenuCard()}
            </div>
          </div>
        );

      case 'glassmorphism':
        return (
          <div className={baseClasses} style={{ 
            background: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))`,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <div className="text-center space-y-4">
              <div 
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-2xl border border-white/30"
                style={{ 
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  color: selectedColor 
                }}
                aria-hidden="true"
              >
                {logo}
              </div>
              <h3 className="font-medium text-lg" style={{ color: selectedColor }}>
                {restaurantName}
              </h3>
              {renderMenuCard()}
            </div>
          </div>
        );

      case 'brutalist':
        return (
          <div className={`${baseClasses} bg-black overflow-hidden`}>
            <div className="text-center space-y-4">
              <div 
                className="w-16 h-16 mx-auto flex items-center justify-center text-2xl border-4 border-white transform -rotate-2"
                style={{ 
                  backgroundColor: selectedColor,
                  color: 'white'
                }}
                aria-hidden="true"
              >
                {logo}
              </div>
              <h3 className="font-black text-lg text-white transform rotate-1" style={{ 
                fontFamily: 'Arial Black, sans-serif',
                letterSpacing: '2px'
              }}>
                {restaurantName.toUpperCase()}
              </h3>
              {renderMenuCard()}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="white-label" className="py-16 px-4 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-tanker text-3xl md:text-4xl text-black mb-4">
            DO <span className="text-menuxp-yellow">SEU</span> JEITO, <span className="text-menuxp-yellow">SEM</span> COMPLICAÇÃO
          </h2>
          <div className="inline-block text-black px-6 py-3 font-bold">
            Teste agora mesmo e veja como é fácil seu app ganhar vida em segundos!
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none select-none">
             <img 
              src={pattern}
              alt="Textura decorativa de fundo" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Left Panel - Controls */}
          <div className="relative space-y-6 h-fit">
            <div ref={configCardRef} className="bg-white p-6 rounded-2xl border-2 border-black shadow-[6px_8px_0px_#000000]">
              <h3 className="font-bold text-xl mb-6 flex items-center">
                <Type className="mr-3" aria-hidden="true" />
                Configurações
              </h3>
              
              <div className="space-y-6">
                {/* Template Selection */}
                <div>
                  <label className="block text-sm font-bold mb-2 flex items-center">
                    <Smartphone className="mr-2 w-4 h-4" aria-hidden="true" />
                    Template de Design
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`p-2 rounded-lg border-2 border-black text-left transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                          selectedTemplate === template.id
                            ? 'bg-[#FEBA0C] shadow-[3px_4px_0px_#000000]'
                            : 'bg-white hover:bg-gray-50'
                        }`}
                        aria-pressed={selectedTemplate === template.id}
                      >
                        <div className="font-regular text-xs">{template.name}</div>
                        <div className="text-xs text-gray-600 mt-1">{template.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Restaurant Name */}
                <div>
                  <label className="block text-sm font-bold mb-2">Nome do Restaurante</label>
                  <input
                    type="text"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    className="w-full p-3 border-2 border-black rounded-lg focus:outline-none focus:border-[#FEBA0C] transition-colors"
                    placeholder="Ex: Burger Palace"
                    aria-label="Nome do Restaurante"
                  />
                </div>

                {/* Logo Selection */}
                <div>
                  <label className="block text-sm font-bold mb-2 flex items-center">
                    <Upload className="mr-2 w-4 h-4" aria-hidden="true" />
                    Logo
                  </label>
                  <div className="flex space-x-3">
                    {logos.map((logoOption) => (
                      <button
                        key={logoOption}
                        onClick={() => setLogo(logoOption)}
                        className={`w-12 h-12 text-2xl border-2 border-black rounded-lg transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                          logo === logoOption ? 'bg-[#FEBA0C] shadow-[3px_4px_0px_#000000]' : 'bg-white'
                        }`}
                        aria-pressed={logo === logoOption}
                        aria-label={`Selecionar logo ${logoOption}`}
                      >
                        {logoOption}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <label className="block text-sm font-bold mb-2 flex items-center">
                    <Palette className="mr-2 w-4 h-4" aria-hidden="true" />
                    Cor Principal
                  </label>
                  <div className="flex space-x-3">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 border-2 border-black rounded-lg transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                          selectedColor === color ? 'shadow-[3px_4px_0px_#000000] scale-110' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        aria-pressed={selectedColor === color}
                        aria-label={`Selecionar cor ${color}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Live Preview */}
          <div className="relative z-10 flex flex-col">
            <div className="flex items-center justify-center">
              <div
                className="w-72 bg-black rounded-3xl p-4 shadow-lg"
                style={{ height: configHeight ?? 580 }}
                aria-label="Pré-visualização do aplicativo"
              >
                {renderTemplatePreview()}
              </div>
            </div>               
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelSection;
