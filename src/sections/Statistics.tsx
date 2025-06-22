import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { Users, FileCheck, Calendar, TrendingDown } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
  numericValue: number;
  isVisible: boolean;
  delay: number;
}

function StatItem({ icon, value, label, suffix = '', numericValue, isVisible, delay }: StatItemProps) {
  const count = useCountUp(numericValue, 2000, 0, isVisible);

  return (
    <div
      className={`text-center p-6 rounded-xl transition-all duration-500 hover:bg-white/5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 rounded-xl mb-4">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {value.includes('mil') ? `${count}mil` : count}
        {suffix}
      </div>
      <p className="text-white/80 text-sm md:text-base">{label}</p>
    </div>
  );
}

export function Statistics() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  const stats = [
    {
      icon: <Users className="w-7 h-7 text-white" />,
      value: '500mil',
      label: 'Trabalhadores afastados por saúde mental em 2024',
      numericValue: 500,
    },
    {
      icon: <FileCheck className="w-7 h-7 text-white" />,
      value: '17',
      label: 'Requisitos obrigatórios da lei',
      numericValue: 17,
    },
    {
      icon: <Calendar className="w-7 h-7 text-white" />,
      value: '2',
      label: 'Anos de validade do certificado',
      numericValue: 2,
      suffix: ' anos',
    },
    {
      icon: <TrendingDown className="w-7 h-7 text-white" />,
      value: '2.5Bi',
      label: 'Prejuízo anual com absenteísmo',
      numericValue: 2.5,
      suffix: 'Bi',
    },
  ];

  return (
    <section ref={ref} className="bg-[#2D4A3A] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              numericValue={stat.numericValue}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
