import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Lightbulb, Settings, BarChart3, Award } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search className="w-6 h-6" />,
    title: 'Diagnóstico',
    description:
      'Realize uma avaliação completa dos riscos psicossociais existentes na sua organização. Identifique fatores de estresse, sobrecarga e possíveis causas de adoecimento mental.',
    color: '#4A7C59',
  },
  {
    number: '02',
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Planejamento',
    description:
      'Elabore um plano de ação estruturado com metas claras, prazos definidos e indicadores de sucesso. Priorize as ações mais impactantes para o bem-estar dos colaboradores.',
    color: '#8FBC8F',
  },
  {
    number: '03',
    icon: <Settings className="w-6 h-6" />,
    title: 'Implementação',
    description:
      'Execute os programas e políticas de saúde mental definidos no planejamento. Capacite lideranças, promova campanhas e disponibilize recursos de apoio psicológico.',
    color: '#4A7C59',
  },
  {
    number: '04',
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Monitoramento',
    description:
      'Acompanhe indicadores e resultados de forma contínua. Realize avaliações periódicas do clima organizacional e ajuste as ações conforme necessário.',
    color: '#8FBC8F',
  },
  {
    number: '05',
    icon: <Award className="w-6 h-6" />,
    title: 'Certificação',
    description:
      'Solicite o Certificado Empresa Promotora da Saúde Mental ao governo federal. Mantenha as práticas para renovação após os 2 anos de validade.',
    color: '#2D4A3A',
  },
];

export function ComplianceSteps() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="adequacao"
      ref={ref}
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Adequação</span>
          <h2 className="section-title mb-4">
            Como Adequar Sua Empresa em{' '}
            <span className="text-[#4A7C59]">5 Passos</span>
          </h2>
          <p className="text-[#6B7280] text-lg">
            Siga este roteiro estruturado para alcançar a conformidade com a Lei
            14.831/2024 e obter o certificado.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#E8F5E9] -translate-x-1/2">
            <div
              className={`absolute top-0 left-0 w-full bg-[#4A7C59] transition-all duration-1000 ease-out ${
                isVisible ? 'h-full' : 'h-0'
              }`}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Content */}
                  <div
                    className={`${
                      isEven ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'
                    }`}
                  >
                    <div
                      className={`bg-[#F5F7F5] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                        isEven ? 'lg:ml-auto' : ''
                      }`}
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          isEven ? 'lg:flex-row-reverse' : ''
                        }`}
                      >
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 hover:scale-110"
                          style={{ backgroundColor: step.color }}
                        >
                          {step.icon}
                        </div>
                        <div className={isEven ? 'lg:text-right' : ''}>
                          <span
                            className="text-sm font-semibold"
                            style={{ color: step.color }}
                          >
                            Passo {step.number}
                          </span>
                          <h3 className="text-xl font-bold text-[#1F2937]">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p
                        className={`text-[#6B7280] leading-relaxed ${
                          isEven ? 'lg:text-right' : ''
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot - Desktop */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 ${
                      isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-white shadow-md transition-all duration-500 ${
                        isVisible ? 'scale-100' : 'scale-0'
                      }`}
                      style={{
                        backgroundColor: step.color,
                        transitionDelay: `${index * 150 + 300}ms`,
                        boxShadow: `0 0 0 4px ${step.color}30`,
                      }}
                    />
                  </div>

                  {/* Mobile Timeline Dot */}
                  <div className="lg:hidden absolute left-0 top-8 -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-500 ${
                        isVisible ? 'scale-100' : 'scale-0'
                      }`}
                      style={{
                        backgroundColor: step.color,
                        transitionDelay: `${index * 150 + 300}ms`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#contato');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Iniciar Processo de Adequação
            <Award className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
