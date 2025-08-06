import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const TimelineItem = ({ item, index, isLast }) => {
  const isWork = item.type === 'work';
  const Icon = isWork ? FaBriefcase : FaGraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-16 pb-12"
    >
      {/* Ligne de timeline */}
      {!isLast && (
        <div className="timeline-line"></div>
      )}

      {/* Point de timeline */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        className="timeline-dot"
      >
        <Icon size={8} className="text-white" />
      </motion.div>

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        className="card-glass p-6 ml-4"
      >
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {item.title}
            </h3>
            <div className="flex items-center space-x-4 text-primary-600 dark:text-primary-400 mb-2">
              <span className="font-semibold">
                {item.company}
              </span>
              <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
                <FaMapMarkerAlt size={12} />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
            <FaCalendarAlt size={12} />
            <span>{item.period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Réalisations */}
        {item.achievements && item.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
              {isWork ? 'Réalisations principales :' : 'Points forts :'}
            </h4>
            <ul className="space-y-2">
              {item.achievements.map((achievement, achievementIndex) => (
                <motion.li
                  key={achievementIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.2 + 0.5 + (achievementIndex * 0.1) 
                  }}
                  className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {item.technologies && item.technologies.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Technologies utilisées :
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.2 + 0.6 + (techIndex * 0.05) 
                  }}
                  className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;