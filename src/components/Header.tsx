import React from 'react';

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>
        <ul className="flex space-x-4">
          <li>
            <button 
              onClick={() => setCurrentPage('home')} 
              className="hover:text-tertiary transition-colors duration-200"
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('projects')} 
              className="hover:text-tertiary transition-colors duration-200"
            >
              Proyectos
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className="hover:text-tertiary transition-colors duration-200"
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;