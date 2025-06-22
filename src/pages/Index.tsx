import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Statistics } from '@/sections/Statistics';
import { AboutLaw } from '@/sections/AboutLaw';
import { Pillars } from '@/sections/Pillars';
import { ComplianceSteps } from '@/sections/ComplianceSteps';
import { BlogPreview } from '@/sections/BlogPreview';
import { Benefits } from '@/sections/Benefits';
import { FAQ } from '@/sections/FAQ';
import { CTASection } from '@/sections/CTASection';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <AboutLaw />
        <Pillars />
        <ComplianceSteps />
        <BlogPreview />
        <Benefits />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
