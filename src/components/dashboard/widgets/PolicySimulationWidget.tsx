
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const simulationData = [
  { month: 'Month 1', current: 100, scenario1: 105, scenario2: 98, scenario3: 110 },
  { month: 'Month 2', current: 98, scenario1: 108, scenario2: 95, scenario3: 115 },
  { month: 'Month 3', current: 102, scenario1: 112, scenario2: 92, scenario3: 122 },
  { month: 'Month 4', current: 96, scenario1: 115, scenario2: 88, scenario3: 128 },
  { month: 'Month 5', current: 99, scenario1: 120, scenario2: 85, scenario3: 135 },
  { month: 'Month 6', current: 101, scenario1: 125, scenario2: 82, scenario3: 142 },
];

const scenarios = [
  { id: 'scenario1', name: 'Increased Funding', color: '#22c55e', description: 'Additional 30% budget allocation' },
  { id: 'scenario2', name: 'Resource Reallocation', color: '#f59e0b', description: 'Redistribute existing resources' },
  { id: 'scenario3', name: 'Technology Integration', color: '#8b5cf6', description: 'AI-powered automation' },
];

export const PolicySimulationWidget: React.FC = () => {
  const [activeScenarios, setActiveScenarios] = useState(['scenario1', 'scenario2', 'scenario3']);

  const toggleScenario = (scenarioId: string) => {
    setActiveScenarios(prev => 
      prev.includes(scenarioId) 
        ? prev.filter(id => id !== scenarioId)
        : [...prev, scenarioId]
    );
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 flex items-center">
            <Calendar className="w-5 h-5 text-blue-600 mr-2" />
            Policy Impact Simulation
          </h3>
          <p className="text-sm text-slate-600">Predictive modeling for policy outcomes</p>
        </div>
        <div className="flex space-x-2">
          <Badge variant="outline" className="text-blue-700 border-blue-200">
            6-Month Projection
          </Badge>
          <Button variant="outline" size="sm">
            Run New Simulation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={simulationData}>
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
                  dataKey="current" 
                  stroke="#64748b" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Current Trajectory"
                />
                {scenarios.map(scenario => (
                  activeScenarios.includes(scenario.id) && (
                    <Line 
                      key={scenario.id}
                      type="monotone" 
                      dataKey={scenario.id} 
                      stroke={scenario.color} 
                      strokeWidth={3}
                      name={scenario.name}
                    />
                  )
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-slate-900">Scenarios</h4>
          {scenarios.map(scenario => (
            <div key={scenario.id} className="border border-slate-200 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium text-sm text-slate-900">{scenario.name}</h5>
                <button
                  onClick={() => toggleScenario(scenario.id)}
                  className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    activeScenarios.includes(scenario.id)
                      ? 'border-current bg-current'
                      : 'border-slate-300'
                  }`}
                  style={{ 
                    borderColor: activeScenarios.includes(scenario.id) ? scenario.color : undefined,
                    backgroundColor: activeScenarios.includes(scenario.id) ? scenario.color : undefined
                  }}
                />
              </div>
              <p className="text-xs text-slate-600">{scenario.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
