
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Bell } from 'lucide-react';

const insights = [
  {
    title: "Vaccination Campaign Optimization",
    summary: "AI analysis suggests focusing resources on districts with 60-75% vaccination rates for maximum impact.",
    confidence: 94,
    type: "Health",
    priority: "High"
  },
  {
    title: "Climate Adaptation Policy",
    summary: "Temperature rise projections indicate need for updated building codes in coastal areas.",
    confidence: 87,
    type: "Climate",
    priority: "Medium"
  },
  {
    title: "Public Transport Efficiency",
    summary: "Route optimization could reduce emissions by 23% while improving accessibility.",
    confidence: 91,
    type: "Governance",
    priority: "High"
  }
];

export const AIInsightsWidget: React.FC = () => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 flex items-center">
            <Search className="w-5 h-5 text-indigo-600 mr-2" />
            AI Insights
          </h3>
          <p className="text-sm text-slate-600">Latest AI-generated recommendations</p>
        </div>
        <Badge variant="outline" className="text-indigo-700 border-indigo-200">
          3 New
        </Badge>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-slate-900 text-sm">{insight.title}</h4>
              <div className="flex space-x-1">
                <Badge 
                  variant="outline" 
                  className={
                    insight.priority === 'High' 
                      ? "text-red-700 border-red-200" 
                      : "text-yellow-700 border-yellow-200"
                  }
                >
                  {insight.priority}
                </Badge>
              </div>
            </div>
            <p className="text-xs text-slate-600 mb-3">{insight.summary}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-500">Confidence:</span>
                <span className="text-xs font-medium text-green-600">{insight.confidence}%</span>
              </div>
              <Button variant="ghost" size="sm" className="text-xs">
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-4" size="sm">
        View All Insights
      </Button>
    </Card>
  );
};
