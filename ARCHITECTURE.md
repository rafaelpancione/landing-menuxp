# Arquitetura Técnica - MenuXP Landing Page

## 🏗️ Visão Geral da Arquitetura

O projeto MenuXP Landing Page segue uma arquitetura moderna baseada em componentes React com TypeScript, utilizando Vite como build tool e Tailwind CSS para estilização. A arquitetura é modular, escalável e segue as melhores práticas de desenvolvimento front-end.

## 📐 Padrão Arquitetural

### Component-Based Architecture
```
App (Container Principal)
├── ProgressBar (Global)
├── Header (Navigation)
├── Main Content
│   ├── HeroSection
│   ├── WhiteLabelSection
│   ├── GameFlowSection
│   ├── AdminPanelSection
│   ├── AIRevenueSection
│   ├── TestimonialsSection
│   ├── PricingSection
│   └── FinalCTASection
├── FloatingFAQ (Overlay)
└── Footer (Global)
```

### Fluxo de Dados
- **Unidirecional**: Props down, events up
- **Local State**: useState para estado local dos componentes
- **Global State**: Não necessário (landing page estática)
- **Side Effects**: useEffect para interações externas

## 🧩 Estrutura de Componentes

### Tipos de Componentes

#### 1. Layout Components
- **Header**: Navegação e branding
- **Footer**: Links e informações de contato
- **ProgressBar**: Indicador de progresso global

#### 2. Section Components
- **HeroSection**: Seção principal com CTA
- **WhiteLabelSection**: Apresentação de features
- **GameFlowSection**: Demonstração de jogos
- **AdminPanelSection**: Painel administrativo
- **AIRevenueSection**: IA e otimização
- **TestimonialsSection**: Depoimentos
- **PricingSection**: Planos e preços
- **FinalCTASection**: Call-to-action final

#### 3. UI Components
- **FloatingFAQ**: FAQ flutuante interativo

### Padrão de Implementação

```typescript
// Estrutura padrão de um componente
import React, { useState, useEffect } from 'react';
import { Icon } from 'lucide-react';

interface ComponentProps {
  title?: string;
  description?: string;
  className?: string;
}

const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  className = '' 
}) => {
  const [state, setState] = useState<StateType>(initialState);

  useEffect(() => {
    // Side effects
  }, [dependencies]);

  const handleEvent = (event: EventType) => {
    // Event handlers
  };

  return (
    <section className={`component-base ${className}`}>
      {/* JSX Structure */}
    </section>
  );
};

export default Component;
```

## 🎨 Sistema de Design

### Design Tokens

#### Cores
```typescript
const colors = {
  primary: {
    yellow: '#FEBA0C',
    red: '#E53036',
    blue: '#0097E0',
  },
  neutral: {
    black: '#000000',
    white: '#FFFFFF',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      500: '#6B7280',
      700: '#374151',
      900: '#111827',
    }
  }
};
```

#### Tipografia
```typescript
const typography = {
  fonts: {
    tanker: ['Black Ops One', 'cursive'],
    montserrat: ['Montserrat', 'sans-serif'],
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  }
};
```

#### Espaçamentos
```typescript
const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
};
```

### Componentes Base

#### Botões
```typescript
// Padrão de botão primário
<button className="bg-menuxp-yellow text-black px-8 py-4 rounded-full border-2 border-black shadow-brutal font-bold text-lg transition-all duration-200 hover:translate-y-[3px] hover:shadow-brutal-sm active:translate-y-[6px] active:shadow-none">
  Texto do Botão
</button>

// Padrão de botão secundário
<button className="bg-transparent text-black px-8 py-4 rounded-full border-2 border-black shadow-brutal font-bold text-lg transition-all duration-200 hover:translate-y-[3px] hover:shadow-brutal-sm hover:bg-white active:translate-y-[6px] active:shadow-none">
  Texto do Botão
</button>
```

#### Cards
```typescript
// Padrão de card
<div className="bg-white rounded-3xl border-2 border-black p-8 shadow-brutal">
  {/* Conteúdo do card */}
</div>
```

## 🔧 Configuração de Build

### Vite Configuration
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Evita problemas de SSR
  },
  build: {
    target: 'es2015', // Suporte a navegadores mais antigos
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
  },
});
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 📱 Responsividade

