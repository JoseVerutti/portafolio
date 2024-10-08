import React, { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import DarkModeToggle from './components/DarkModeToggle';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import projectsData from './data/projects.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const nextProject = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header setCurrentPage={setCurrentPage} />
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow container mx-auto py-8 px-4">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'projects' && (
          <>
            <h2 className="text-3xl font-bold mb-8 text-center text-primary dark:text-primary">Proyectos</h2>
            <div className="relative h-[400px] w-full max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <ProjectCard
                  key={projectsData[currentIndex].id}
                  {...projectsData[currentIndex]}
                  className={direction === 'right' ? 'slide-right' : 'slide-left'}
                />
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={prevProject}
                className="bg-secondary hover:bg-tertiary text-white dark:bg-secondary dark:hover:bg-tertiary p-2 rounded-full shadow-lg transition-colors duration-200"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextProject}
                className="bg-secondary hover:bg-tertiary text-white dark:bg-secondary dark:hover:bg-tertiary p-2 rounded-full shadow-lg transition-colors duration-200"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </>
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;