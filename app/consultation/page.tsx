
'use client';

import ConsultationHero from './ConsultationHero';
import ConsultationForm from './ConsultationForm';
import ServiceIntro from './ServiceIntro';
import ContactInfo from './ContactInfo';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen">
      <ConsultationHero />
      <ServiceIntro />
      <ConsultationForm />
      <ContactInfo />
    </div>
  );
}