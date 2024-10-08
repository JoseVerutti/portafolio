import React from 'react';
import { User } from 'lucide-react';
import profileData from '../data/profile.json';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
            {profileData.image ? (
              <img src={profileData.image} alt={profileData.name} className="w-full h-full object-cover" />
            ) : (
              <User size={100} className="text-gray-600" />
            )}
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary dark:text-primary">{profileData.name}</h1>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">{profileData.title}</p>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-200">
          {profileData.description}
        </p>
        <button 
          onClick={() => setCurrentPage('projects')}
          className="inline-block bg-secondary hover:bg-tertiary text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        >
          Ver Proyectos
        </button>
      </div>
    </div>
  );
};

export default HomePage;