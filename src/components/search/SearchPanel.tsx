
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Bell } from 'lucide-react';

interface SearchPanelProps {
  onClose: () => void;
}

const searchResults = [
  {
    title: "WHO Guidelines on Heat Wave Response",
    summary: "Comprehensive guidelines for public health response during extreme heat events, including vulnerable population protection strategies.",
    source: "World Health Organization",
    type: "Peer-reviewed",
    date: "2024-03-15",
    relevance: 94
  },
  {
    title: "Climate Change and Health Infrastructure Resilience",
    summary: "Analysis of healthcare system vulnerabilities to climate change and recommended adaptation measures.",
    source: "Climate Health Journal",
    type: "Research Paper",
    date: "2024-02-28",
    relevance: 89
  },
  {
    title: "National Emergency Response Framework Update",
    summary: "Updated protocols for coordinated emergency response including multi-agency coordination and resource deployment.",
    source: "Emergency Management Agency",
    type: "Government",
    date: "2024-03-10",
    relevance: 87
  }
];

export const SearchPanel: React.FC<SearchPanelProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    // Simulate search
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bg-white border-b border-slate-200 shadow-lg z-50">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-slate-900">Intelligent Search & Citation</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
        </div>

        <form onSubmit={handleSearch} className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search policies, research papers, health data..."
              className="pl-10 pr-20"
              disabled={isSearching}
            />
            <Button 
              type="submit" 
              size="sm" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              disabled={!searchQuery.trim() || isSearching}
            >
              {isSearching ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((result, index) => (
            <Card key={index} className="p-4 hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-medium text-slate-900 text-sm line-clamp-2">{result.title}</h4>
                <Badge variant="outline" className="text-green-700 border-green-200 ml-2">
                  {result.relevance}%
                </Badge>
              </div>
              
              <p className="text-xs text-slate-600 mb-3 line-clamp-3">{result.summary}</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={
                      result.type === 'Peer-reviewed' 
                        ? "text-blue-700 border-blue-200"
                        : result.type === 'Government'
                        ? "text-purple-700 border-purple-200"
                        : "text-orange-700 border-orange-200"
                    }
                  >
                    {result.type}
                  </Badge>
                  <span className="text-xs text-slate-500">{result.date}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 truncate">{result.source}</span>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" className="text-xs px-2">
                      Save
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs px-2">
                      Cite
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
