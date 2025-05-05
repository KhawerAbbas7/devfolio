import React, { useEffect, useState } from 'react';
const buttonStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#007bff',
  color: 'white',
  padding: '15px 20px',
  borderRadius: '50%',
  border: 'none',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  fontSize: '24px',
  zIndex: 1000,
};
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.theme = dark ? 'dark' : 'light';
    setIsDark(dark);
  };

  return (
    <button
      onClick={toggleTheme}
      style={buttonStyles}
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
