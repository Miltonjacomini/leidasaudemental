import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'O que é a Lei 14.831/2024?',
    answer:
      'A Lei 14.831/2024 institui o Certificado Empresa Promotora da Saúde Mental, um reconhecimento federal concedido a empresas que implementam práticas efetivas de promoção da saúde mental e bem-estar de seus colaboradores. A lei estabelece 17 requisitos divididos em três eixos: promoção da saúde mental, bem-estar dos trabalhadores e transparência.',
  },
  {
    question: 'Quais são os requisitos para obter o certificado?',
    answer:
      'São 17 requisitos obrigatórios: implementação de programas de saúde mental, acesso a apoio psicológico/psiquiátrico, campanhas de conscientização, capacitação de lideranças, combate ao assédio, promoção de ambiente seguro, equilíbrio vida-pessoal/profissional, incentivo a atividades físicas, alimentação saudável, comunicação integrativa, divulgação de ações, canal de sugestões e metas periódicas.',
  },
  {
    question: 'A lei é obrigatória para todas as empresas?',
    answer:
      'A obtenção do certificado é voluntária, mas altamente recomendada. No entanto, desde maio de 2025, a atualização da NR-1 torna obrigatória para todas as empresas a avaliação e gestão de riscos psicossociais no Programa de Gerenciamento de Riscos (PGR). Além disso, o PL 4479/24 em tramitação pode tornar obrigatórias as práticas de saúde mental para empresas com mais de 50 funcionários.',
  },
  {
    question: 'Como a NR-1 se relaciona com a lei?',
    answer:
      'A NR-1 foi atualizada em agosto de 2024 e passa a exigir a identificação, avaliação e controle de riscos psicossociais no ambiente de trabalho. Isso inclui estresse, ansiedade, depressão, burnout e outros transtornos relacionados ao trabalho. A lei 14.831/2024 complementa essa exigência ao oferecer um certificado para empresas que vão além do cumprimento mínimo.',
  },
  {
    question: 'Qual a validade do certificado?',
    answer:
      'O Certificado Empresa Promotora da Saúde Mental tem validade de 2 anos. Para renovação, a empresa deve passar por uma nova avaliação que comprove a manutenção das práticas positivas implementadas. O descumprimento das disposições pode resultar na revogação da certificação.',
  },
  {
    question: 'Quais as penalidades para não adequação?',
    answer:
      'Empresas que não cumprirem as normas vigentes podem ser denunciadas ao Ministério Público do Trabalho e sofrer sanções administrativas como multas elevadas. Além disso, a Justiça do Trabalho tem condenado empresas que não tomam medidas preventivas, resultando em indenizações por danos morais e materiais em casos de adoecimento mental relacionado ao trabalho.',
  },
];

interface FAQItemProps {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isVisible: boolean;
}

function FAQItem({ faq, index, isOpen, onToggle, isVisible }: FAQItemProps) {
  return (
    <div
      className={`border-b border-[#E8F5E9] last:border-b-0 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
    >
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between py-5 text-left transition-colors ${
          isOpen ? 'text-[#4A7C59]' : 'text-[#1F2937] hover:text-[#4A7C59]'
        }`}
      >
        <span className="font-semibold text-lg pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-[#6B7280] leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#F5F7F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#4A7C59]/10 rounded-xl mb-4">
            <HelpCircle className="w-7 h-7 text-[#4A7C59]" />
          </div>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Perguntas <span className="text-[#4A7C59]">Frequentes</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div
          className={`bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] px-6 md:px-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <p className="text-[#6B7280] mb-4">
            Ainda tem dúvidas? Entre em contato conosco.
          </p>
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
            className="btn-secondary inline-flex items-center gap-2"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
