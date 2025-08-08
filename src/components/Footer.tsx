import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';
import GameficareLogo from '../images/logo-gameficare.svg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Legal',
      links: [
        { label: 'Termos de Uso', href: '/termos' },
        { label: 'Política de Privacidade', href: '/privacidade' },
        { label: 'LGPD', href: '/lgpd' },
        { label: 'Cookies', href: '/cookies' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram', color: '#E4405F' }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Telefone',
      value: '(47) 9995-5711',
      href: 'tel:+554799955711'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'contato@menuxp.com.br',
      href: 'mailto:contato@menuxp.com.br'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Endereço',
      value: 'Apucarana, PR - Brasil',
      href: '#'
    }
  ];

  return (
    <footer id="contato" className="bg-black text-white scroll-mt-24">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-tanker text-2xl md:text-3xl text-white mb-4">
                Fique por dentro das novidades! 📧
              </h3>
              <p className="text-gray-300 font-montserrat">
                Receba dicas exclusivas, cases de sucesso e novos recursos direto no seu email.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="flex-1 px-4 py-3 rounded-full border-2 border-white bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#FEBA0C] transition-colors font-montserrat"
                />
                <button className="bg-[#FEBA0C] text-black px-6 py-3 rounded-full border-2 border-white shadow-[4px_6px_0px_#FFFFFF] font-regular font-montserrat transition-all duration-200 hover:translate-y-[3px] hover:shadow-[2px_3px_0px_#FFFFFF] active:translate-y-[6px] active:shadow-none whitespace-nowrap">
                  Inscrever-se
                </button>
              </div>
              <p className="text-xs text-gray-400 font-montserrat">
                Sem spam. Cancele quando quiser. 100% gratuito.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Dois blocos alinhados nas extremidades: (esq) Logo+descrição+contatos | (dir) Legal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bloco esquerdo */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Logo variant="white" size="lg" />
            </div>
            <p className="text-gray-300 font-montserrat mb-6 leading-relaxed">
              A plataforma completa para restaurantes criarem seus próprios apps com jogos personalizados e IA que gera receita.
            </p>

            {/* Contatos em linha (um ao lado do outro) */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-[#FEBA0C] transition-colors group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-[#FEBA0C] group-hover:text-black transition-all">
                    {contact.icon}
                  </div>
                  <span className="font-montserrat text-sm whitespace-nowrap">{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Bloco direito — Legal alinhado à direita */}
          <div className="lg:justify-self-end w-full lg:w-auto">
            {footerSections.map((section, index) => (
              <div key={index} className="text-left lg:text-right">
                <h4 className="font-bold text-white mb-4 font-montserrat">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-[#FEBA0C] transition-colors font-montserrat text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-800 rounded-full border-2 border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FEBA0C] hover:bg-[#FEBA0C] hover:text-black transition-all duration-200 hover:scale-110 hover:shadow-[3px_4px_0px_#FFFFFF]"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  🔒
                </div>
                <span className="text-sm font-montserrat">SSL Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-montserrat text-center md:text-left">
              © {currentYear} MenuXP. Todos os direitos reservados.
            </div>

            <div className="flex items-center space-x-3 text-gray-400 text-sm font-montserrat">
              <span>Desenvolvido por</span>
              <a
                href="https://gameficare.studio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gameficare Studio"
                className="inline-flex items-center"
              >
                <img src={GameficareLogo} alt="Gameficare Studio" className="h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
