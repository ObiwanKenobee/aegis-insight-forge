
import React from 'react';
import { HealthWidget } from './widgets/HealthWidget';
import { GovernanceWidget } from './widgets/GovernanceWidget';
import { ClimateWidget } from './widgets/ClimateWidget';
import { AIInsightsWidget } from './widgets/AIInsightsWidget';
import { RealtimeAlertsWidget } from './widgets/RealtimeAlertsWidget';
import { PolicySimulationWidget } from './widgets/PolicySimulationWidget';

export const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="xl:col-span-2">
        <HealthWidget />
      </div>
      <RealtimeAlertsWidget />
      
      <GovernanceWidget />
      <ClimateWidget />
      <AIInsightsWidget />
      
      <div className="xl:col-span-3">
        <PolicySimulationWidget />
      </div>
    </div>
  );
};
