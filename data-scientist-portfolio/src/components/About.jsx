import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FiDatabase, 
  FiBarChart, 
  FiCode, 
  FiTrendingUp, 
  FiTarget,
  FiCpu
} from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: FiCpu,
      title: 'Machine Learning',
      description: 'Développement de modèles prédictifs et d\'algorithmes d\'apprentissage automatique'
    },
    {
      icon: FiDatabase,
      title: 'Data Engineering',
      description: 'Extraction, transformation et gestion de données massives'
    },
    {
      icon: FiBarChart,
      title: 'Visualisation',
      description: 'Création de dashboards et visualisations interactives'
    },
    {
      icon: FiCpu,
      title: 'Deep Learning',
      description: 'Réseaux de neurones et intelligence artificielle avancée'
    },
    {
      icon: FiTrendingUp,
      title: 'Analytics',
      description: 'Analyse statistique et insights business'
    },
    {
      icon: FiTarget,
      title: 'NLP',
      description: 'Traitement du langage naturel et analyse de texte'
    }
  ];

  const technologies = [
    { name: 'Python', level: 95 },
    { name: 'R', level: 85 },
    { name: 'SQL', level: 90 },
    { name: 'TensorFlow', level: 80 },
    { name: 'Scikit-learn', level: 90 },
    { name: 'Pandas', level: 95 },
    { name: 'Tableau', level: 85 },
    { name: 'Power BI', level: 80 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              À propos de <span className="text-gradient">moi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez mon parcours et mes compétences en Data Science
            </p>
          </motion.div>

          {/* Biography */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mon histoire</h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Avec plus de 5 ans d'expérience en Data Science, je me spécialise dans la 
                  transformation de données complexes en solutions business tangibles. Mon parcours 
                  m'a mené de l'analyse exploratoire à la mise en production de modèles d'IA 
                  à grande échelle.
                </p>
                <p className="mb-4">
                  Passionné par l'innovation technologique, je maîtrise l'ensemble de la chaîne 
                  de valeur data : de la collecte et preprocessing jusqu'au déploiement de modèles 
                  en production. J'ai eu l'opportunité de travailler sur des projets variés, 
                  allant de la prédiction de churn client à la détection de fraudes, en passant 
                  par des systèmes de recommandation personnalisés.
                </p>
                <p>
                  Mon approche combine rigueur scientifique et pragmatisme business, toujours 
                  dans l'objectif de créer de la valeur mesurable pour les organisations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Mes expertises
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {skill.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Technologies & Outils
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="flex items-center space-x-4"
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{tech.name}</span>
                      <span className="text-sm text-gray-600">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;