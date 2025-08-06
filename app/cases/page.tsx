
'use client';

import CasesHero from './CasesHero';
import CasesList from './CasesList';
import SuccessMetrics from './SuccessMetrics';
import TestimonialsSection from './TestimonialsSection';

export default function CasesPage() {
  return (
    <div className="min-h-screen">
      <CasesHero />
      <SuccessMetrics />
      <CasesList />
      <TestimonialsSection />
    </div>
  );
}
