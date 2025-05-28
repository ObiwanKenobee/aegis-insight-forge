
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';

export const ConnectionStatus: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [hasOfflineData, setHasOfflineData] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check for cached data
    if ('indexedDB' in window) {
      setHasOfflineData(true);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="bg-orange-50 border-b border-orange-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Bell className="w-4 h-4 text-orange-600" />
          <div>
            <p className="text-sm font-medium text-orange-800">
              You're currently offline
            </p>
            <p className="text-xs text-orange-600">
              {hasOfflineData 
                ? "You can still view cached data and insights" 
                : "Limited functionality available"
              }
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-orange-700 border-orange-300">
            Offline Mode
          </Badge>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.location.reload()}
            className="text-orange-700 border-orange-300"
          >
            Retry Connection
          </Button>
        </div>
      </div>
    </div>
  );
};
