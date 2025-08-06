import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as ReactIcons from 'react-icons/fi';
import * as SimpleIcons from 'react-icons/si';
import * as FontAwesome from 'react-icons/fa';

const SkillItem = ({ skill, index, inView }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  // Fonction pour obtenir l'icône depuis différentes bibliothèques
  const getIcon = (iconName) => {
    const icons = { ...ReactIcons, ...SimpleIcons, ...FontAwesome };
    const IconComponent = icons[iconName] || ReactIcons.FiCode;
    return IconComponent;
  };

  const IconComponent = getIcon(skill.icon);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgressWidth(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    } else {
      setProgressWidth(0);
    }
  }, [inView, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-3"
    >
      {/* En-tête de la compétence */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg"
          >
            <IconComponent 
              size={20} 
              className="text-primary-600 dark:text-primary-400" 
            />
          </motion.div>
          <span className="font-medium text-gray-900 dark:text-white">
            {skill.name}
          </span>
        </div>
        
        <motion.span
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: (index * 0.1) + 0.5 }}
          className="text-sm font-semibold text-primary-600 dark:text-primary-400"
        >
          {skill.level}%
        </motion.span>
      </div>

      {/* Barre de progression */}
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${progressWidth}%` : '0%' }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
        />
      </div>

      {/* Niveau descriptif */}
      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
        <span>
          {skill.level >= 90 ? 'Expert' : 
           skill.level >= 80 ? 'Avancé' : 
           skill.level >= 70 ? 'Intermédiaire' : 'Débutant'}
        </span>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { 
                scale: star <= Math.ceil(skill.level / 20) ? 1 : 0.3,
                rotate: 0
              } : { scale: 0, rotate: -180 }}
              transition={{ 
                duration: 0.3, 
                delay: (index * 0.1) + (star * 0.05)
              }}
              className={`w-2 h-2 rounded-full ${
                star <= Math.ceil(skill.level / 20)
                  ? 'bg-yellow-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillItem;