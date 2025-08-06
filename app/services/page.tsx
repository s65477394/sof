
'use client';

import ServicesHero from './ServicesHero';
import ServicesList from './ServicesList';
import ProcessSection from './ProcessSection';
import PricingSection from './PricingSection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <PricingSection />
    </div>
  );
}
