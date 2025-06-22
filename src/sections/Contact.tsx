import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'E-mail',
    value: 'contato@integrapsisaude.com.br',
    href: '#',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Telefone',
    value: '(11) 95798-9619',
    href: '#',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Endereço',
    value: 'São Paulo, SP - Brasil',
    href: '#',
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">Contato</span>
          <h2 className="section-title mb-4">
            Fale com um <span className="text-[#4A7C59]">Especialista</span>
          </h2>
          <p className="text-[#6B7280] text-lg">
            Preencha o formulário abaixo e nossa equipe entrará em contato em
            até 24 horas úteis.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="bg-[#F5F7F5] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#1F2937] mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-[#4A7C59] rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-[#6B7280]">{item.label}</p>
                      <p className="font-semibold text-[#1F2937] group-hover:text-[#4A7C59] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="mt-8 pt-6 border-t border-[#E8F5E9]">
                <h4 className="font-semibold text-[#1F2937] mb-3">
                  Horário de Atendimento
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Segunda - Sexta</span>
                    <span className="text-[#1F2937] font-medium">
                      08:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B7280]">Sábado</span>
                    <span className="text-[#1F2937] font-medium">
                      09:00 - 13:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#4A7C59]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-[#6B7280]">
                    Agradecemos seu contato. Retornaremos em breve.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#1F2937] mb-2"
                      >
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#E8F5E9] focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#1F2937] mb-2"
                      >
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[#E8F5E9] focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-[#1F2937] mb-2"
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E8F5E9] focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent transition-all"
                        placeholder="Nome da empresa"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#1F2937] mb-2"
                      >
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#E8F5E9] focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent transition-all"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#1F2937] mb-2"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8F5E9] focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent transition-all resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#6B7280] text-center mt-4">
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
