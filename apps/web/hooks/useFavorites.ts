'use client';

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'jumpytools-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading favorites from localStorage:', e);
    }
    setIsInitialized(true);
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.error('Error saving favorites to localStorage:', e);
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (slug: string) => {
      return favorites.includes(slug);
    },
    [favorites]
  );

  return {
    favorites,
    isInitialized,
    toggleFavorite,
    isFavorite,
  };
}
