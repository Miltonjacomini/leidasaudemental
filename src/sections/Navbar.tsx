import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useScrollAnimation';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre a Lei' },
  { href: '#requisitos', label: 'Requisitos' },
  { href: '#adequacao', label: 'Adequação' },
  { href: '#blog', label: 'Blog' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  const isScrolled = useNavbarScroll(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;
    
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

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
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link
            to="/#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#4A7C59] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-[#2D4A3A]">
              Lei da Saúde <span className="text-[#4A7C59]">Mental</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={`/${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isHomePage && activeSection === link.href.replace('#', '')
                    ? 'text-[#4A7C59]'
                    : 'text-[#6B7280] hover:text-[#4A7C59]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#4A7C59] transition-all duration-300 ${
                    isHomePage && activeSection === link.href.replace('#', '')
                      ? 'w-full'
                      : 'w-0 hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/#contato"
              onClick={(e) => handleNavClick(e, '#contato')}
              className="btn-primary text-sm"
            >
              Consultoria Gratuita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#E8F5E9] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#2D4A3A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#2D4A3A]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={`/${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block py-2 text-base font-medium transition-colors ${
                isHomePage && activeSection === link.href.replace('#', '')
                  ? 'text-[#4A7C59]'
                  : 'text-[#6B7280] hover:text-[#4A7C59]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="btn-primary w-full mt-4 block text-center"
          >
            Consultoria Gratuita
          </Link>
        </div>
      </div>
    </nav>
  );
}
