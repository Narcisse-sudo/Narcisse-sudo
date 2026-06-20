import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="card-glass p-6 hover-scale"
    >
      {/* Image du projet */}
      <div className="relative mb-6 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x240/3b82f6/ffffff?text=${encodeURIComponent(project.title)}`;
          }}
        />
        
        {/* Overlay avec catégorie */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>

        {/* Overlay avec actions au hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
        >
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
          >
            <FaExternalLinkAlt size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Contenu */}
      <div className="space-y-4">
        {/* Titre et description */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Fonctionnalités principales */}
        {project.features && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
              Fonctionnalités principales :
            </h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + (featureIndex * 0.1) }}
                  className="text-xs text-gray-600 dark:text-gray-400 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
            >
              <FaCode size={14} />
              <span>Code</span>
            </motion.a>
            
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200 text-sm"
            >
              <FaEye size={14} />
              <span>Démo</span>
            </motion.a>
          </div>

          {/* ID du projet (discret) */}
          <span className="text-xs text-gray-400 dark:text-gray-600">
            #{project.id.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;