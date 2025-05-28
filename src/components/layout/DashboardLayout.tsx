
import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopNavigation } from './TopNavigation';
import { AIInteractionPanel } from '@/components/ai/AIInteractionPanel';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavigation 
          onToggleAI={() => setAiPanelOpen(!aiPanelOpen)}
          aiPanelOpen={aiPanelOpen}
        />
        
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-auto">
            {children}
          </main>
          
          {aiPanelOpen && (
            <AIInteractionPanel onClose={() => setAiPanelOpen(false)} />
          )}
        </div>
      </div>
    </div>
  );
};
