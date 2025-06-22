import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { TrendingDown, TrendingUp, Users, Award, AlertTriangle, Brain, Activity } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: 'Redução de Custos',
    description: 'Menos absenteísmo e turnover, reduzindo despesas com recrutamento e treinamento.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Aumento de Produtividade',
    description: 'Colaboradores mais focados, engajados e com maior capacidade de entrega.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Melhor Clima',
    description: 'Ambiente de trabalho mais positivo, colaborativo e saudável.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Atração de Talentos',
    description: 'Marca empregadora fortalecida, atraindo os melhores profissionais.',
  },
];

const stats = [
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    value: 77,
    suffix: '%',
    label: 'Dos trabalhadores já experimentaram burnout',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    value: 52,
    suffix: '%',
    label: 'Relatam sintomas de ansiedade',
  },
  {
    icon: <Activity className="w-5 h-5" />,
    value: 25,
    suffix: '%',
    label: 'Aumento nos transtornos pós-pandemia',
  },
];

interface StatCardProps {
  stat: typeof stats[0];
  index: number;
  isVisible: boolean;
}

function StatCard({ stat, index, isVisible }: StatCardProps) {
  const count = useCountUp(stat.value, 2000, 0, isVisible);

  return (
    <div
      className={`flex items-center gap-4 p-4 bg-[#F5F7F5] rounded-xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${600 + index * 100}ms` }}
    >
      <div className="w-10 h-10 bg-[#4A7C59]/10 rounded-lg flex items-center justify-center text-[#4A7C59]">
        {stat.icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-[#1F2937]">
          {count}{stat.suffix}
        </div>
        <p className="text-xs text-[#6B7280]">{stat.label}</p>
      </div>
    </div>
  );
}

export function Benefits() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.15,
  });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              sectionVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="section-label">Benefícios</span>
            <h2 className="section-title mb-6">
              Por Que Investir em{' '}
              <span className="text-[#4A7C59]">Saúde Mental?</span>
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              Investir em saúde mental no trabalho não é apenas uma obrigação
              legal, mas uma estratégia inteligente que traz retornos
              significativos para sua organização.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`p-5 bg-[#F5F7F5] rounded-xl transition-all duration-500 hover:bg-[#E8F5E9] hover:-translate-y-1 ${
                    sectionVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[#4A7C59] rounded-lg flex items-center justify-center text-white mb-4 transition-transform duration-300 hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-[#1F2937] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#6B7280]">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  stat={stat}
                  index={index}
                  isVisible={sectionVisible}
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ${
              imageVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="absolute inset-0 bg-[#4A7C59]/10 rounded-3xl blur-2xl transform -rotate-3" />
            <img
              src="/benefits-team.jpg"
              alt="Equipe feliz trabalhando em ambiente saudável"
              className="relative w-full h-auto rounded-2xl shadow-xl"
              loading="lazy"
            />

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#E8F5E9] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-[#4A7C59]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1F2937]">+30%</p>
                  <p className="text-sm text-[#6B7280]">Produtividade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
