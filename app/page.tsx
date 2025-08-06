'use client';

import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PhilosophySection from '../components/PhilosophySection';
import ExpertiseSection from '../components/ExpertiseSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <ExpertiseSection />
      <ServicesSection />
    </div>
  );
}