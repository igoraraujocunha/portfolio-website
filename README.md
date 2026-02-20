# 🌐Meu Portfólio (Igor de Araujo)

Desenvolvido do zero para aplicar conceitos avançados de arquitetura e tecnologias de ponta, este portfólio reflete minha trajetória acadêmica e técnica. Como Desenvolvedor Fullstack, projetei uma aplicação que equilibra performance extrema, acessibilidade (a11y) e uma interface intuitiva, garantindo uma experiência de uso sólida e profissional.

## 🛠️ Tech Stack

Este projeto foi desenvolvido utilizando tecnologias modernas para garantir performance e internacionalização:

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Biblioteca Base:** [React 19](https://react.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
* **Animações:** [Framer Motion](https://www.framer.com/motion/)
* **Gerenciador de Pacotes:** [pnpm](https://pnpm.io/)
* **Internacionalização (i18n):** Suporte nativo para PT/EN
* **Deploy:** [Netlify](https://www.netlify.com/)

## 📂 Estrutura do Projeto

A arquitetura de diretórios segue os padrões modernos do Next.js (App Router), organizada de forma modular para maximizar a escalabilidade e a separação de responsabilidades:

```bash
portfolio-website/
├── app/                # Rotas da aplicação
│   ├── archive/        # Página de arquivos de projetos
│   ├── resume/         # Visualização do resumo profissional
│   ├── layout.tsx      # Layout principal e fontes
│   └── page.tsx        # Página inicial (Home)
├── components/         # Componentes React
│   ├── portfolio/      # Seções específicas (Hero, About, Projects, etc.)
│   ├── ui/             # Componentes de interface base (Shadcn UI)
│   └── theme-provider/ # Gerenciamento de tema
├── hooks/              # Hooks personalizados (i18n, mobile)
├── lib/                # Configurações e utilitários
│   └── locales/        # Arquivos de tradução (en.ts, pt.ts)
├── public/             # Arquivos estáticos e assets
├── styles/             # Estilos globais
└── config files        # Configurações (Next, Tailwind, TS, etc.)

```

## ⚙️ Como rodar o projeto localmente

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **pnpm** instalados.

### Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/igoraraujocunha/portfolio-website
cd portfolio-website
```


2. **Instale as dependências:**
```bash
pnpm install
```


3. **Inicie o servidor de desenvolvimento:**
```bash
pnpm run dev
```


4. O projeto estará rodando em: http://localhost:3000

## ✨ Destaques Técnicos

* **Multi-idioma:** Sistema de tradução dinâmico via hooks personalizados (use-language.tsx).
* **Componentização:** Seções modulares como terminal-section.tsx e education-section.tsx para fácil manutenção.
* **Responsividade:** Otimizado para dispositivos móveis com hooks dedicados (use-mobile.tsx).

## 📫 Contato
 Estou sempre à disposição de convites de colaboração, feedbacks e novas conexões!

## ⚖️ Licença
Este projeto está sob a licença MIT. Dê uma olhada no arquivo [LICENSE](./LICENSE) par mais detalhes.
