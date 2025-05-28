
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { DashboardGrid } from '@/components/dashboard/DashboardGrid';
import { ConnectionStatus } from '@/components/common/ConnectionStatus';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <ConnectionStatus />
      <DashboardLayout>
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              AEGIS Decision Intelligence Platform
            </h1>
            <p className="text-slate-600">
              AI-powered insights for public health, governance, and climate resilience
            </p>
          </div>
          <DashboardGrid />
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Index;
