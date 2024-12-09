'use client';
import { Roboto } from 'next/font/google';
import { createContext, useState, useEffect, useContext } from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import {
  createTheme,
  Theme,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const baseThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
};

const lightMode = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'light',
    primary: {
      main: '#976dab',
    },
  },
});

const darkMode = createTheme({
  ...baseThemeOptions,
  palette: {
    mode: 'dark',
    primary: {
      main: '#976dab',
    },
  },
});

type SupportedTheme = 'light' | 'dark';

function isSupportedTheme(str: string | null): str is SupportedTheme {
  return str === 'light' || str === 'dark';
}

const themeMapper: Record<SupportedTheme, Theme> = {
  light: lightMode,
  dark: darkMode,
};

export const ThemeContext = createContext<{
  theme: SupportedTheme;
  setTheme: (theme: SupportedTheme) => void;
}>({
  theme: 'light',
  setTheme: (theme) => {
    throw new Error('setTheme not defined');
  },
});

export function AppTheme({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, _setTheme] = useState<SupportedTheme>('light');

  const setTheme = (val: SupportedTheme) => {
    console.log(`setting theme to ${val}`);
    localStorage.setItem('theme', val);
    _setTheme(val);
  };

  useEffect(() => {
    console.log('checking localStorage for theme');

    const maybeTheme = localStorage.getItem('theme');
    if (isSupportedTheme(maybeTheme)) {
      _setTheme(maybeTheme);
    } else {
      setTheme('light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <ThemeProvider theme={themeMapper[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function ThemeBtn() {
  const { theme, setTheme } = useContext(ThemeContext);
  if (theme === 'dark') {
    return <LightMode onClick={() => setTheme('light')} />;
  } else {
    return <DarkMode onClick={() => setTheme('dark')} />;
  }
}
