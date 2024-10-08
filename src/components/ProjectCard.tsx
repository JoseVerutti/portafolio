import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  additionalInfo: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, additionalInfo, className }) => {
  return (
    <div className={`w-full max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-primary dark:text-primary">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{additionalInfo}</p>
      </div>
    </div>
  );
};

export default ProjectCard;