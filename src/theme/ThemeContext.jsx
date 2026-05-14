import React, { createContext, useContext, useEffect, useState } from 'react';
import manImage from '../assets/result (2).png';

const ThemeContext = createContext();

export const accentColors = {
  Cyan: '#00d2ff',
  Iris: '#6366f1',
  Ocean: '#0ea5e9',
  Mint: '#10b981',
  Sun: '#f59e0b',
  Coral: '#f43f5e',
  Rose: '#ec4899',
};

const accentHueRotate = {
  // Base image is tuned visually; hue-rotate values approximate the accent selection.
  Cyan: 0,
  Iris: -55,
  Ocean: -25,
  Mint: -15,
  Sun: 35,
  Coral: 20,
  Rose: 55,
};

export const ThemeProvider = ({ children }) => {
  const [accentColor, setAccentColor] = useState(() => {
    const saved = localStorage.getItem('procoder_accent');
    return saved || 'Cyan';
  });

  useEffect(() => {
    localStorage.setItem('procoder_accent', accentColor);
    const colorHex = accentColors[accentColor];
    document.documentElement.style.setProperty('--accent-primary', colorHex);
    // Semi-transparent version
    document.documentElement.style.setProperty('--accent-soft', `${colorHex}40`);
    document.documentElement.style.setProperty('--accent-glow', `${colorHex}15`);
  }, [accentColor]);


  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const toggleAccent = (color) => setAccentColor(color);

  const hueRotateDeg = accentHueRotate[accentColor] ?? 0;

  return (
    <ThemeContext.Provider value={{ 
      accentColor, 
      setAccentColor,
      toggleAccent,
      currentImage: manImage,
      hueRotateDeg,
    }}>

      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
