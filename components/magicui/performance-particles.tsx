"use client";

import React, { useEffect, useState } from "react";
import Particles from "./particles";

// Performance detection function
const detectLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  // Check for low-end device based on hardware concurrency
  const isLowCPU = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4;
  
  // Check for small screen
  const isSmallScreen = window.innerWidth < 768;
  
  // Check for slow connection
  const isSlowConnection = navigator.connection && 
    (navigator.connection.effectiveType === 'slow-2g' || 
     navigator.connection.effectiveType === '2g' ||
     navigator.connection.saveData === true);
  
  // Check memory if available (Chrome-only)
  const isLowMemory = navigator.deviceMemory !== undefined && navigator.deviceMemory < 4;
  
  // Determine if device is low-end
  return (isMobile && isSmallScreen && (isLowCPU || isLowMemory || isSlowConnection));
};

interface PerformanceParticlesProps {
  quantity?: number;
  staticity?: number;
  ease?: number;
  className?: string;
  size?: number;
  refresh?: boolean;
  color?: string;
  forceDisable?: boolean;
}

const PerformanceParticles: React.FC<PerformanceParticlesProps> = ({ 
  quantity = 100,
  staticity = 50,
  ease = 50,
  className = "absolute inset-0 z-0",
  size = 0.4,
  refresh = false,
  color = "#d4e20b",
  forceDisable = false
}) => {
  const [shouldRender, setShouldRender] = useState<boolean>(true);
  const [optimalQuantity, setOptimalQuantity] = useState<number>(quantity);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if we should render particles based on device capabilities
    const isLowEnd = detectLowEndDevice();
    setShouldRender(!isLowEnd && !forceDisable);
    
    try {
      // Add localStorage setting for user preference
      const userPreference = localStorage.getItem('disableParticles');
      if (userPreference === 'true') {
        setShouldRender(false);
      }
      
      // Store performance timing in analytics
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        
        // If page load is slow, disable particles on subsequent loads
        if (loadTime > 3000) {
          localStorage.setItem('disableParticles', 'true');
          setShouldRender(false);
        }
      }
      
      // Calculate optimal quantity based on screen size
      const calculatedQuantity = Math.min(
        quantity, 
        Math.floor(window.innerWidth * window.innerHeight / 15000)
      );
      setOptimalQuantity(calculatedQuantity);
    } catch (error) {
      // If localStorage access fails (e.g., in incognito mode)
      console.warn('Error accessing localStorage or performance API:', error);
    }
  }, [forceDisable, quantity]);
  
  // Return null if we shouldn't render particles
  if (!shouldRender) {
    return null;
  }
  
  return (
    <Particles
      quantity={optimalQuantity}
      staticity={staticity}
      ease={ease}
      className={className}
      size={size}
      refresh={refresh}
      color={color}
      mobileOptimize={true}
    />
  );
};

export default PerformanceParticles; 