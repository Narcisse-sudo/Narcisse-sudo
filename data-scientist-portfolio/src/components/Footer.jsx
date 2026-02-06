import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import { SiKaggle, SiMedium } from 'react-icons/si';
import { personalInfo, socialLinks } from '../constants';

const Footer = () => {
  const socialIcons = {
    linkedin: FiLinkedin,
    github: FiGithub,
    twitter: FiTwitter,
    kaggle: SiKaggle,
    medium: SiMedium,
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {personalInfo.title} passionné par l'intelligence artificielle
              et l'analyse de données.
            </p>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <FiMail size={16} />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['Accueil', 'À propos', 'Projets', 'Compétences', 'Expérience', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase().replace('à propos', 'about').replace('compétences', 'skills').replace('expérience', 'experience').replace('accueil', 'hero')}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Suivez-moi
            </h3>
            <div className="flex flex-wrap gap-4">
              {Object.entries(socialLinks).map(([platform, url]) => {
                const IconComponent = socialIcons[platform];
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Suivre sur ${platform}`}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm"
            >
              <span>Créé avec</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#ef4444', '#f97316', '#ef4444']
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FiHeart size={14} />
              </motion.div>
              <span>et React</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;