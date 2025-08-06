
'use client';

import AboutHero from './AboutHero';
import FounderStory from './FounderStory';
import QualificationsSection from './QualificationsSection';
import PhilosophyDetails from './PhilosophyDetails';
import TeamIntroduction from './TeamIntroduction';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <FounderStory />
      <QualificationsSection />
      <PhilosophyDetails />
      <TeamIntroduction />
    </div>
  );
}
