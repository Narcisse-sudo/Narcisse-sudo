import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiChartBar, HiDatabase, HiCog } from 'react-icons/hi';
import { PERSONAL_INFO, CERTIFICATIONS } from '../constants';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    {
      icon: HiCog,
      title: "Machine Learning",
      description: "Développement de modèles prédictifs avancés avec TensorFlow, PyTorch et Scikit-learn"
    },
    {
      icon: HiChartBar,
      title: "Data Analysis",
      description: "Analyse exploratoire et visualisation de données complexes pour générer des insights"
    },
    {
      icon: HiCode,
      title: "Natural Language Processing",
      description: "Traitement du langage naturel pour l'analyse de sentiment et la classification de texte"
    },
    {
      icon: HiDatabase,
      title: "Big Data",
      description: "Gestion et analyse de grandes volumétries avec Apache Spark et technologies cloud"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  return (
    <section ref={ref} id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              À propos de moi
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionné par l'intelligence artificielle et l'analyse de données, 
              je transforme des problèmes complexes en solutions innovantes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Biography */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Mon parcours
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Avec un doctorat en Intelligence Artificielle de l'École Polytechnique, 
                  j'ai développé une expertise approfondie dans les domaines du machine learning, 
                  du traitement du langage naturel et de l'analyse prédictive.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Je suis particulièrement passionné par l'application de l'IA à des problèmes 
                  concrets qui peuvent avoir un impact positif sur la société, que ce soit dans 
                  le domaine médical, financier ou environnemental.
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Certifications récentes
                </h4>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {cert.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {cert.issuer}
                        </div>
                      </div>
                      <div className="text-primary-600 dark:text-primary-400 font-medium">
                        {cert.year}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills Cards */}
            <motion.div variants={itemVariants} className="grid gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <skill.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {skill.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "5+", label: "Années d'expérience" },
              { number: "50+", label: "Projets réalisés" },
              { number: "12", label: "Modèles en production" },
              { number: "3", label: "Certifications" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;