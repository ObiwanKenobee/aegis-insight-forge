
import React, { useState } from 'react';
import { Search, Bell, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchPanel } from '@/components/search/SearchPanel';

interface TopNavigationProps {
  onToggleAI: () => void;
  aiPanelOpen: boolean;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({ 
  onToggleAI, 
  aiPanelOpen 
}) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search insights, policies, health data..."
                className="pl-10 pr-4 py-2 border-slate-200 focus:border-blue-500"
                onFocus={() => setSearchOpen(true)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleAI}
              className={aiPanelOpen ? "bg-blue-50 border-blue-200" : ""}
            >
              <Search className="w-4 h-4 mr-2" />
              AI Assistant
            </Button>

            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>

            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>

            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-slate-200">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-slate-900">Health Officer</p>
                <p className="text-xs text-slate-500">Regional Authority</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {searchOpen && (
        <SearchPanel onClose={() => setSearchOpen(false)} />
      )}
    </>
  );
};
