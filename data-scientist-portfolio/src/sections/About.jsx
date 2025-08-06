import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTrendingUp, FiTarget, FiExternalLink } from 'react-icons/fi';
import { personalInfo, certifications } from '../constants';

const About = () => {
  const stats = [
    { icon: FiTrendingUp, label: "Projets ML", value: "50+", color: "text-blue-600" },
    { icon: FiUsers, label: "Équipes dirigées", value: "4", color: "text-green-600" },
    { icon: FiTarget, label: "Précision moyenne", value: "94%", color: "text-purple-600" },
    { icon: FiAward, label: "Certifications", value: "3", color: "text-orange-600" }
  ];

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
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-width">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* En-tête de section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              À propos de moi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Découvrez mon parcours et ma passion pour la science des données
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu principal */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Fort de plus de <strong>5 ans d'expérience</strong> dans le domaine de la data science, 
                  je me spécialise dans le développement de solutions d'intelligence artificielle 
                  qui transforment les données en insights exploitables.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mon expertise couvre l'ensemble du pipeline de données : de la collecte et 
                  du nettoyage des données jusqu'au déploiement de modèles ML en production. 
                  J'ai eu l'opportunité de travailler sur des projets variés dans les secteurs 
                  de l'e-commerce, de la finance et de la santé.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Passionné par l'innovation et l'apprentissage continu, je reste à la pointe 
                  des dernières technologies en IA et participe régulièrement à la communauté 
                  data science à travers des contributions open source et des conférences.
                </p>
              </div>

              {/* Bouton CV */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="pt-4"
              >
                <a
                  href={personalInfo.cvUrl}
                  download
                  className="btn-primary"
                >
                  <FiExternalLink size={20} />
                  Télécharger mon CV complet
                </a>
              </motion.div>
            </motion.div>

            {/* Statistiques */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center card-shadow"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.color} bg-opacity-10`}
                    >
                      <stat.icon size={24} className={stat.color} />
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 card-shadow group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <FiAward size={24} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full font-medium">
                      {cert.date}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {cert.name}
                  </h4>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {cert.issuer}
                  </p>
                  
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <span>Voir la certification</span>
                    <FiExternalLink size={14} />
                  </motion.a>
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