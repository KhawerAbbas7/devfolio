import React, { useEffect, useState } from 'react';

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
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-sm dark:text-white"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
