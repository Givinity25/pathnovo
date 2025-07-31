'use client';
import { useEffect, useRef, useState } from 'react';

interface UseAutoTabSwitchProps {
  totalTabs: number;
  interval?: number; // in milliseconds
  enabled?: boolean;
}

export const useAutoTabSwitch = ({
  totalTabs,
  interval = 10000, // 10 seconds
  enabled = true,
}: UseAutoTabSwitchProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const switchToNextTab = () => {
    setActiveTab((prevTab) => (prevTab + 1) % totalTabs);
  };

  const switchToTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
    // Pause auto-switching when user manually switches
    setIsPaused(true);

    // Resume after 5 seconds of user interaction
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    if (!enabled || isPaused || totalTabs <= 1) return;

    const timer = setInterval(() => {
      switchToNextTab();
    }, interval);

    return () => clearInterval(timer);
  }, [enabled, isPaused, interval, totalTabs]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    activeTab,
    switchToTab,
    isPaused,
  };
};
