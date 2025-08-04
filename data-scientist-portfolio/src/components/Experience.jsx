import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiMapPin, FiCalendar, FiAward, FiTrendingUp } from 'react-icons/fi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Data Scientist',
      company: 'TechCorp Solutions',
      location: 'Paris, France',
      period: '2022 - Présent',
      description: 'Direction d\'une équipe de 5 data scientists pour développer des solutions IA innovantes.',
      achievements: [
        'Développement d\'un système de recommandation augmentant l\'engagement de 40%',
        'Mise en place d\'une infrastructure MLOps réduisant le time-to-market de 60%',
        'Formation et mentoring de junior data scientists'
      ],
      skills: ['Python', 'TensorFlow', 'AWS', 'Kubernetes', 'MLOps']
    },
    {
      id: 2,
      type: 'education',
      title: 'Master en Intelligence Artificielle',
      company: 'Université Paris-Saclay',
      location: 'Saclay, France',
      period: '2020 - 2022',
      description: 'Spécialisation en Deep Learning et traitement du langage naturel.',
      achievements: [
        'Major de promotion avec mention Très Bien',
        'Thèse sur l\'analyse de sentiment multi-lingue',
        'Stage de recherche au laboratoire LIMSI-CNRS'
      ],
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
      id: 3,
      type: 'work',
      title: 'Data Scientist',
      company: 'FinanceAI Startup',
      location: 'Lyon, France',
      period: '2020 - 2022',
      description: 'Développement de modèles de détection de fraudes et d\'analyse de risque.',
      achievements: [
        'Création d\'un modèle de détection de fraudes avec 99.5% de précision',
        'Réduction des faux positifs de 70%',
        'Automatisation complète du pipeline de données'
      ],
      skills: ['Scikit-learn', 'XGBoost', 'Python', 'SQL', 'Docker']
    },
    {
      id: 4,
      type: 'education',
      title: 'École d\'Ingénieur - Spécialité Data Science',
      company: 'ENSIMAG',
      location: 'Grenoble, France',
      period: '2017 - 2020',
      description: 'Formation d\'ingénieur avec spécialisation en science des données et statistiques.',
      achievements: [
        'Projet de fin d\'études en partenariat avec Orange Labs',
        'Stage de 6 mois chez Google DeepMind Londres',
        'Président du club Data Science de l\'école'
      ],
      skills: ['Mathématiques', 'Statistiques', 'Algorithmes', 'Programmation']
    },
    {
      id: 5,
      type: 'work',
      title: 'Analyste Data Junior',
      company: 'DataViz Consulting',
      location: 'Paris, France',
      period: '2019 - 2020',
      description: 'Analyse de données et création de dashboards pour des clients du secteur retail.',
      achievements: [
        'Développement de 15+ dashboards interactifs',
        'Amélioration de 25% des KPI clients',
        'Formation aux outils de visualisation'
      ],
      skills: ['Tableau', 'Power BI', 'SQL', 'Python', 'Excel']
    }
  ];

  const awards = [
    {
      title: 'Best Data Science Project',
      organization: 'Paris AI Conference 2023',
      year: '2023',
      description: 'Reconnaissance pour le projet de prédiction de churn client'
    },
    {
      title: 'Innovation Award',
      organization: 'TechCorp Solutions',
      year: '2023',
      description: 'Prix interne pour l\'innovation en MLOps'
    },
    {
      title: 'Excellence Académique',
      organization: 'Université Paris-Saclay',
      year: '2022',
      description: 'Major de promotion Master IA'
    }
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 2, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mon <span className="text-gradient">Parcours</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez mon parcours professionnel et académique en Data Science
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5">
              <motion.div
                variants={timelineVariants}
                className="w-full bg-gradient-to-b from-primary-500 to-blue-500"
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isWork = exp.type === 'work';
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Timeline Icon */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 transform -translate-x-1/2 md:-translate-x-2 z-10">
                      <div className={`w-4 h-4 rounded-full border-4 border-white ${
                        isWork ? 'bg-primary-500' : 'bg-green-500'
                      } shadow-lg`}></div>
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      isLeft ? 'md:pr-8' : 'md:pl-8'
                    }`}>
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                              isWork ? 'bg-blue-100' : 'bg-green-100'
                            }`}>
                              {isWork ? (
                                <FiBriefcase className={`w-5 h-5 ${
                                  isWork ? 'text-blue-600' : 'text-green-600'
                                }`} />
                              ) : (
                                <FiBookOpen className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                              <p className="text-primary-600 font-medium">{exp.company}</p>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isWork 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {isWork ? 'Expérience' : 'Formation'}
                          </span>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <FiCalendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FiMapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 mb-4">{exp.description}</p>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                            <FiTrendingUp className="w-4 h-4 mr-2" />
                            Réalisations clés
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block w-2/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Awards Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Récompenses & Distinctions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiAward className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{award.title}</h4>
                  <p className="text-primary-600 font-medium mb-2">{award.organization}</p>
                  <p className="text-sm text-gray-600 mb-2">{award.description}</p>
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;