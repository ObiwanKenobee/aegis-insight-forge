
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const governanceData = [
  { policy: 'Healthcare', approval: 78, implementation: 65 },
  { policy: 'Education', approval: 82, implementation: 74 },
  { policy: 'Transport', approval: 65, implementation: 58 },
  { policy: 'Housing', approval: 71, implementation: 63 },
];

export const GovernanceWidget: React.FC = () => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 flex items-center">
            <User className="w-5 h-5 text-purple-600 mr-2" />
            Governance Analytics
          </h3>
          <p className="text-sm text-slate-600">Policy effectiveness and public sentiment</p>
        </div>
        <Badge variant="outline" className="text-purple-700 border-purple-200">
          Live Analysis
        </Badge>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-700">Overall Policy Approval</span>
          <span className="text-lg font-bold text-purple-700">74%</span>
        </div>
        <div className="w-full bg-purple-100 rounded-full h-2">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '74%' }}></div>
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={governanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="policy" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="approval" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="implementation" fill="#a78bfa" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
