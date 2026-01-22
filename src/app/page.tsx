import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import Services from '@/components/Services';
import Industries from '@/components/Industries';

import LatestResources from '../components/LatestResources';
import AIReadinessSection from '@/components/AIReadinessSection';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'NexusIT is a global technology consultancy that integrates strategy, design, and software engineering to enable enterprises and technology disruptors to thrive.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <AIReadinessSection />
      <LatestResources />
      <ContactCTA />
      <Footer />
    </main>
  );
}
