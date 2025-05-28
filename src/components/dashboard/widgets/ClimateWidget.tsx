
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const climateData = [
  { month: 'Jan', temperature: 22, humidity: 65, risk: 30 },
  { month: 'Feb', temperature: 24, humidity: 70, risk: 35 },
  { month: 'Mar', temperature: 26, humidity: 68, risk: 45 },
  { month: 'Apr', temperature: 28, humidity: 72, risk: 55 },
  { month: 'May', temperature: 31, humidity: 75, risk: 70 },
  { month: 'Jun', temperature: 33, humidity: 78, risk: 85 },
];

export const ClimateWidget: React.FC = () => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 flex items-center">
            <Cloud className="w-5 h-5 text-orange-600 mr-2" />
            Climate Resilience
          </h3>
          <p className="text-sm text-slate-600">Environmental monitoring and risk assessment</p>
        </div>
        <Badge variant="outline" className="text-orange-700 border-orange-200">
          High Risk
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-orange-700">33°C</p>
          <p className="text-sm text-slate-600">Avg Temperature</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-700">78%</p>
          <p className="text-sm text-slate-600">Humidity</p>
        </div>
      </div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={climateData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="risk" 
              stroke="#f97316" 
              fill="url(#colorRisk)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
