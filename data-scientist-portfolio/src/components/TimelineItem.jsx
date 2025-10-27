import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiGraduationCap, FiMapPin, FiCalendar, FiAward } from 'react-icons/fi';

const TimelineItem = ({ item, index, isLast }) => {
  const isWork = item.type === 'work';
  const IconComponent = isWork ? FiBriefcase : FiGraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`timeline-item ${!isLast ? 'mb-8' : ''}`}
    >
      {/* Dot de la timeline */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="timeline-dot flex items-center justify-center"
      >
        <IconComponent size={10} className="text-white" />
      </motion.div>

      {/* Carte de contenu */}
      <motion.div
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 ml-4"
      >
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {item.title}
            </h3>
            <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
              {isWork ? item.company : item.institution}
            </h4>
          </div>

          {/* Badge de statut */}
          <div className="flex flex-col items-end space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              item.endDate === 'Présent'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
            }`}>
              {item.endDate === 'Présent' ? 'En cours' : 'Terminé'}
            </span>
          </div>
        </div>

        {/* Informations */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <FiMapPin size={14} />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiCalendar size={14} />
            <span>{item.startDate} - {item.endDate}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Réalisations */}
        {item.achievements && item.achievements.length > 0 && (
          <div className="space-y-3">
            <h5 className="font-medium text-gray-900 dark:text-white flex items-center space-x-2">
              <FiAward size={16} className="text-primary-600 dark:text-primary-400" />
              <span>Réalisations clés</span>
            </h5>
            <ul className="space-y-2">
              {item.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="flex items-start space-x-3 text-sm text-gray-600 dark:text-gray-400"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Effet de brillance au hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;