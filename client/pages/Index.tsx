import {
  Zap,
  Clock,
  Shield,
  TrendingUp,
  Star,
  Rocket,
  Mail,
  Bot,
  Database,
  Calendar,
  ShoppingCart,
  MessageSquare,
  FileText,
  ChevronDown,
  Quote,
  CheckCircle,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { useState, useRef } from "react";

export default function Index() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const whyChooseRef = useRef<HTMLDivElement>(null);
  const offerRef = useRef<HTMLDivElement>(null);

  const checkoutUrl = "https://go.perfectpay.com.br/PPU38CQ2LB9";

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const goToCheckout = () => {
    window.location.href = checkoutUrl;
  };

  const features = [
    {
      icon: Rocket,
      title: "Implementação Imediata",
      description:
        "Baixe e comece a usar em minutos. Automações prontas para implementar.",
    },
    {
      icon: Clock,
      title: "Economize 500+ Horas",
      description: "Automações testadas e validadas que economizam tempo.",
    },
    {
      icon: Shield,
      title: "100% Seguro e Testado",
      description: "Testado por especialistas; produção pronta.",
    },
    {
      icon: Zap,
      title: "Atualizações Constantes",
      description: "Novas automações todo mês sem custo adicional.",
    },
    {
      icon: TrendingUp,
      title: "Escale Seu Negócio",
      description: "Automatize processos e foque no crescimento.",
    },
    {
      icon: Star,
      title: "Suporte Premium",
      description: "Dúvidas com equipe especializada.",
    },
  ];

  const categories = [
    {
      icon: Mail,
      title: "Email Marketing",
      count: "150+",
      items: [
        "Sequências de boas-vindas",
        "Follow-ups automáticos",
        "Campanhas segmentadas",
      ],
    },
    {
      icon: Bot,
      title: "Chatbots & IA",
      count: "120+",
      items: [
        "Atendimento 24/7",
        "Qualificação de leads",
        "FAQ automatizado",
      ],
    },
    {
      icon: Database,
      title: "Gestão de Dados",
      count: "180+",
      items: [
        "Sincronização CRM",
        "Backup automático",
        "Relatórios em tempo real",
      ],
    },
    {
      icon: Calendar,
      title: "Agendamentos",
      count: "90+",
      items: [
        "Confirmações automáticas",
        "Lembretes inteligentes",
        "Reagendamentos",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      count: "140+",
      items: [
        "Carrinho abandonado",
        "Upsell/Cross-sell",
        "Gestão de estoque",
      ],
    },
    {
      icon: MessageSquare,
      title: "Redes Sociais",
      count: "110+",
      items: [
        "Publicações automáticas",
        "Respostas em DM",
        "Análise de engajamento",
      ],
    },
    {
      icon: FileText,
      title: "Documentos",
      count: "100+",
      items: [
        "Geração de contratos",
        "PDFs automáticos",
        "Assinaturas digitais",
      ],
    },
    {
      icon: TrendingUp,
      title: "Relatórios",
      count: "95+",
      items: [
        "Dashboards automáticos",
        "Análises personalizadas",
        "Exportação de dados",
      ],
    },
  ];

  const testimonials = [
    {
      initials: "RS",
      name: "Rafael Santos",
      role: "CEO, TechStart",
      rating: 5,
      text: "Economizei 200 horas por mês com as automações. Inversão melhor que já fiz para meu negócio.",
    },
    {
      initials: "MC",
      name: "Mariana Costa",
      role: "Gerente de Marketing",
      rating: 5,
      text: "O pack de automações transformou nosso processo. Resultados incríveis em apenas 2 semanas.",
    },
    {
      initials: "CO",
      name: "Carlos Oliveira",
      role: "Empreendedor Digital",
      rating: 5,
      text: "Finalmente tenho tempo para crescer meu negócio. As automações fazem todo o trabalho repetitivo.",
    },
    {
      initials: "AP",
      name: "Ana Paula",
      role: "Consultora",
      rating: 5,
      text: "Suporte excepcional e automações de qualidade. Vale cada centavo investido.",
    },
    {
      initials: "PL",
      name: "Pedro Lima",
      role: "Desenvolvedor",
      rating: 5,
      text: "Implementação fácil e documentação completa. Recomendo para qualquer profissional.",
    },
    {
      initials: "JS",
      name: "Juliana Silva",
      role: "Proprietária de E-commerce",
      rating: 5,
      text: "Vendas aumentaram 3x depois que implementei as automações de follow-up.",
    },
  ];

  const faqs = [
    {
      question: "Como funciona o acesso às automações?",
      answer:
        "Após a compra, você recebe um link de download com todas as automações. Você pode importá-las na sua plataforma em minutos e começar a usar imediatamente.",
    },
    {
      question: "Preciso ter conhecimento técnico para usar?",
      answer:
        "Não é necessário! As automações vêm prontas para usar. Porém, temos documentação completa e suporte premium para ajudar em qualquer dúvida.",
    },
    {
      question: "As automações funcionam com quais plataformas?",
      answer:
        "Suportamos as principais plataformas: Make, Zapier, Integromat, N8N e muitas outras. Confira a lista completa no painel de automações.",
    },
    {
      question: "Recebo atualizações gratuitas?",
      answer:
        "Sim! Todas as atualizações e novas automações são incluídas sem custos adicionais. A cada mês adicionamos novas automações ao pack.",
    },
    {
      question: "E se eu não gostar?",
      answer:
        "Oferecemos garantia de 7 dias sem perguntas. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.",
    },
    {
      question: "Posso usar em projetos de clientes?",
      answer:
        "Sim! Você pode usar as automações em seus próprios projetos e nos de seus clientes. Licença inclusa para uso comercial.",
    },
  ];

  const stats = [
    { value: "+1.000", label: "Automações Prontas" },
    { value: "300+", label: "Clientes Satisfeitos" },
    { value: "100%", label: "Satisfação Garantida" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl top-0 left-1/4 animate-float opacity-30"></div>
          <div className="absolute w-96 h-96 rounded-full bg-secondary/20 blur-3xl top-1/4 right-0 animate-float opacity-20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="badge-exclusive mb-6">Lançamento Exclusivo</div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">+1.000 Automações</span>
            <br />
            Prontas Para Usar
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Economize centenas de horas. O maior pack de automações do mercado,
            testadas e validadas por especialistas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={goToCheckout} className="group h-14 px-10 rounded-xl bg-gradient-primary text-primary-foreground font-bold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap">
              Quero Ter Acesso Agora
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
            </button>
            <button onClick={() => scrollToSection(whyChooseRef)} className="h-14 px-10 rounded-xl bg-background border border-border text-foreground font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              Ver Benefícios
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl">
                <div className="gradient-text text-4xl font-black mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div ref={whyChooseRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Por Que Escolher Nosso{" "}
              <span className="gradient-accent-text">Pack?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme sua produtividade com benefícios que fazem a diferença
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="badge-exclusive mb-4">
              +1.000 Automações Incluídas
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Categorias de{" "}
              <span className="gradient-accent-text">Automações</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada categoria contém dezenas de automações prontas para usar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <span className="text-sm text-accent font-semibold">
                        {category.count} automações
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex gap-2 text-muted-foreground text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 glass-card p-8 rounded-2xl text-center">
            <p className="text-muted-foreground mb-2">
              Novas automações adicionadas{" "}
            </p>
            <p className="text-xl font-bold">todos os meses sem custo adicional</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              O Que Nossos <span className="gradient-accent-text">Clientes</span>{" "}
              Dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Mais de 300 clientes já transformaram seus negócios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                <div className="flex gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Special Offer Section */}
      <div ref={offerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-3xl text-center">
            <div className="inline-block badge-exclusive mb-6">
              <AlertCircle className="w-4 h-4 inline mr-2" />
              Oferta Limitada - Últimas Vagas
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Pronto Para Transformar Seu Negócio?
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de empreendedores que já estão economizando
              tempo e aumentando resultados
            </p>

            {/* Pricing */}
            <div className="mb-8">
              <p className="text-muted-foreground line-through text-lg">
                De R$ 89,90
              </p>
              <div className="gradient-accent-text text-5xl md:text-6xl font-black mb-2">
                R$ 29,90
              </div>
              <p className="text-muted-foreground">Pagamento único</p>
            </div>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <div className="flex gap-3 justify-center">
                <Zap className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Acesso Imediato</span>
              </div>
              <div className="flex gap-3 justify-center">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Garantia de 7 Dias</span>
              </div>
              <div className="flex gap-3 justify-center">
                <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Suporte Premium</span>
              </div>
            </div>

            {/* CTA Button */}
            <button onClick={goToCheckout} className="group relative mx-auto max-w-md w-full h-16 rounded-xl bg-gradient-accent text-accent-foreground font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 mb-6 shadow-lg hover:shadow-xl hover:shadow-accent/50 hover:scale-105 active:scale-95 cursor-pointer">
              <span className="relative z-10">Garantir Meu Acesso Agora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 rounded-xl bg-gradient-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
            </button>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground justify-center pt-6 border-t border-border">
              <div className="flex gap-2 items-center justify-center">
                <Shield className="w-4 h-4 text-accent" />
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>Ambiente Protegido</span>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <Zap className="w-4 h-4 text-accent" />
                <span>Acesso Instantâneo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Respostas para as dúvidas mais comuns
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/50 transition-colors"
                >
                  <span className="font-bold text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openFAQ === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === idx && (
                  <div className="px-6 py-4 border-t border-border bg-card/20 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Garantia de 7 Dias
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Não gostou? Devolvemos 100% do seu investimento sem perguntas. Zero
            risco.
          </p>
          <button onClick={goToCheckout} className="group h-14 px-12 rounded-xl bg-gradient-primary text-primary-foreground font-bold text-lg hover:shadow-glow transition-all duration-300 inline-flex items-center gap-3">
            Começar Agora
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Pack de Automações. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}
