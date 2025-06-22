import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Brain, Heart, ClipboardCheck, ChevronRight } from 'lucide-react';

const pillars = [
  {
    id: 'promocao',
    icon: <Brain className="w-8 h-8" />,
    title: 'Promoção da Saúde Mental',
    color: '#4A7C59',
    items: [
      'Programas de promoção da saúde mental',
      'Acesso a apoio psicológico/psiquiátrico',
      'Campanhas e treinamentos',
      'Conscientização sobre saúde mental da mulher',
      'Capacitação de lideranças',
      'Combate à discriminação e assédio',
      'Avaliação regular das ações',
    ],
  },
  {
    id: 'bem-estar',
    icon: <Heart className="w-8 h-8" />,
    title: 'Bem-Estar dos Trabalhadores',
    color: '#8FBC8F',
    items: [
      'Ambiente de trabalho seguro e saudável',
      'Equilíbrio vida pessoal e profissional',
      'Incentivo às atividades físicas',
      'Alimentação saudável',
      'Interação saudável no trabalho',
      'Comunicação integrativa',
    ],
  },
  {
    id: 'transparencia',
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: 'Transparência',
    color: '#2D4A3A',
    items: [
      'Divulgação regular das ações',
      'Canal para sugestões e avaliações',
      'Metas e análises periódicas',
    ],
  },
];

interface PillarCardProps {
  pillar: typeof pillars[0];
  index: number;
  isVisible: boolean;
}

function PillarCard({ pillar, index, isVisible }: PillarCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        transform: isHovered ? 'translateY(-8px)' : undefined,
        boxShadow: isHovered
          ? '0 20px 40px rgba(0,0,0,0.1)'
          : '0 4px 20px rgba(0,0,0,0.05)',
        borderLeft: isHovered ? `4px solid ${pillar.color}` : '4px solid transparent',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
        style={{
          backgroundColor: `${pillar.color}15`,
          color: pillar.color,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        {pillar.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-[#1F2937] mb-4">{pillar.title}</h3>

      {/* Items */}
      <ul className="space-y-3">
        {pillar.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className={`flex items-start gap-3 text-sm text-[#6B7280] transition-all duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
            style={{
              transitionDelay: isHovered ? `${itemIndex * 50}ms` : '0ms',
            }}
          >
            <ChevronRight
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              style={{ color: pillar.color }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Count */}
      <div className="mt-6 pt-4 border-t border-[#E8F5E9]">
        <span
          className="text-sm font-semibold"
          style={{ color: pillar.color }}
        >
          {pillar.items.length} requisitos
        </span>
      </div>
    </div>
  );
}

export function Pillars() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="requisitos"
      ref={ref}
      className="py-20 md:py-28 bg-[#F5F7F5]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Os 3 Eixos</span>
          <h2 className="section-title mb-4">
            Requisitos para o{' '}
            <span className="text-[#4A7C59]">Certificado</span>
          </h2>
          <p className="text-[#6B7280] text-lg">
            A Lei 14.831/2024 estabelece 17 requisitos divididos em três pilares
            fundamentais para a obtenção do certificado.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Total Count */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-xl px-8 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="w-12 h-12 bg-[#4A7C59] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">17</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#1F2937]">Total de Requisitos</p>
              <p className="text-sm text-[#6B7280]">
                Todos obrigatórios para certificação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
