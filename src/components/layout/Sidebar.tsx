
import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Settings, 
  Bell, 
  User, 
  Calendar, 
  Cloud,
  Search
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { 
    title: 'Dashboard', 
    icon: Calendar, 
    href: '#', 
    active: true,
    color: 'text-blue-600' 
  },
  { 
    title: 'Health Intelligence', 
    icon: Bell, 
    href: '#health',
    color: 'text-green-600' 
  },
  { 
    title: 'Governance Analytics', 
    icon: User, 
    href: '#governance',
    color: 'text-purple-600' 
  },
  { 
    title: 'Climate Resilience', 
    icon: Cloud, 
    href: '#climate',
    color: 'text-orange-600' 
  },
  { 
    title: 'AI Research Hub', 
    icon: Search, 
    href: '#research',
    color: 'text-indigo-600' 
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  return (
    <aside 
      className={cn(
        "bg-white border-r border-slate-200 transition-all duration-300 shadow-sm",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-bold text-slate-900">AEGIS</h2>
              <p className="text-xs text-slate-500">Decision Intelligence</p>
            </div>
          )}
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                "hover:bg-slate-100",
                item.active && "bg-blue-50 border border-blue-100"
              )}
            >
              <Icon className={cn("w-5 h-5", item.color)} />
              {!collapsed && (
                <span className={cn(
                  "font-medium",
                  item.active ? "text-blue-700" : "text-slate-700"
                )}>
                  {item.title}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
    </aside>
  );
};
