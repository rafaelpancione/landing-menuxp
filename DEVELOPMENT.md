# Guia de Desenvolvimento - MenuXP Landing Page

## 🚀 Início Rápido

### 1. Configuração do Ambiente

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd landing-menuxp

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### 2. Estrutura de Desenvolvimento

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho
│   ├── HeroSection.tsx # Seção principal
│   └── ...             # Outros componentes
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🛠️ Comandos Úteis

### Desenvolvimento
```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza build de produção
npm run lint         # Executa linter
npm run lint --fix   # Corrige problemas de lint automaticamente
```

### Debugging
```bash
# Verificar tipos TypeScript
npx tsc --noEmit

# Analisar bundle
npm run build
npx vite-bundle-analyzer dist

# Verificar performance
npm run build
npx lighthouse http://localhost:4173
```

## 📝 Padrões de Código

### 1. Estrutura de Componente

```typescript
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
  // 1. Estados
  const [state, setState] = useState<StateType>(initialState);

  // 2. Effects
  useEffect(() => {
    // Side effects aqui
    return () => {
      // Cleanup aqui
    };
  }, [dependencies]);

  // 3. Handlers
  const handleClick = (event: React.MouseEvent) => {
    // Lógica do handler
  };

  // 4. Render
  return (
    <section className={`component-base ${className}`}>
      {/* JSX aqui */}
    </section>
  );
};

export default Component;
```

### 2. Nomenclatura

```typescript
// ✅ Correto
const HeroSection: React.FC = () => { ... }
const handleButtonClick = () => { ... }
const isVisible = true;
const userData = { ... };

// ❌ Incorreto
const heroSection = () => { ... }
const buttonClick = () => { ... }
const visible = true;
const data = { ... };
```

### 3. Props e Tipagem

```typescript
// ✅ Interface bem definida
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
}

// ✅ Props com valores padrão
const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  variant = 'primary',
  disabled = false,
  className = '' 
}) => {
  // Componente aqui
};
```

## 🎨 Estilização com Tailwind

### 1. Classes Utilitárias Comuns

```typescript
// Layout
"flex items-center justify-between"
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
"container mx-auto px-4"

// Espaçamento
"p-4 md:p-6 lg:p-8"
"m-2 md:m-4"
"space-y-4 md:space-y-6"

// Cores MenuXP
"bg-menuxp-yellow"
"text-menuxp-red"
"border-menuxp-blue"

// Sombras
"shadow-brutal"
"shadow-brutal-sm"
"shadow-brutal-lg"

// Animações
"transition-all duration-200"
"hover:translate-y-[3px]"
"active:translate-y-[6px]"
```

### 2. Responsividade

```typescript
// Mobile-first approach
<div className="
  text-sm          /* Mobile */
  md:text-base     /* Tablet */
  lg:text-lg       /* Desktop */
  xl:text-xl       /* Large Desktop */
">
  Conteúdo responsivo
</div>

// Grid responsivo
<div className="
  grid 
  grid-cols-1      /* Mobile: 1 coluna */
  md:grid-cols-2   /* Tablet: 2 colunas */
  lg:grid-cols-3   /* Desktop: 3 colunas */
  gap-4 
  md:gap-6 
  lg:gap-8
">
  {/* Items */}
</div>
```

### 3. Componentes Reutilizáveis

```typescript
// Botão primário
const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button 
    className="bg-menuxp-yellow text-black px-8 py-4 rounded-full border-2 border-black shadow-brutal font-bold text-lg transition-all duration-200 hover:translate-y-[3px] hover:shadow-brutal-sm active:translate-y-[6px] active:shadow-none"
    {...props}
  >
    {children}
  </button>
);

// Card padrão
const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-3xl border-2 border-black p-8 shadow-brutal ${className}`}>
    {children}
  </div>
);
```

## 🔧 Configurações

### 1. VSCode Extensions Recomendadas

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### 2. VSCode Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

### 3. Prettier Config

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

## 🧪 Testes

### 1. Estrutura de Testes

```typescript
// __tests__/components/HeroSection.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import HeroSection from '../../components/HeroSection';

