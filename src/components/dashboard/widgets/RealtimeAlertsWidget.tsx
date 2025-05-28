
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell } from 'lucide-react';

const alerts = [
  {
    id: 1,
    title: "Heat Wave Warning",
    message: "Extreme temperatures expected for the next 48 hours. Activate cooling centers.",
    severity: "critical",
    time: "2 min ago",
    source: "Climate Monitor"
  },
  {
    id: 2,
    title: "Vaccination Supply Low",
    message: "Regional inventory shows 72 hours remaining at current distribution rate.",
    severity: "warning",
    time: "15 min ago",
    source: "Health System"
  },
  {
    id: 3,
    title: "Policy Review Due",
    message: "Emergency response protocols require quarterly review by next Friday.",
    severity: "info",
    time: "1 hour ago",
    source: "Governance"
  }
];

export const RealtimeAlertsWidget: React.FC = () => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 flex items-center">
            <Bell className="w-5 h-5 text-red-600 mr-2" />
            Real-time Alerts
          </h3>
          <p className="text-sm text-slate-600">Urgent notifications and updates</p>
        </div>
        <Badge variant="outline" className="text-red-700 border-red-200">
          3 Active
        </Badge>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id} 
            className={`border-l-4 p-4 rounded-r-lg ${
              alert.severity === 'critical' 
                ? 'border-red-500 bg-red-50' 
                : alert.severity === 'warning'
                ? 'border-yellow-500 bg-yellow-50'
                : 'border-blue-500 bg-blue-50'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-slate-900 text-sm">{alert.title}</h4>
              <Badge 
                variant="outline" 
                className={
                  alert.severity === 'critical'
                    ? "text-red-700 border-red-200"
                    : alert.severity === 'warning'
                    ? "text-yellow-700 border-yellow-200"
                    : "text-blue-700 border-blue-200"
                }
              >
                {alert.severity}
              </Badge>
            </div>
            <p className="text-xs text-slate-700 mb-2">{alert.message}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{alert.source}</span>
              <span className="text-xs text-slate-500">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
