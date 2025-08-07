# MenuXP - Landing Page

## 📋 Visão Geral do Projeto

O **MenuXP** é uma plataforma white label que permite restaurantes criarem seus próprios aplicativos móveis em apenas 5 minutos, sem necessidade de desenvolvedores. A landing page apresenta as principais funcionalidades da plataforma, incluindo cardápio digital, pedidos online e jogos personalizados.

### 🎯 Principais Funcionalidades

- **Cardápio Digital**: Criação de cardápios interativos
- **Pedidos Online**: Sistema completo de pedidos
- **Jogos Personalizados**: Entretenimento para clientes
- **Painel Administrativo**: Gestão completa do negócio
- **IA para Receita**: Otimização de vendas com inteligência artificial
- **White Label**: Personalização completa da marca

### 🛠️ Tecnologias Utilizadas

- **React 18.3.1** - Biblioteca JavaScript para interfaces
- **TypeScript 5.5.3** - Tipagem estática para JavaScript
- **Vite 5.4.2** - Build tool e dev server
- **Tailwind CSS 3.4.1** - Framework CSS utilitário
- **Lucide React 0.344.0** - Biblioteca de ícones
- **PostCSS 8.4.35** - Processador CSS
- **ESLint 9.9.1** - Linter para qualidade de código

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd landing-menuxp
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em modo desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa o linter para verificar qualidade do código

## 📁 Estrutura de Pastas

```
landing-menuxp/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── Header.tsx       # Cabeçalho da página
│   │   ├── HeroSection.tsx  # Seção principal
│   │   ├── WhiteLabelSection.tsx
│   │   ├── GameFlowSection.tsx
│   │   ├── AdminPanelSection.tsx
│   │   ├── AIRevenueSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── FloatingFAQ.tsx
│   │   ├── Footer.tsx
│   │   └── ProgressBar.tsx
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Ponto de entrada
│   ├── index.css            # Estilos globais
│   └── vite-env.d.ts        # Tipos do Vite
├── index.html               # HTML base
├── package.json             # Dependências e scripts
├── tailwind.config.js       # Configuração do Tailwind
├── vite.config.ts           # Configuração do Vite
├── tsconfig.json            # Configuração do TypeScript
└── eslint.config.js         # Configuração do ESLint
```

## 🧩 Componentes

### Header.tsx
Cabeçalho responsivo com navegação, logo e botões de ação.

### HeroSection.tsx
Seção principal com:
- Social proof (572+ restaurantes)
- Título e descrição principais
- Botões de call-to-action
- Slider de apps personalizados
- Indicadores de confiança

### WhiteLabelSection.tsx
Apresenta as funcionalidades de personalização da marca.

### GameFlowSection.tsx
Demonstra os jogos personalizados disponíveis na plataforma.

### AdminPanelSection.tsx
Mostra o painel administrativo para gestão do negócio.

### AIRevenueSection.tsx
Apresenta as funcionalidades de IA para otimização de receita.

### TestimonialsSection.tsx
Depoimentos de clientes satisfeitos.

### PricingSection.tsx
Planos e preços da plataforma.

### FinalCTASection.tsx
Seção final de call-to-action.

### FloatingFAQ.tsx
FAQ flutuante para dúvidas rápidas.

### Footer.tsx
Rodapé com links, informações de contato e redes sociais.

### ProgressBar.tsx
Barra de progresso no topo da página.

## 🎨 Estilização

### Tailwind CSS
O projeto utiliza Tailwind CSS com configurações customizadas:

#### Cores Personalizadas
```javascript
colors: {
  'menuxp': {
    yellow: '#FEBA0C',
    red: '#E53036', 
    blue: '#0097E0',
    black: '#000000',
    white: '#FFFFFF',
  }
}
```

#### Fontes
- **Tanker**: 'Black Ops One' (fonte principal para títulos)
- **Montserrat**: Fonte secundária para textos

#### Animações
- `bounce-slow`: Bounce de 2s
- `pulse-slow`: Pulse de 3s

#### Sombras
- `brutal`: Efeito de sombra "brutal" com offset preto
- Variações: `brutal-sm`, `brutal-lg`, `brutal-xl`

### Design System
O projeto segue um design system consistente com:
- Paleta de cores definida
- Tipografia hierárquica
- Espaçamentos padronizados
- Efeitos de hover e interação

## ⚙️ Configurações

### Vite (vite.config.ts)
```typescript
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

### TypeScript
- Configuração para React
- Strict mode habilitado
- Path mapping configurado

### ESLint
- Configuração para React Hooks
- Regras de qualidade de código
- Integração com TypeScript

### PostCSS
- Autoprefixer para compatibilidade
- Integração com Tailwind CSS

## 📱 Responsividade

A landing page é totalmente responsiva, adaptando-se a:
- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Layout intermediário
- **Mobile**: Layout em coluna única com navegação otimizada

## 🚀 Performance

### Otimizações Implementadas
- **Lazy Loading**: Imagens carregadas sob demanda
- **Code Splitting**: Separação automática de código
- **Tree Shaking**: Remoção de código não utilizado
- **Minificação**: Arquivos otimizados para produção

### Métricas de Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Desenvolvimento

### Padrões de Código
- **TypeScript**: Tipagem estática em todos os componentes
- **Functional Components**: Uso de hooks React
- **Props Interface**: Definição clara de props
- **CSS-in-JS**: Estilos com Tailwind CSS

### Convenções de Nomenclatura
- **Componentes**: PascalCase (ex: `HeroSection`)
- **Arquivos**: PascalCase para componentes, camelCase para utilitários
- **Variáveis**: camelCase
- **Constantes**: UPPER_SNAKE_CASE

### Estrutura de Componentes
```typescript
import React from 'react';

interface ComponentProps {
  // Props tipadas
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Lógica do componente
  return (
    // JSX
  );
};

export default Component;
```

## 🧪 Testes

### Estrutura de Testes (Recomendada)
```
src/
├── __tests__/
│   ├── components/
│   │   ├── Header.test.tsx
│   │   ├── HeroSection.test.tsx
│   │   └── ...
│   └── utils/
└── __mocks__/
```

### Comandos de Teste
```bash
npm test              # Executa todos os testes
npm run test:watch    # Modo watch
npm run test:coverage # Cobertura de testes
```

## 📦 Deploy

### Build de Produção
```bash
npm run build
```

### Deploy no Vercel
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Deploy no Netlify
1. Conecte o repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

## 🔍 SEO

### Meta Tags
- Title otimizado para conversão
- Meta description com palavras-chave
- Open Graph tags para redes sociais
- Favicon configurado

### Estrutura Semântica
- Uso correto de tags HTML5
- Headings hierárquicos (h1, h2, h3)
- Alt text em todas as imagens
- Schema markup para rich snippets

## 🐛 Troubleshooting

### Problemas Comuns

#### Erro de Build
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install
```

#### Problemas de Tipagem
```bash
# Verificar tipos
npx tsc --noEmit
```

#### Problemas de Lint
```bash
# Corrigir automaticamente
npm run lint -- --fix
```

## 🤝 Contribuição

### Como Contribuir
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Commit
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação de código
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Tarefas de manutenção

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

## 📞 Suporte

Para suporte e dúvidas:
- **Email**: suporte@menuxp.com
- **WhatsApp**: (11) 99999-9999
- **Documentação**: [docs.menuxp.com](https://docs.menuxp.com)

---

**MenuXP** - Transformando restaurantes em negócios digitais desde 2024. 