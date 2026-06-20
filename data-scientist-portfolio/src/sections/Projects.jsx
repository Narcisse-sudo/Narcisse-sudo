import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [viewMode, setViewMode] = useState('grid');

  // Extraire toutes les catégories uniques
  const categories = ['Tous', ...new Set(projects.map(project => project.category))];

  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = selectedCategory === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-width">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* En-tête de section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Mes Projets
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Découvrez une sélection de mes projets de data science et machine learning
            </p>
          </motion.div>

          {/* Filtres et contrôles */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Filtres par catégorie */}
            <div className="flex items-center space-x-2">
              <FiFilter className="text-gray-600 dark:text-gray-400" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Modes d'affichage */}
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 rounded-lg p-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                aria-label="Vue en grille"
              >
                <FiGrid size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
                aria-label="Vue en liste"
              >
                <FiList size={18} />
              </motion.button>
            </div>
          </motion.div>

          {/* Compteur de projets */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.p
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gray-600 dark:text-gray-400"
            >
              {filteredProjects.length} projet{filteredProjects.length !== 1 ? 's' : ''} 
              {selectedCategory !== 'Tous' && ` en ${selectedCategory}`}
            </motion.p>
          </motion.div>

          {/* Grille des projets */}
          <motion.div
            layout
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard 
                  project={project} 
                  index={index}
                  viewMode={viewMode}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Message si aucun projet */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400 mb-2">
                Aucun projet trouvé
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                Essayez de sélectionner une autre catégorie
              </p>
            </motion.div>
          )}

          {/* Statistiques des projets */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {projects.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projets Totaux
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-green-600">
                {categories.length - 1}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Catégories
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-blue-600">
                {projects.filter(p => p.liveUrl).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Démos Live
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-purple-600">
                {projects.filter(p => p.githubUrl).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Open Source
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discutons de votre projet
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;