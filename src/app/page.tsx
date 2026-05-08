import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { CaseStudies } from '@/components/CaseStudies';
import { FAQ } from '@/components/FAQ';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <CaseStudies />
      <FAQ />
      <ContactSection />
      <Footer />
    </main>
  );
}
