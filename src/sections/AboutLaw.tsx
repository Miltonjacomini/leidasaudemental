import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Scale, Shield, Award, FileText } from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-5 h-5" />,
    text: '17 requisitos divididos em 3 eixos fundamentais',
  },
  {
    icon: <Award className="w-5 h-5" />,
    text: 'Certificado válido por 2 anos com possibilidade de renovação',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: 'Integração com a NR-1 e PGR (riscos psicossociais)',
  },
  {
    icon: <Scale className="w-5 h-5" />,
    text: 'Reconhecimento federal e diferencial competitivo',
  },
];

export function AboutLaw() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
  });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ${
              imageVisible
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 -translate-x-8 scale-95'
            }`}
          >
            <div className="absolute inset-0 bg-[#4A7C59]/10 rounded-3xl blur-2xl transform rotate-3" />
            <img
              src="/about-certificate.jpg"
              alt="Certificado Empresa Promotora da Saúde Mental"
              className="relative w-full h-auto rounded-2xl shadow-xl"
              loading="lazy"
            />
            
            {/* Info Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-5 hidden md:block max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-[#E8F5E9] rounded-full flex items-center justify-center">
                  <Scale className="w-4 h-4 text-[#4A7C59]" />
                </div>
                <span className="text-xs font-semibold text-[#4A7C59]">LEI FEDERAL</span>
              </div>
              <p className="text-sm text-[#1F2937] font-medium">
                Sancionada em 27 de março de 2024
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              sectionVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <span className="section-label">Sobre a Legislação</span>
            <h2 className="section-title mb-6">
              Lei 14.831/2024: <span className="text-[#4A7C59]">O Que Mudou?</span>
            </h2>
            
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              Sancionada em 27 de março de 2024, a Lei 14.831 institui o{' '}
              <strong className="text-[#1F2937]">
                Certificado Empresa Promotora da Saúde Mental
              </strong>
              , reconhecendo organizações que adotam práticas efetivas de cuidado
              com o bem-estar psicológico dos colaboradores.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-[#F5F7F5] transition-all duration-500 hover:bg-[#E8F5E9] ${
                    sectionVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-[#4A7C59] rounded-lg flex items-center justify-center text-white transition-transform duration-300 hover:rotate-[360deg]">
                    {feature.icon}
                  </div>
                  <p className="text-[#1F2937] font-medium pt-2">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#E8F5E9] rounded-xl border-l-4 border-[#4A7C59]">
              <p className="text-sm text-[#2D4A3A]">
                <strong>Importante:</strong> A lei entrou em vigor em 23 de dezembro
                de 2024 e integra-se com a atualização da NR-1, que torna obrigatória
                a avaliação de riscos psicossociais no PGR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
