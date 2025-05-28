
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, User, Bell } from 'lucide-react';

interface AIInteractionPanelProps {
  onClose: () => void;
}

const queryTemplates = [
  { title: "Health Risk Assessment", query: "Analyze current health trends and predict outbreak risks" },
  { title: "Policy Impact Analysis", query: "Evaluate the effectiveness of recent governance policies" },
  { title: "Climate Resilience Planning", query: "Generate adaptation strategies for rising temperatures" },
  { title: "Resource Optimization", query: "Optimize allocation of emergency response resources" },
];

const recentQueries = [
  {
    query: "What are the vaccination rates in urban vs rural areas?",
    response: "Urban areas show 94.2% vaccination rate vs 78.6% in rural areas. Key barriers in rural areas include access to healthcare facilities and vaccine hesitancy.",
    timestamp: "2 hours ago",
    sources: 3
  },
  {
    query: "Climate impact on public health infrastructure",
    response: "Rising temperatures will stress cooling systems in 67% of health facilities. Recommend upgrading HVAC systems and implementing backup power solutions.",
    timestamp: "4 hours ago", 
    sources: 7
  }
];

export const AIInteractionPanel: React.FC<AIInteractionPanelProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsProcessing(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setQuery('');
    }, 2000);
  };

  return (
    <div className="w-96 bg-white border-l border-slate-200 flex flex-col h-full">
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-slate-900">AI Research Assistant</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about health, governance, or climate data..."
              className="pl-10"
              disabled={isProcessing}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={!query.trim() || isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Analyze with Sonar AI'}
          </Button>
        </form>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-4">
          <h4 className="font-medium text-slate-900 mb-3">Quick Templates</h4>
          <div className="space-y-2 mb-6">
            {queryTemplates.map((template, index) => (
              <button
                key={index}
                onClick={() => setQuery(template.query)}
                className="w-full text-left p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <h5 className="font-medium text-sm text-slate-900">{template.title}</h5>
                <p className="text-xs text-slate-600 mt-1">{template.query}</p>
              </button>
            ))}
          </div>

          <h4 className="font-medium text-slate-900 mb-3">Recent Queries</h4>
          <div className="space-y-4">
            {recentQueries.map((item, index) => (
              <Card key={index} className="p-4">
                <div className="mb-3">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium text-slate-900">{item.query}</p>
                    <Badge variant="outline" className="text-blue-700 border-blue-200 ml-2">
                      {item.sources} sources
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-600">{item.response}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{item.timestamp}</span>
                  <Button variant="ghost" size="sm" className="text-xs">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
