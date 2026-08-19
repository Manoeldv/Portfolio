import { ArrowRight, Blocks, Bot, CheckSquare, ClipboardCheck, Code, Code2, Database, ExternalLink, FileText, Globe, LineChart, Link as LinkIcon, Mail, PenTool, Rocket, Search, Server, Shield, Wrench } from 'lucide-react';
import React from 'react';
import { Chip, SectionHeader } from './Shared';

export const Hero = () => (
  <section id="home" className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh] pt-32 pb-16">
    <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
        <span className="font-mono text-xs text-secondary tracking-widest uppercase">Engenheiro de Software Full Stack</span>
      </div>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-text-main font-bold leading-tight tracking-tight">
        Engenharia de Software e <span className="text-primary-dark">Desenvolvimento Full Stack.</span>
      </h1>
      <p className="font-sans text-lg text-text-muted max-w-2xl leading-relaxed">
        Focado em arquitetura, visão de produto e excelência técnica no ecossistema JavaScript/TypeScript. Construindo sistemas resilientes e interfaces de alta performance.
      </p>
      <div className="flex flex-wrap gap-4 mt-8">
        <a href="#projects" className="btn-primary font-mono">
          Ver Projetos <ArrowRight size={16} />
        </a>
        <a href="https://www.linkedin.com/in/manoel-vieira-6ba422273" target="_blank" rel="noreferrer" className="btn-secondary font-mono">
          LinkedIn
        </a>
      </div>
    </div>
    <div className="col-span-1 lg:col-span-4 hidden lg:flex justify-end">
      <div className="w-full max-w-[320px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-border bg-[#e5e2e1] transform rotate-2 hover:rotate-0 transition-all duration-500 flex items-end justify-center">
        <img 
          src={`${import.meta.env.BASE_URL}profile.png`} 
          alt="Manoel Dutra Vieira" 
          className="w-[95%] h-[95%] object-cover object-bottom drop-shadow-xl grayscale hover:grayscale-0 transition-all duration-500" 
        />
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8),inset_0_0_100px_rgba(0,0,0,0.4)] pointer-events-none"></div>
      </div>
    </div>
  </section>
);

