import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiGraduationCap, FiUsers, FiTrendingUp } from 'react-icons/fi';
import TimelineItem from '../components/TimelineItem';
import { experience, education } from '../constants';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

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

  const allItems = [...experience, ...education].sort((a, b) => {
    // Tri par date de fin décroissante (les plus récents en premier)
    const dateA = a.endDate === 'Présent' ? new Date() : new Date(a.endDate);
    const dateB = b.endDate === 'Présent' ? new Date() : new Date(b.endDate);
    return dateB - dateA;
  });

  const displayItems = activeTab === 'experience' ? experience : 
                       activeTab === 'education' ? education : allItems;

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
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
              Mon Parcours
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Un parcours riche en expériences et en apprentissages continus
            </p>
          </motion.div>

          {/* Navigation par onglets */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-2 inline-flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('experience')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'experience'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <FiBriefcase size={20} />
                <span>Expérience</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('education')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'education'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <FiGraduationCap size={20} />
                <span>Formation</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab('all')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === 'all'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <FiTrendingUp size={20} />
                <span>Chronologie</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Statistiques rapides */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center card-shadow">
              <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Années d'expérience
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center card-shadow">
              <div className="text-2xl font-bold text-green-600 mb-2">
                {experience.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Postes occupés
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center card-shadow">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                50+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Projets réalisés
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center card-shadow">
              <div className="text-2xl font-bold text-purple-600 mb-2">
                20+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Personnes formées
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-0"
            >
              {displayItems.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLast={index === displayItems.length - 1}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Résumé des compétences développées */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Compétences développées
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                  <FiUsers size={32} className="text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Leadership
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Direction d'équipes multidisciplinaires et gestion de projets complexes 
                  avec un focus sur les résultats business.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                  <FiTrendingUp size={32} className="text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Innovation
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Développement de solutions innovantes en IA et mise en place de 
                  processus d'amélioration continue.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto">
                  <FiBriefcase size={32} className="text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Expertise Métier
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Compréhension approfondie des enjeux business et capacité 
                  à traduire les besoins métier en solutions techniques.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div variants={itemVariants} className="text-center">
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
              Collaborons ensemble
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;