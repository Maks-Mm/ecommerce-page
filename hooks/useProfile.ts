// hooks/useProfile.ts
import { useState, useEffect } from 'react';
import { UserProfile, fallbackProfile } from '@/types/profile';

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(fallbackProfile);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingBackend, setIsUsingBackend] = useState(false);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/profile');
      
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const data = await response.json();
      setProfile(data);
      setIsUsingBackend(true);
      
    } catch (err) {
      console.warn('Backend not available, using fallback data');
      setProfile(fallbackProfile);
      setIsUsingBackend(false);
      setError('Backend connection failed - using demo data');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    const newProfile = { ...profile, ...updates };
    
    if (isUsingBackend) {
      try {
        const response = await fetch('/api/profile', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updates),
        });

        if (response.ok) {
          const result = await response.json();
          setProfile(result.userProfile);
          return { success: true };
        }
      } catch (err) {
        console.warn('Backend update failed, updating locally');
      }
    }
    
    // Fallback: update locally
    setProfile(newProfile);
    return { success: true };
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    loading,
    error,
    isUsingBackend,
    updateProfile,
    refetch: fetchProfile,
  };
}