export const About = () => (
  <section id="about" className="max-w-6xl mx-auto px-6 w-full py-16">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        <SectionHeader title="Sobre Mim" underlineColor="bg-secondary" />
      </div>
      <div className="md:col-span-8 bg-surface ghost-border p-8 rounded-lg shadow-xl shadow-black/20">
        <p className="font-sans text-text-muted mb-6 leading-relaxed">
          Sou um Engenheiro de Software em formação (7º semestre), especializado em desenvolvimento Full Stack com profundo foco em arquitetura de sistemas e visão de produto. Minha abordagem transcende a simples escrita de código; busco compreender o problema de negócio para projetar soluções técnicas robustas, escaláveis e de fácil manutenção.
        </p>
        <p className="font-sans text-text-muted leading-relaxed">
          Atuando primariamente no ecossistema TypeScript (Node.js, Next.js, React), desenvolvo APIs eficientes e interfaces de usuário otimizadas. Valorizo práticas de Clean Code, testes automatizados e modelagem de dados consistente, garantindo que as fundações tecnológicas suportem o crescimento sustentável do produto.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
          <div>
            <span className="block font-mono text-xs text-primary mb-1">Foco</span>
            <span className="font-sans text-sm text-text-main">Arquitetura TS</span>
          </div>
          <div>
            <span className="block font-mono text-xs text-primary mb-1">Abordagem</span>
            <span className="font-sans text-sm text-text-main">Product-First</span>
          </div>
          <div>
            <span className="block font-mono text-xs text-primary mb-1">Práticas</span>
            <span className="font-sans text-sm text-text-main">Clean Code & Testes</span>
          </div>
          <div>
            <span className="block font-mono text-xs text-primary mb-1">Status</span>
            <span className="font-sans text-sm text-text-main flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span> Disponível
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Stack = () => (
  <section id="stack" className="max-w-6xl mx-auto px-6 w-full py-16">
    <SectionHeader title="Stack Tecnológica" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-surface ghost-border p-6 rounded-lg">
        <h3 className="font-sans text-text-main font-semibold mb-4 flex items-center gap-2">
          <Globe className="text-primary" size={20} /> Frontend
        </h3>
        <div>
          <Chip>React</Chip><Chip>Next.js</Chip><Chip>TypeScript</Chip>
          <Chip>JavaScript</Chip><Chip>HTML</Chip><Chip>CSS/Tailwind</Chip>
        </div>
      </div>
      <div className="bg-surface ghost-border p-6 rounded-lg">
        <h3 className="font-sans text-text-main font-semibold mb-4 flex items-center gap-2">
          <Server className="text-primary" size={20} /> Backend
        </h3>
        <div><Chip>Node.js</Chip><Chip>Express</Chip><Chip>APIs REST</Chip></div>
      </div>
      <div className="bg-surface ghost-border p-6 rounded-lg">
        <h3 className="font-sans text-text-main font-semibold mb-4 flex items-center gap-2">
          <Database className="text-primary" size={20} /> Banco de Dados
        </h3>
        <div><Chip>MongoDB</Chip><Chip>Mongoose</Chip></div>
      </div>
      <div className="bg-surface ghost-border p-6 rounded-lg">
        <h3 className="font-sans text-text-main font-semibold mb-4 flex items-center gap-2">
          <Wrench className="text-primary" size={20} /> Ferramentas
        </h3>
        <div><Chip>Git</Chip><Chip>GitHub</Chip><Chip>Figma</Chip><Chip>Docker</Chip></div>
      </div>
      <div className="bg-surface ghost-border p-6 rounded-lg">
        <h3 className="font-sans text-text-main font-semibold mb-4 flex items-center gap-2">
          <Bot className="text-primary" size={20} /> IA & Automação
        </h3>
        <div><Chip>AI Tools</Chip><Chip>Integration APIs</Chip></div>
      </div>
    </div>
  </section>
);

export const Projects = () => (
  <section id="projects" className="max-w-6xl mx-auto px-6 w-full py-16">
    <SectionHeader title="Projetos em Destaque" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Farmhazard",
          desc: "Um jogo de tiro em primeira pessoa (FPS) 3D focado em sobrevivência, desenvolvido para rodar nativamente no navegador web.",
          prob: "Entregar uma experiência imersiva de jogo (com mecânicas FPS, inventário e HUD rica) sem exigir downloads pesados ou clientes.",
          sol: "Desenvolvimento de um ecossistema 3D leve no navegador usando Three.js, apresentando arsenal variado e IA inimiga.",
          desafios: "Garantir alta performance gráfica no navegador e estruturar toda a lógica de colisão, física e câmera apenas com TypeScript.",
          chips: ["TypeScript", "Three.js", "Vite", "Node.js"],
          repo: "https://github.com/Manoeldv/Farmhazard",
          demo: "#"
        },
        {
          title: "Klinophi",
          desc: "Sistema de Gestão Clínica Integrado com IA (HealthTech), atuando como um assistente médico e agenda inteligente.",
          prob: "Sobrecarga burocrática no preenchimento de prontuários manuais e alta taxa de absenteísmo no agendamento.",
          sol: "Ecossistema automatizado que une Speech-to-Text para preenchimento automático de prontuários e um CRM com processamento de linguagem natural.",
          desafios: "Garantir a interpretação semântica impecável dos dados médicos pela IA e orquestrar a comunicação em tempo real via Evolution API.",
          chips: ["Next.js", "Node.js", "MongoDB", "Gemini AI", "Whisper", "n8n"],
          repo: "https://github.com/Manoeldv/Klinophi",
          demo: "#"
        },
        {
          title: "Mecaphi",
          desc: "Um ERP construído especificamente para o nicho de lojas de autopeças e desmanches de veículos.",
          prob: "Falta de rastreabilidade e o problema crônico de identificar e precificar peças estocadas sem etiqueta.",
          sol: "Rastreabilidade completa através de árvore genealógica da peça, PDV ultra-rápido e Busca Visual com IA para identificação via foto.",
          desafios: "Modelar o banco de dados (NoSQL) para genealogia de lote/sucata e harmonizar uma UI Mobile-First para uso no pátio com uma interface Desktop.",
          chips: ["React", "Express 5", "MongoDB", "Gemini AI", "PWA"],
          repo: "https://github.com/Manoeldv/mecaphi",
          demo: "#"
        }
      ].map((p, i) => (
        <div key={i} className="bg-surface ghost-border p-8 rounded-lg flex flex-col gap-6">
          <div>
            <h3 className="font-display text-text-main text-xl mb-2 font-bold">{p.title}</h3>
            <p className="font-sans text-sm text-text-muted">{p.desc}</p>
          </div>
          <div className="flex flex-col gap-4 flex-grow">
            <div>
              <span className="block font-mono text-xs text-primary mb-1">Problema:</span>
              <p className="font-sans text-sm text-text-muted">{p.prob}</p>
            </div>
            <div>
              <span className="block font-mono text-xs text-primary mb-1">Solução:</span>
              <p className="font-sans text-sm text-text-muted">{p.sol}</p>
            </div>
            <div>
              <span className="block font-mono text-xs text-primary mb-1">Desafios & Meu Papel:</span>
              <p className="font-sans text-sm text-text-muted">{p.desafios}</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {p.chips.map(c => <Chip key={c}>{c}</Chip>)}
            </div>
          </div>
          <div className="flex gap-4 mt-4 pt-4 border-t border-border">
            <a href={p.repo} target="_blank" rel="noreferrer" className="btn-secondary font-mono text-xs px-4 py-2 w-full">
              <Code size={14} /> GitHub
            </a>
            <a href={p.demo} className="btn-primary font-mono text-xs px-4 py-2 w-full opacity-50 cursor-not-allowed" title="Sem demo disponível">
              <ExternalLink size={14} /> Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const Engineering = () => (
  <section id="engineering" className="max-w-6xl mx-auto px-6 w-full py-16">
    <SectionHeader title="Engenharia de Software" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { icon: <PenTool size={28} />, title: "Arquitetura de Software & Modelagem de Dados", desc: "Desenho de sistemas escaláveis e modelagem eficiente de bancos de dados para garantir integridade e performance." },
        { icon: <Code2 size={28} />, title: "APIs REST & Integração Full Stack", desc: "Construção de interfaces de comunicação claras e seguras entre frontend e backend, seguindo padrões RESTful." },
        { icon: <CheckSquare size={28} />, title: "Testes, Documentação & Versionamento", desc: "Garantia de qualidade através de testes automatizados, documentação clara e fluxo de trabalho organizado com Git." },
        { icon: <Shield size={28} />, title: "Segurança & Escalabilidade", desc: "Implementação de práticas de segurança e design de infraestrutura preparada para crescimento sustentável do produto." }
      ].map((item, i) => (
        <div key={i} className="bg-surface ghost-border p-6 rounded-lg flex gap-4">
          <div className="text-primary mt-1">{item.icon}</div>
          <div>
            <h3 className="font-sans font-semibold text-text-main mb-2">{item.title}</h3>
            <p className="font-sans text-sm text-text-muted">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const Process = () => {
  const steps = [
    { label: "Problema", icon: <Search size={18} />, active: false, color: "text-text-muted" },
    { label: "Análise", icon: <LineChart size={18} />, active: false, color: "text-text-muted" },
    { label: "Arquitetura", icon: <PenTool size={18} />, active: false, color: "text-text-muted" },
    { label: "Desenvolvimento", icon: <Code size={18} />, active: true, color: "text-primary" },
    { label: "Testes", icon: <ClipboardCheck size={18} />, active: false, color: "text-text-muted" },
    { label: "Documentação", icon: <FileText size={18} />, active: false, color: "text-text-muted" },
    { label: "Entrega", icon: <Rocket size={18} />, active: true, color: "text-secondary" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 w-full py-16">
      <SectionHeader title="Como eu Trabalho" />
      <div className="bg-surface ghost-border p-8 rounded-lg">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center gap-2 w-24">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                  ${step.active && step.color === "text-primary" ? "bg-primary/20 border border-primary text-primary" : ""}
                  ${step.active && step.color === "text-secondary" ? "bg-secondary/20 border border-secondary text-secondary" : ""}
                  ${!step.active ? "bg-surface-hover text-text-main" : ""}
                `}>
                  {step.icon}
                </div>
                <span className={`font-mono text-[10px] uppercase tracking-wider text-center ${step.color}`}>{step.label}</span>
              </div>
              
              {/* Linha Horizontal (Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex h-[1px] flex-grow bg-border mx-2 relative mt-5">
                  <div className="absolute right-0 -top-[3px] w-2 h-2 border-t border-r border-border rotate-45"></div>
                </div>
              )}
              
              {/* Linha Vertical (Mobile) */}
              {i < steps.length - 1 && (
                <div className="flex lg:hidden w-[1px] h-8 bg-border relative">
                  <div className="absolute bottom-0 -left-[3px] w-2 h-2 border-b border-r border-border rotate-45"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => (
  <section id="contact" className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
    <div className="bg-surface ghost-border p-10 rounded-lg text-center flex flex-col items-center justify-center gap-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
      <Blocks size={48} className="text-primary" />
      <h3 className="font-display text-text-main text-2xl font-bold">Qualidade de Código</h3>
      <p className="font-sans text-text-muted max-w-sm">
        Explore meus repositórios para ver na prática minha atenção a padrões, testes e documentação estruturada.
      </p>
      <a href="https://github.com/Manoeldv" target="_blank" rel="noreferrer" className="btn-primary font-mono mt-4">
        <ExternalLink size={18} /> Acessar GitHub
      </a>
    </div>
    <div className="bg-surface ghost-border p-10 rounded-lg flex flex-col justify-center gap-6">
      <div>
        <h3 className="font-display text-text-main text-3xl font-bold mb-2">Vamos construir algo?</h3>
        <p className="font-sans text-text-muted">Aberto a discussões sobre projetos, arquitetura e oportunidades de engenharia de software.</p>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <a href="mailto:manoeldv@hotmail.com" className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
          <div className="w-12 h-12 rounded bg-surface-hover flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Mail size={20} />
          </div>
          <span className="font-sans font-medium">manoeldv@hotmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/manoel-vieira-6ba422273" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-text-muted hover:text-primary transition-colors group">
          <div className="w-12 h-12 rounded bg-surface-hover flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <LinkIcon size={20} />
          </div>
          <span className="font-sans font-medium">LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);
