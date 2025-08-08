import React, { useState, useEffect, useRef } from 'react';
import { Upload, Palette, Type, Star, Users, Clock, ShoppingCart, Smartphone } from 'lucide-react';
import pattern from '../images/pattern.svg';


const WhiteLabelSection: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('flat');
  const [restaurantName, setRestaurantName] = useState('Meu Restaurante');
  const [selectedColor, setSelectedColor] = useState('#E53036');
  const [logo, setLogo] = useState('🍕');

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
      {/* Item Header */}
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className="font-bold text-black text-xs">Mega Burger</h4>
          <div className="flex items-center space-x-1 mt-1">
            <Star className="w-2 h-2 text-yellow-500 fill-current" />
            <span className="text-xs text-gray-600">4.8</span>
          </div>
        </div>
        {renderDiscountTag()}
      </div>
      
      {/* Description */}
      <p className="text-xs text-gray-600 leading-tight line-clamp-2">
        Hambúrguer com queijo e bacon
      </p>
      
      {/* Info Tags */}
      <div className="flex items-center space-x-1 text-xs">
        {renderInfoTag(<Users className="w-2 h-2" />, "2-3p")}
        {renderInfoTag(<Clock className="w-2 h-2" />, "15min")}
      </div>
      
      {/* Price and Button */}
      <div className="flex justify-between items-center">
        <div>
          <div className="text-xs text-gray-500 line-through">R$ 32,90</div>
          <div className="font-bold text-black text-sm">R$ 26,32</div>
        </div>
        {renderAddButton()}
      </div>
      
      {/* Status Indicator */}
      <div className="flex items-center space-x-1 pt-1">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <span className="text-xs text-green-600">Disponível</span>
      </div>
    </>
  );

  const renderDiscountTag = () => {
    const baseTagClasses = "px-1.5 py-0.5 text-xs font-bold text-white";
    
    switch (selectedTemplate) {
      case 'flat':
        return (
          <div 
            className={`${baseTagClasses} rounded-full border border-black`}
            style={{ backgroundColor: selectedColor }}
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
          >
            -20% OFF
          </div>
        );

      default:
        return (
          <div 
            className={`${baseTagClasses} rounded-full border border-black`}
            style={{ backgroundColor: selectedColor }}
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

  const renderAddButton = () => {
    const baseButtonClasses = "px-2 py-1 text-xs font-bold text-white flex items-center space-x-1 transition-all duration-200";
    
    switch (selectedTemplate) {
      case 'flat':
        return (
          <button 
            className={`${baseButtonClasses} rounded-full border border-black shadow-[1px_2px_0px_#000000] hover:translate-y-[1px] hover:shadow-[0px_1px_0px_#000000] active:translate-y-[2px] active:shadow-none`}
            style={{ backgroundColor: selectedColor }}
          >
            <ShoppingCart className="w-2 h-2" />
            <span>Add</span>
          </button>
        );

      case 'material':
        return (
          <button 
            className={`${baseButtonClasses} rounded-full shadow-md hover:shadow-lg`}
            style={{ 
              backgroundColor: selectedColor,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            <ShoppingCart className="w-2 h-2" />
            <span>Add</span>
          </button>
        );

      case 'neumorphism':
        return (
          <button 
            className={`${baseButtonClasses} rounded-full`}
            style={{ 
              backgroundColor: selectedColor,
              boxShadow: '3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff'
            }}
          >
            <ShoppingCart className="w-2 h-2" />
            <span>Add</span>
          </button>
        );

      case 'skeuomorphism':
        return (
          <button 
            className={`${baseButtonClasses} rounded-full border border-white/30`}
            style={{ 
              background: `linear-gradient(145deg, ${selectedColor}, ${selectedColor}dd)`,
              boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
            }}
          >
            <ShoppingCart className="w-2 h-2" />
            <span>Add</span>
          </button>
        );

      case 'glassmorphism':
        return (
          <button 
            className={`${baseButtonClasses} rounded-full border border-white/30`}
            style={{ 
              background: `rgba(0, 0, 0, 0.8)`,
              backdropFilter: 'blur(10px)'
            }}
          >
            <ShoppingCart className="w-2 h-2" />
            <span>Add</span>
          </button>
        );

      case 'brutalist':
        return (
          <button 
            className={`${baseButtonClasses} border-2 border-black transform -rotate-1 hover:rotate-0 overflow-hidden`}
            style={{ 
              backgroundColor: selectedColor,
              boxShadow: '2px 2px 0px #000000'
            }}
          >
            <ShoppingCart className="w-2 h-2" />
            <span>Add</span>
          </button>
        );

      default:
        return (
          <button 
            className={`${baseButtonClasses} rounded-full border border-black shadow-[1px_2px_0px_#000000] hover:translate-y-[1px] hover:shadow-[0px_1px_0px_#000000] active:translate-y-[2px] active:shadow-none`}
            style={{ backgroundColor: selectedColor }}
          >
            <ShoppingCart className="w-2 h-2" />
            <span>Add</span>
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
              <div className="w-16 h-16 bg-white rounded-full mx-auto border-2 border-black flex items-center justify-center text-3xl">
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
              alt="Background pattern" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Left Panel - Controls */}
          <div className="relative space-y-6 h-fit">
            <div ref={configCardRef} className="bg-white p-6 rounded-2xl border-2 border-black shadow-[6px_8px_0px_#000000]">
              <h3 className="font-bold text-xl mb-6 flex items-center">
                <Type className="mr-3" />
                Configurações
              </h3>
              
              <div className="space-y-6">
                {/* Template Selection */}
                <div>
                  <label className="block text-sm font-bold mb-2 flex items-center">
                    <Smartphone className="mr-2 w-4 h-4" />
                    Template de Design
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`p-2 rounded-lg border-2 border-black text-left transition-all hover:scale-105 ${
                          selectedTemplate === template.id
                            ? 'bg-[#FEBA0C] shadow-[3px_4px_0px_#000000]'
                            : 'bg-white hover:bg-gray-50'
                        }`}
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
                  />
                </div>

                {/* Logo Selection */}
                <div>
                  <label className="block text-sm font-bold mb-2 flex items-center">
                    <Upload className="mr-2 w-4 h-4" />
                    Logo
                  </label>
                  <div className="flex space-x-3">
                    {logos.map((logoOption) => (
                      <button
                        key={logoOption}
                        onClick={() => setLogo(logoOption)}
                        className={`w-12 h-12 text-2xl border-2 border-black rounded-lg transition-all hover:scale-110 ${
                          logo === logoOption ? 'bg-[#FEBA0C] shadow-[3px_4px_0px_#000000]' : 'bg-white'
                        }`}
                      >
                        {logoOption}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <label className="block text-sm font-bold mb-2 flex items-center">
                    <Palette className="mr-2 w-4 h-4" />
                    Cor Principal
                  </label>
                  <div className="flex space-x-3">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 border-2 border-black rounded-lg transition-all hover:scale-110 ${
                          selectedColor === color ? 'shadow-[3px_4px_0px_#000000] scale-110' : ''
                        }`}
                        style={{ backgroundColor: color }}
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
