
'use client';

import ToolsHero from './ToolsHero';
import CalculatorGrid from './CalculatorGrid';
import PlanningTools from './PlanningTools';
import ResourceCenter from './ResourceCenter';

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <ToolsHero />
      <CalculatorGrid />
      <PlanningTools />
      <ResourceCenter />
    </div>
  );
}
