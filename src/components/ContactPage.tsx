import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import contactData from '../data/contact.json';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary dark:text-primary">Contacto</h2>
      <div className="flex flex-col items-center space-y-6">
        <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-secondary">
          <Github size={24} />
          <span>GitHub</span>
        </a>
        <a href={`mailto:${contactData.email}`} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-secondary">
          <Mail size={24} />
          <span>Email</span>
        </a>
        <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-secondary">
          <Linkedin size={24} />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;