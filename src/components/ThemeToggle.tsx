
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
    >
      {theme === 'light' ? (
        <Moon size={18} className="text-gray-700 dark:text-gray-300" />
      ) : (
        <Sun size={18} className="text-yellow-500" />
      )}
    </Button>
  );
};

export default ThemeToggle;
