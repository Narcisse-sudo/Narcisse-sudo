import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';
import { SiKaggle, SiMedium } from 'react-icons/si';
import { personalInfo, socialLinks } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    linkedin: FaLinkedin,
    github: FaGithub,
    twitter: FaTwitter,
    kaggle: SiKaggle,
    medium: SiMedium
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {personalInfo.title}
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Transformant les données en insights stratégiques pour créer de la valeur business.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: 'Accueil', href: '#hero' },
                { name: 'À propos', href: '#about' },
                { name: 'Projets', href: '#projects' },
                { name: 'Compétences', href: '#skills' },
                { name: 'Expérience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ x: 5 }}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact et réseaux sociaux */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Contact & Réseaux
            </h4>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {personalInfo.email}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {personalInfo.location}
              </p>
              
              {/* Réseaux sociaux */}
              <div className="flex space-x-4 pt-2">
                {Object.entries(socialLinks).map(([platform, url]) => {
                  const IconComponent = socialIcons[platform];
                  return (
                    <motion.a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-200"
                    >
                      <IconComponent size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
              <span>&copy; {currentYear} {personalInfo.name}.</span>
              <span>Développé avec</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-500"
              >
                <FaHeart />
              </motion.span>
              <span>et React</span>
            </div>

            {/* Bouton retour en haut */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200 text-sm"
            >
              <FaArrowUp size={14} />
              <span>Retour en haut</span>
            </motion.button>
          </div>
        </div>

        {/* Message technique */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-xs text-gray-500 dark:text-gray-500">
            Construit avec React, Vite, Tailwind CSS et Framer Motion. 
            Hébergé avec ❤️ pour la communauté Data Science.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;