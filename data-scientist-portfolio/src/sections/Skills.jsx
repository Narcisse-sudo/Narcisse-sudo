import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiBarChart3, FiCloud } from 'react-icons/fi';
import SkillItem from '../components/SkillItem';
import { skills } from '../constants';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programmation');
  const [inView, setInView] = useState(false);

  const skillCategories = {
    programmation: {
      title: 'Programmation',
      icon: FiCode,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      description: 'Langages de programmation et frameworks'
    },
    machineLearning: {
      title: 'Machine Learning',
      icon: FiDatabase,
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      description: 'Frameworks ML et bibliothèques'
    },
    dataViz: {
      title: 'Visualisation',
      icon: FiBarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      description: 'Outils de visualisation et reporting'
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: FiCloud,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      description: 'Plateformes cloud et déploiement'
    }
  };

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

  // Calculer le niveau moyen pour chaque catégorie
  const getAverageLevel = (category) => {
    const categorySkills = skills[category];
    const average = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
    return Math.round(average);
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-width">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setInView(true)}
          onViewportLeave={() => setInView(false)}
          className="space-y-12"
        >
          {/* En-tête de section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Mes Compétences
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Une expertise technique complète pour vos projets de data science
            </p>
          </motion.div>

          {/* Navigation par onglets */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === key
                      ? `${category.bgColor} ${category.color} shadow-lg`
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <IconComponent size={24} />
                  <div className="text-left">
                    <div className="font-medium">{category.title}</div>
                    <div className="text-xs opacity-75">
                      {getAverageLevel(key)}% moyenne
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Indicateur de progression global */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(skillCategories).map(([key, category]) => {
                const average = getAverageLevel(key);
                return (
                  <div key={key} className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 mx-auto mb-3 ${category.bgColor} rounded-full flex items-center justify-center`}
                    >
                      <category.icon size={24} className={category.color} />
                    </motion.div>
                    <div className="font-medium text-gray-900 dark:text-white mb-1">
                      {category.title}
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${average}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2"
                    >
                      <div 
                        className={`h-2 rounded-full ${category.color.replace('text-', 'bg-')}`}
                        style={{ width: `${average}%` }}
                      />
                    </motion.div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {average}%
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contenu des compétences */}
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* En-tête de la catégorie */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 ${skillCategories[activeTab].bgColor} rounded-lg`}>
                  <skillCategories[activeTab].icon 
                    size={32} 
                    className={skillCategories[activeTab].color} 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skillCategories[activeTab].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skillCategories[activeTab].description}
                  </p>
                </div>
              </div>

              {/* Liste des compétences */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills[activeTab].map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Résumé des compétences */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="text-4xl">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Technologies Modernes
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Maîtrise des dernières technologies et frameworks en data science et IA
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl">📈</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Amélioration Continue
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Formation continue et veille technologique pour rester à la pointe
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-4xl">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Résultats Mesurables
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Focus sur l'impact business et la création de valeur mesurable
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;