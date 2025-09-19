import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Theme } from '../../types';

interface ThemeContextType {
  theme: Theme & {
    rewardBackgroundColor: string;
    rewardPercentage: number;
  };
  isDarkTheme: boolean;
  toggleTheme: () => void;
  rewardPercentage: number;
  updateRewardPercentage: (percentage: number) => void;
  rewardToColor: (pct: number) => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Reward % to color mapping function - White → Pink → Red → Purple
export const rewardToColor = (pct: number): string => {
  const clamped = Math.min(100, Math.max(0, pct));

  if (clamped <= 25) {
    // White (0%, 0%, 100%) → Pink (330°, 100%, 85%)
    const t = clamped / 25;
    const hue = 330;
    const sat = 0 + (100 - 0) * t;
    const light = 100 + (85 - 100) * t;
    return `hsl(${hue}, ${sat}%, ${light}%)`;
  } else if (clamped <= 50) {
    // Pink (330°, 100%, 85%) → Red (0°, 100%, 50%)
    const t = (clamped - 25) / (50 - 25);
    const hue = 330 + (360 - 330) * t; // Handle wraparound from 330° to 0°
    const finalHue = hue >= 360 ? hue - 360 : hue;
    const sat = 100;
    const light = 85 + (50 - 85) * t;
    return `hsl(${finalHue}, ${sat}%, ${light}%)`;
  } else if (clamped <= 75) {
    // Red (0°, 100%, 50%) → Dark Red (0°, 100%, 30%)
    const t = (clamped - 50) / (75 - 50);
    const hue = 0;
    const sat = 100;
    const light = 50 + (30 - 50) * t;
    return `hsl(${hue}, ${sat}%, ${light}%)`;
  } else {
    // Dark Red (0°, 100%, 30%) → Purple (270°, 100%, 50%)
    const t = (clamped - 75) / (100 - 75);
    const hue = 0 + (270 - 0) * t;
    const sat = 100;
    const light = 30 + (50 - 30) * t;
    return `hsl(${hue}, ${sat}%, ${light}%)`;
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [rewardPercentage, setRewardPercentage] = useState<number>(0);

  const toggleTheme = (): void => {
    setIsDarkTheme(!isDarkTheme);
  };

  const updateRewardPercentage = (percentage: number): void => {
    setRewardPercentage(Math.min(100, Math.max(0, percentage)));
  };

  // Get the dynamic reward color
  const rewardBackgroundColor = rewardToColor(rewardPercentage);

  const theme = {
    ...(isDarkTheme ? darkTheme : lightTheme),
    rewardBackgroundColor,
    rewardPercentage,
  };

  return React.createElement(
    ThemeContext.Provider,
    {
      value: {
        theme,
        isDarkTheme,
        toggleTheme,
        rewardPercentage,
        updateRewardPercentage,
        rewardToColor
      }
    },
    children
  );
};

const darkTheme: Theme = {
  backgroundPrimary: '#1a0c0c',
  backgroundSecondary: '#2d1212',
  backgroundTertiary: '#0f0606',
  backgroundInverse: '#0f0606',
  backgroundAccent: '#ff4444',
  backgroundTabBar: 'rgba(180, 30, 30, 0.95)',
  contentPrimary: '#fafcff',
  contentSecondary: '#fafcffa3',
  contentInversePrimary: '#1a0c0c',
  actionPrimary: '#ff3333',
  actionSecondary: 'rgba(180, 30, 30, 0.3)',
  borderWeak: '#2d1212',
  statusBarStyle: 'light',
};

const lightTheme: Theme = {
  backgroundPrimary: '#ffe5e5',
  backgroundSecondary: '#ffcccc',
  backgroundTertiary: '#ffffff',
  backgroundInverse: '#ffffff',
  backgroundAccent: '#ff6666',
  backgroundTabBar: '#ffaaaa',
  contentPrimary: '#1a0c0c',
  contentSecondary: '#4a2525',
  contentInversePrimary: '#ffffff',
  actionPrimary: '#ff3333',
  actionSecondary: '#ffdddd',
  borderWeak: '#ffcccc',
  statusBarStyle: 'dark',
};

export { darkTheme, lightTheme };