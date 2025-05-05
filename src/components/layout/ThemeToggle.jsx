import React, { useEffect, useState } from 'react';

const buttonStyles = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: '#333',
  color: '#f0f0f0',
  padding: '18px 24px',
  borderRadius: '50%',
  border: 'none',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  cursor: 'pointer',
  fontSize: '20px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
  zIndex: 1000,
};

const buttonDarkStyles = {
  backgroundColor: '#f0f0f0',
  color: '#333',
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const initialDark = storedTheme === 'dark' || (!storedTheme && prefersDark);

    if (initialDark) {
      document.documentElement.classList.add('dark');
    }

    setIsDark(initialDark);
  }, []);

  const toggleTheme = () => {
    const willBeDark = !isDark;
    document.documentElement.classList.toggle('dark', willBeDark);
    localStorage.setItem('theme', willBeDark ? 'dark' : 'light');
    setIsDark(willBeDark);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{ ...buttonStyles, ...(isDark && buttonDarkStyles) }}
    >
      {isDark ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0-10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 19a1 1 0 0 1 1-1v-2a1 1 0 0 1-2 0v2a1 1 0 0 1 1 1zm5.66-13.66a1 1 0 0 1 .71.29l1.41 1.41a1 1 0 0 1-1.41 1.41l-1.41-1.41a1 1 0 0 1 .71-.29zm-11.31 11.31a1 1 0 0 1 .71.29l1.41 1.41a1 1 0 0 1-1.41 1.41l-1.41-1.41a1 1 0 0 1 .71-.29zM21 12a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm-19 0a1 1 0 0 1-1 1h2a1 1 0 0 1 0-2h-2a1 1 0 0 1 1 1zm5.66 2.34a1 1 0 0 1-.71.29l-1.41 1.41a1 1 0 0 1-1.41-1.41l1.41-1.41a1 1 0 0 1 .71.29zm11.31-11.31a1 1 0 0 1-.71.29l-1.41 1.41a1 1 0 0 1-1.41-1.41l1.41-1.41a1 1 0 0 1 .71.29z"/></svg>}
    </button>
  );
};

export default ThemeToggle;
