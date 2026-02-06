import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as SimpleIcons from 'react-icons/si';
import { SKILLS } from '../constants';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const SkillCard = ({ skill, delay = 0 }) => {
    const IconComponent = SimpleIcons[skill.icon];
    
    return (
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
        variants={itemVariants}
        whileHover={{ y: -5, scale: 1.02 }}
      >
        <div className="flex items-center mb-4">
          <motion.div
            className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg flex items-center justify-center mr-4"
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.2 }}
          >
            {IconComponent ? (
              <IconComponent className="h-6 w-6 text-white" />
            ) : (
              <div className="h-6 w-6 bg-white rounded text-primary-600 flex items-center justify-center text-xs font-bold">
                {skill.name.charAt(0)}
              </div>
            )}
          </motion.div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
              {skill.name}
            </h4>
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              {skill.level}%
            </span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-500 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
            />
          </div>
          {/* Skill Level Indicator */}
          <motion.div
            className="absolute -top-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs font-semibold"
            initial={{ left: 0, opacity: 0 }}
            animate={isInView ? { 
              left: `calc(${skill.level}% - 20px)`, 
              opacity: 1 
            } : { 
              left: 0, 
              opacity: 0 
            }}
            transition={{ duration: 1.5, delay: delay + 0.5, ease: "easeOut" }}
          >
            {skill.level}%
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const SkillSection = ({ title, skills, delay = 0 }) => (
    <motion.div variants={itemVariants} className="mb-12">
      <motion.h3 
        className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            delay={delay + index * 0.1} 
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Compétences Techniques
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mon expertise technique couvre l'ensemble du pipeline de data science, 
              du développement à la mise en production.
            </p>
          </motion.div>

          {/* Programming Languages */}
          <SkillSection 
            title="Langages de Programmation" 
            skills={SKILLS.programming} 
            delay={0.2}
          />

          {/* Frameworks & Libraries */}
          <SkillSection 
            title="Frameworks & Bibliothèques" 
            skills={SKILLS.frameworks} 
            delay={0.4}
          />

          {/* Tools & Technologies */}
          <SkillSection 
            title="Outils & Technologies" 
            skills={SKILLS.tools} 
            delay={0.6}
          />

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Excellence Technique
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Ma passion pour l'apprentissage continu me permet de rester à la pointe 
                  des dernières technologies en data science et intelligence artificielle. 
                  Je m'efforce constamment d'améliorer mes compétences et d'explorer de 
                  nouveaux outils pour offrir des solutions innovantes.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span>Expert (90%+)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span>Avancé (80-89%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span>Intermédiaire (70-79%)</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Projets ML", value: "50+", color: "from-green-400 to-green-600" },
                  { label: "Modèles déployés", value: "12", color: "from-blue-400 to-blue-600" },
                  { label: "Technologies maîtrisées", value: "15+", color: "from-purple-400 to-purple-600" },
                  { label: "Années d'expérience", value: "5+", color: "from-red-400 to-red-600" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-r ${stat.color} rounded-xl p-4 text-white text-center`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="text-2xl font-bold mb-1"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Besoin d'expertise technique pour votre projet ?
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discutons de votre projet
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;