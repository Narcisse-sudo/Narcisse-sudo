import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SkillItem from '../components/SkillItem';
import { skills } from '../constants';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <section id="skills" ref={ref} className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour transformer vos données en insights précieux
          </p>
        </motion.div>

        {/* Navigation par catégories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {skills.map((category, index) => (
            <motion.button
              key={category.category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(index)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedCategory === index
                  ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Contenu des compétences */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Liste des compétences */}
          <motion.div
            key={selectedCategory} // Force re-render pour les animations
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              {skills[selectedCategory].items.map((skill, index) => (
                <SkillItem
                  key={`${selectedCategory}-${skill.name}`}
                  skill={skill}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>

          {/* Informations sur la catégorie */}
          <motion.div
            key={`info-${selectedCategory}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Statistiques de la catégorie */}
            <div className="card-glass p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {skills[selectedCategory].category}
              </h3>
              
              {/* Niveau moyen */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Niveau moyen
                  </span>
                  <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                    {Math.round(
                      skills[selectedCategory].items.reduce((acc, skill) => acc + skill.level, 0) /
                      skills[selectedCategory].items.length
                    )}%
                  </span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ 
                      width: inView ? `${Math.round(
                        skills[selectedCategory].items.reduce((acc, skill) => acc + skill.level, 0) /
                        skills[selectedCategory].items.length
                      )}%` : 0 
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="skill-progress bg-gradient-to-r from-primary-500 to-blue-500"
                  />
                </div>
              </div>

              {/* Répartition par niveau */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Expert', min: 90, color: 'text-green-600 dark:text-green-400' },
                  { label: 'Avancé', min: 80, color: 'text-blue-600 dark:text-blue-400' },
                  { label: 'Intermédiaire', min: 70, color: 'text-yellow-600 dark:text-yellow-400' },
                  { label: 'Débutant', min: 0, color: 'text-gray-600 dark:text-gray-400' }
                ].map((level) => {
                  const count = skills[selectedCategory].items.filter(skill => {
                    if (level.label === 'Expert') return skill.level >= 90;
                    if (level.label === 'Avancé') return skill.level >= 80 && skill.level < 90;
                    if (level.label === 'Intermédiaire') return skill.level >= 70 && skill.level < 80;
                    return skill.level < 70;
                  }).length;

                  return (
                    <motion.div
                      key={level.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                      className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className={`text-2xl font-bold ${level.color} mb-1`}>
                        {count}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {level.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Top 3 compétences */}
            <div className="card-glass p-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Top 3 dans cette catégorie
              </h4>
              <div className="space-y-3">
                {skills[selectedCategory].items
                  .sort((a, b) => b.level - a.level)
                  .slice(0, 3)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                          index === 0 ? 'bg-yellow-500' : 
                          index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Besoin d'expertise technique ?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Ces compétences sont au service de vos projets data. 
              Discutons de la façon dont je peux vous aider à atteindre vos objectifs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Discuter de votre projet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;