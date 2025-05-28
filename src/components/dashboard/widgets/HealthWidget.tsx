
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, User } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const healthData = [
  { month: 'Jan', cases: 120, vaccinated: 85 },
  { month: 'Feb', cases: 98, vaccinated: 88 },
  { month: 'Mar', cases: 145, vaccinated: 92 },
  { month: 'Apr', cases: 67, vaccinated: 94 },
  { month: 'May', cases: 89, vaccinated: 96 },
  { month: 'Jun', cases: 156, vaccinated: 97 },
];

export const HealthWidget: React.FC = () => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 flex items-center">
            <Bell className="w-5 h-5 text-green-600 mr-2" />
            Health Intelligence
          </h3>
          <p className="text-sm text-slate-600">Real-time health monitoring and predictions</p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="outline" className="text-green-700 border-green-200">
            Active Monitoring
          </Badge>
          <Badge variant="outline" className="text-blue-700 border-blue-200">
            AI Enhanced
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-green-700">94.2%</p>
              <p className="text-sm text-green-600">Vaccination Rate</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-blue-700">156</p>
              <p className="text-sm text-blue-600">Active Cases</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Bell className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={healthData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="cases" 
              stroke="#ef4444" 
              strokeWidth={3}
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="vaccinated" 
              stroke="#22c55e" 
              strokeWidth={3}
              dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
