import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Clock, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    image: '/blog-1.jpg',
    category: 'NR-1',
    title: 'Entendendo os Riscos Psicossociais na NR-1',
    excerpt:
      'Descubra como identificar e avaliar os riscos psicossociais no ambiente de trabalho conforme as novas exigências da Norma Regulamentadora 1.',
    author: 'Equipe Lei da Saúde Mental',
    readTime: '5 min',
    slug: 'riscos-psicossociais-nr1',
  },
  {
    id: 2,
    image: '/blog-2.jpg',
    category: 'Implementação',
    title: 'Como Implementar Programas de Saúde Mental',
    excerpt:
      'Guia prático para criar e executar programas efetivos de promoção da saúde mental na sua organização, desde o planejamento até a avaliação.',
    author: 'Dra. Ana Silva',
    readTime: '7 min',
    slug: 'implementar-programas-saude-mental',
  },
  {
    id: 3,
    image: '/blog-3.jpg',
    category: 'Prevenção',
    title: 'Burnout: Sinais e Prevenção',
    excerpt:
      'Aprenda a identificar os primeiros sinais de burnout nos colaboradores e quais ações preventivas sua empresa pode adotar.',
    author: 'Dr. Carlos Mendes',
    readTime: '4 min',
    slug: 'burnout-sinais-prevencao',
  },
];

interface ArticleCardProps {
  article: typeof articles[0];
  index: number;
  isVisible: boolean;
}

function ArticleCard({ article, index, isVisible }: ArticleCardProps) {
  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={`/blog/${article.slug}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[#4A7C59] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#1F2937] mb-3 line-clamp-2 group-hover:text-[#4A7C59] transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-[#6B7280] mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-[#6B7280] mb-4">
            <div className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime} de leitura</span>
            </div>
          </div>

          {/* Read More */}
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A7C59] group/link">
            Ler artigo
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function BlogPreview() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      id="blog"
      ref={ref}
      className="py-20 md:py-28 bg-[#E8F5E9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="section-label">Blog</span>
            <h2 className="section-title">
              Últimos <span className="text-[#4A7C59]">Artigos</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#4A7C59] font-semibold hover:underline"
          >
            Ver Todos os Artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Newsletter CTA */}
        <div
          className={`mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
              Receba Novidades no Seu E-mail
            </h3>
            <p className="text-[#6B7280] mb-6">
              Inscreva-se para receber artigos exclusivos sobre saúde mental no
              trabalho e atualizações da legislação.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg border border-[#E8F5E9] focus:outline-none focus:ring-2 focus:ring-[#4A7C59] focus:border-transparent"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