### Breakpoints
```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Estratégia Mobile-First
```typescript
// Exemplo de implementação mobile-first
<div className="
  grid 
  grid-cols-1          /* Mobile: 1 coluna */
  md:grid-cols-2       /* Tablet: 2 colunas */
  lg:grid-cols-3       /* Desktop: 3 colunas */
  gap-4 
  md:gap-6 
  lg:gap-8
">
  {/* Conteúdo */}
</div>
```

## 🚀 Performance

### Otimizações Implementadas

#### 1. Code Splitting
```typescript
// Lazy loading de componentes pesados
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyComponent />
    </Suspense>
  );
}
```

#### 2. Image Optimization
```typescript
// Imagens otimizadas com lazy loading
<img 
  src="image.jpg" 
  alt="Description"
  loading="lazy"
  className="w-full h-auto"
/>
```

#### 3. Bundle Analysis
```bash
# Análise do bundle
npm run build
npx vite-bundle-analyzer dist
```

### Métricas de Performance

#### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

#### Lighthouse Scores
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

## 🔒 Segurança

### Headers de Segurança
```html
<!-- Meta tags de segurança -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```

### CSP (Content Security Policy)
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
">
```

## 🧪 Testes

### Estratégia de Testes

#### 1. Testes Unitários
```typescript
// Exemplo de teste unitário
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('should render the main heading', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Seu restaurante merece/i)).toBeInTheDocument();
  });

  it('should render CTA buttons', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Experimentar o Editor/i)).toBeInTheDocument();
    expect(screen.getByText(/Ver Demo/i)).toBeInTheDocument();
  });
});
```

#### 2. Testes de Integração
```typescript
// Teste de fluxo completo
describe('User Journey', () => {
  it('should allow user to navigate through sections', () => {
    render(<App />);
    
    // Navegar para seção de preços
    fireEvent.click(screen.getByText(/Preços/i));
    expect(screen.getByText(/Planos/i)).toBeInTheDocument();
    
    // Clicar em CTA
    fireEvent.click(screen.getByText(/Começar Agora/i));
    // Verificar redirecionamento ou modal
  });
});
```

#### 3. Testes E2E
```typescript
// Teste E2E com Playwright
test('complete user flow', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('MenuXP');
  
  await page.click('text=Experimentar o Editor');
  await expect(page).toHaveURL(/.*editor/);
});
```

## 📊 Monitoramento

### Analytics
```typescript
// Google Analytics 4
const GA_TRACKING_ID = 'G-XXXXXXXXXX';

// Event tracking
const trackEvent = (eventName: string, parameters?: object) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
};

// Page view tracking
const trackPageView = (pagePath: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', GA_TRACKING_ID, {
      page_path: pagePath,
    });
  }
};
```

### Error Tracking
```typescript
// Error boundary
class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Enviar erro para serviço de monitoramento
    console.error('Error caught by boundary:', error, errorInfo);
  }
}
```

## 🔄 CI/CD

### GitHub Actions
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📈 Escalabilidade

### Estratégias de Escala

#### 1. Component Reusability
- Componentes modulares e reutilizáveis
- Props bem definidas e tipadas
- Composição sobre herança

#### 2. State Management
- Estado local quando possível
- Context API para estado global (se necessário)
- Redux Toolkit para aplicações complexas

#### 3. Code Splitting
- Lazy loading de rotas
- Dynamic imports para componentes pesados
- Vendor chunk separation

#### 4. Caching Strategy
- Service Worker para cache offline
- CDN para assets estáticos
- Browser caching headers

## 🔮 Roadmap Técnico

### Fase 1 (Atual)
- ✅ Landing page responsiva
- ✅ SEO otimizado
- ✅ Performance otimizada

### Fase 2 (Próximas)
- 🔄 PWA (Progressive Web App)
- 🔄 Testes automatizados
- 🔄 Monitoramento de performance

### Fase 3 (Futuro)
- 📋 Internacionalização (i18n)
- 📋 Acessibilidade avançada
- 📋 Micro-frontends
- 📋 Server-side rendering

---

Esta documentação técnica serve como guia para desenvolvedores que trabalham no projeto MenuXP Landing Page, fornecendo uma visão completa da arquitetura, padrões e estratégias implementadas. 