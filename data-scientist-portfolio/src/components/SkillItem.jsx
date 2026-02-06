import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const SkillItem = ({ skill, index, inView }) => {
  const [displayLevel, setDisplayLevel] = useState(0);

  // Animation du niveau de compétence
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setDisplayLevel(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, index]);

  // Récupérer l'icône dynamiquement
  const getIcon = (iconName) => {
    const IconComponent = FaIcons[iconName] || SiIcons[iconName];
    return IconComponent || FaIcons.FaCode; // Icône par défaut
  };

  const IconComponent = getIcon(skill.icon);

  // Couleur basée sur le niveau
  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-gray-500 to-gray-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-3"
    >
      {/* En-tête avec icône et nom */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-2 bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 rounded-lg"
          >
            <IconComponent 
              size={20} 
              className="text-primary-600 dark:text-primary-400" 
            />
          </motion.div>
          
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white">
              {skill.name}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {skill.level >= 90 && 'Expert'}
              {skill.level >= 80 && skill.level < 90 && 'Avancé'}
              {skill.level >= 70 && skill.level < 80 && 'Intermédiaire'}
              {skill.level < 70 && 'Débutant'}
            </p>
          </div>
        </div>

        {/* Pourcentage */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: (index * 0.1) + 0.3 }}
          className="text-sm font-semibold text-gray-700 dark:text-gray-300"
        >
          {displayLevel}%
        </motion.span>
      </div>

      {/* Barre de progression */}
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${displayLevel}%` : 0 }}
          transition={{ 
            duration: 1, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
          className={`skill-progress bg-gradient-to-r ${getSkillColor(skill.level)}`}
        />
      </div>

      {/* Points de niveau (décoratif) */}
      <div className="flex justify-between text-xs text-gray-400 dark:text-gray-600">
        <span>Débutant</span>
        <span>Intermédiaire</span>
        <span>Avancé</span>
        <span>Expert</span>
      </div>
    </motion.div>
  );
};

export default SkillItem;