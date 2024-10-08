import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
    </button>
  );
};

export default DarkModeToggle;