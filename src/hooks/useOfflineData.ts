
import { useState, useEffect } from 'react';

interface OfflineData {
  dashboardData: any;
  searchResults: any[];
  userQueries: any[];
  lastSync: Date | null;
}

export const useOfflineData = () => {
  const [offlineData, setOfflineData] = useState<OfflineData>({
    dashboardData: null,
    searchResults: [],
    userQueries: [],
    lastSync: null
  });
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Load cached data on mount
    loadCachedData();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const loadCachedData = async () => {
    try {
      if ('indexedDB' in window) {
        // Simulate loading from IndexedDB
        const cachedData = localStorage.getItem('aegis-offline-data');
        if (cachedData) {
          setOfflineData(JSON.parse(cachedData));
        }
      }
    } catch (error) {
      console.error('Error loading cached data:', error);
    }
  };

  const cacheData = async (key: string, data: any) => {
    try {
      const currentData = { ...offlineData };
      currentData[key as keyof OfflineData] = data;
      currentData.lastSync = new Date();
      
      setOfflineData(currentData);
      localStorage.setItem('aegis-offline-data', JSON.stringify(currentData));
    } catch (error) {
      console.error('Error caching data:', error);
    }
  };

  const syncData = async () => {
    if (!isOnline) return false;
    
    try {
      // Simulate data sync with backend
      console.log('Syncing offline data...');
      return true;
    } catch (error) {
      console.error('Error syncing data:', error);
      return false;
    }
  };

  return {
    offlineData,
    isOnline,
    cacheData,
    syncData,
    loadCachedData
  };
};
