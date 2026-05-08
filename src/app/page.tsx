import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { CaseStudies } from '@/components/CaseStudies';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <Nav />
      <Hero />
      <Services />
      <CaseStudies />
      <ContactSection />
      <Footer />
    </main>
  );
}
