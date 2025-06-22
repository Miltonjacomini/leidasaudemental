import { useEffect, useState } from 'react';
import { ArrowRight, Shield, CheckCircle } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen gradient-green pt-[70px] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <Shield className="w-4 h-4 text-[#4A7C59]" />
              <span className="text-sm font-semibold text-[#4A7C59]">
                Lei 14.831/2024 - Em Vigor
              </span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-[1.1] mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Adequação à{' '}
              <span className="text-[#4A7C59]">Lei de Saúde Mental</span> no
              Trabalho
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg text-[#6B7280] leading-relaxed mb-8 max-w-xl transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Estratégias comprovadas para aumentar produtividade e bem-estar.
              Guia completo para obter o Certificado Empresa Promotora da Saúde
              Mental.
            </p>

            {/* Features */}
            <div
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              {[
                '17 requisitos obrigatórios',
                'Certificado federal',
                'Validade de 2 anos',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-[#4A7C59]"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <button
                onClick={() => scrollToSection('#adequacao')}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Começar Adequação
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#sobre')}
                className="btn-secondary"
              >
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#4A7C59]/10 rounded-3xl blur-3xl" />
              <img
                src="/hero-illustration.jpg"
                alt="Ilustração de bem-estar no trabalho"
                className="relative w-full h-auto rounded-2xl shadow-2xl animate-float"
                loading="eager"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#E8F5E9] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#4A7C59]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1F2937]">
                      Certificado
                    </p>
                    <p className="text-xs text-[#6B7280]">
                      Empresa Promotora
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
