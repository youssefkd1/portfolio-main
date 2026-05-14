import React, { createContext, useContext, useEffect, useState } from 'react';
import manImage from '../assets/man1.png';

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

  return (
    <ThemeContext.Provider value={{ 
      accentColor, 
      setAccentColor, 
      toggleAccent,
      currentImage: manImage
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