describe('HeroSection', () => {
  it('should render main heading', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Seu restaurante merece/i)).toBeInTheDocument();
  });

  it('should handle CTA button click', () => {
    const mockOnClick = jest.fn();
    render(<HeroSection onCTAClick={mockOnClick} />);
    
    fireEvent.click(screen.getByText(/Experimentar o Editor/i));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
```

### 2. Testes de Integração

```typescript
// __tests__/integration/UserFlow.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../App';

describe('User Flow', () => {
  it('should navigate through all sections', () => {
    render(<App />);
    
    // Verificar se todas as seções estão presentes
    expect(screen.getByText(/White Label/i)).toBeInTheDocument();
    expect(screen.getByText(/Jogos/i)).toBeInTheDocument();
    expect(screen.getByText(/Preços/i)).toBeInTheDocument();
  });
});
```

## 🚀 Deploy

### 1. Build de Produção

```bash
# Gerar build
npm run build

# Verificar build
npm run preview

# Testar build localmente
npx serve dist
```

### 2. Deploy no Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### 3. Deploy no Netlify

```bash
# Build command
npm run build

# Publish directory
dist

# Deploy via drag & drop ou Git integration
```

## 🐛 Debugging

### 1. Problemas Comuns

#### Erro de Build
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install

# Verificar versões
node --version
npm --version
```

#### Problemas de Tipagem
```bash
# Verificar tipos
npx tsc --noEmit

# Verificar arquivo específico
npx tsc --noEmit src/components/HeroSection.tsx
```

#### Problemas de Lint
```bash
# Verificar problemas
npm run lint

# Corrigir automaticamente
npm run lint --fix

# Verificar arquivo específico
npx eslint src/components/HeroSection.tsx --fix
```

### 2. Debug no Browser

```typescript
// Console logs úteis
console.log('Component rendered:', props);
console.log('State changed:', state);

// Debug de performance
console.time('Component render');
// ... código do componente
console.timeEnd('Component render');
```

### 3. React DevTools

```typescript
// Profiler para performance
import { Profiler } from 'react';

const onRenderCallback = (id, phase, actualDuration) => {
  console.log(`${id} ${phase} took ${actualDuration}ms`);
};

<Profiler id="HeroSection" onRender={onRenderCallback}>
  <HeroSection />
</Profiler>
```

## 📊 Performance

### 1. Otimizações

```typescript
// Lazy loading
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

// Memoização
const MemoizedComponent = React.memo(Component);

// useMemo para cálculos pesados
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// useCallback para handlers
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);
```

### 2. Bundle Analysis

```bash
# Analisar bundle
npm run build
npx vite-bundle-analyzer dist

# Verificar tamanho dos chunks
ls -la dist/assets/
```

## 🔄 Git Workflow

### 1. Branches

```bash
# Branch principal
main

# Branch de desenvolvimento
develop

# Branches de feature
feature/nova-secao
feature/melhorias-ui

# Branches de hotfix
hotfix/correcao-critica
```

### 2. Commits

```bash
# Padrão de commits
feat: adiciona nova seção de depoimentos
fix: corrige responsividade no mobile
docs: atualiza documentação
style: ajusta espaçamentos
refactor: refatora componente HeroSection
test: adiciona testes para PricingSection
chore: atualiza dependências
```

### 3. Pull Requests

```markdown
## Descrição
Breve descrição das mudanças

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Checklist
- [ ] Código segue padrões do projeto
- [ ] Testes passando
- [ ] Documentação atualizada
- [ ] Build funcionando
```

## 📚 Recursos Úteis

### 1. Documentação
- [React Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev/)

### 2. Ferramentas
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript Playground](https://www.typescriptlang.org/play)

### 3. Comunidade
- [React Brasil](https://react-brasil.github.io/)
- [TypeScript Brasil](https://github.com/typescript-br)
- [Tailwind CSS Discord](https://discord.gg/7NF8GNe)

---

Este guia deve ser atualizado conforme o projeto evolui. Para dúvidas específicas, consulte a documentação técnica ou entre em contato com a equipe de desenvolvimento. 