import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    {
      label: 'Recursos',
      hasDropdown: true,
      dropdownItems: [
        { label: 'App White Label', href: '#white-label' },
        { label: 'Jogos Personalizados', href: '#games' },
        { label: 'IA de Receita', href: '#ai-revenue' },
        { label: 'Painel Admin', href: '#admin-panel' }
      ]
    },
    { label: 'Preços', href: '#pricing' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Suporte', href: '#support' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-menuxp-red backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-b-2 border-black' 
            : 'bg-menuxp-red backdrop-blur-sm'
        }`}
        style={{ marginTop: '8px' }} // Account for progress bar
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
  <Logo size="md" className="transition-all duration-300" />
</div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      className="flex items-center space-x-1 font-montserrat font-medium text-white hover:text-menuxp-yellow transition-colors py-2"
                      onClick={() => toggleDropdown(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="font-montserrat font-medium text-white hover:text-menuxp-yellow transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white border-2 border-black rounded-lg shadow-[6px_8px_0px_#000000] transition-all duration-200 ${
                      activeDropdown === item.label 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      <div className="py-2">
                        {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-3 font-montserrat text-black hover:bg-[#FEBA0C]/10 hover:text-[#E53036] transition-colors border-b border-gray-100 last:border-b-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button - Desktop 
            <div className="hidden lg:block">
              <button className="bg-[#E53036] text-white px-6 py-3 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] font-regular font-montserrat transition-all duration-200 hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] active:translate-y-[6px] active:shadow-none">
                Começar Grátis
              </button>
            </div>
            */}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-10 h-10 bg-[#FEBA0C] rounded-full border-2 border-black flex items-center justify-center shadow-[3px_4px_0px_#000000] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[1px_2px_0px_#000000]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t-2 border-black">
            <nav className="px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 font-montserrat font-medium text-black hover:bg-[#FEBA0C]/10 rounded-lg transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                            <a
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="block px-4 py-2 font-montserrat text-gray-700 hover:text-[#E53036] hover:bg-[#FEBA0C]/5 rounded-lg transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-3 font-montserrat font-medium text-black hover:bg-[#FEBA0C]/10 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA 
              <div className="pt-4 border-t border-gray-200">
                <button 
                  className="w-full bg-[#E53036] text-white px-6 py-3 rounded-full border-2 border-black shadow-[4px_6px_0px_#000000] font-bold font-montserrat transition-all duration-200 hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#000000] active:translate-y-[6px] active:shadow-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Começar Grátis
                </button>
              </div>
              */}
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;