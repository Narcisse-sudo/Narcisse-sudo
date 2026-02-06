import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiCpu, FiBarChart } from 'react-icons/fi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Prédiction de Churn Client",
      description: "Modèle de machine learning pour prédire la probabilité qu'un client quitte l'entreprise, permettant d'optimiser les stratégies de rétention.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
      category: "Machine Learning",
      icon: FiCpu,
      githubUrl: "https://github.com/example/churn-prediction",
      demoUrl: "https://churn-demo.netlify.app",
      highlights: ["Précision de 94%", "Réduction du churn de 15%", "API REST intégrée"]
    },
    {
      id: 2,
      title: "Dashboard Analytique E-commerce",
      description: "Tableau de bord interactif pour analyser les performances d'une boutique en ligne avec des visualisations en temps réel.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Streamlit", "Plotly", "SQL"],
      category: "Data Visualization",
      icon: FiBarChart,
      githubUrl: "https://github.com/example/ecommerce-dashboard",
      demoUrl: "https://ecommerce-analytics.streamlit.app",
      highlights: ["Temps réel", "15+ métriques", "Interface intuitive"]
    },
    {
      id: 3,
      title: "Système de Recommandation",
      description: "Algorithme de recommandation personnalisé utilisant le filtrage collaboratif et le deep learning pour améliorer l'engagement utilisateur.",
      image: "/api/placeholder/400/250",
      technologies: ["TensorFlow", "Python", "Neo4j", "Docker"],
      category: "Deep Learning",
      icon: FiCode,
      githubUrl: "https://github.com/example/recommendation-system",
      demoUrl: "https://recommender-demo.herokuapp.com",
      highlights: ["+40% engagement", "Scalable", "API GraphQL"]
    },
    {
      id: 4,
      title: "Détection de Fraudes Bancaires",
      description: "Modèle d'IA pour détecter en temps réel les transactions frauduleuses avec un système d'alertes automatisées.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "XGBoost", "Kafka", "MongoDB"],
      category: "AI/ML",
      icon: FiDatabase,
      githubUrl: "https://github.com/example/fraud-detection",
      demoUrl: null,
      highlights: ["99.5% précision", "Temps réel", "Faible taux de faux positifs"]
    },
    {
      id: 5,
      title: "Analyse de Sentiment NLP",
      description: "Outil d'analyse de sentiment sur les réseaux sociaux pour comprendre la perception de marque en temps réel.",
      image: "/api/placeholder/400/250",
      technologies: ["BERT", "Transformers", "FastAPI", "Redis"],
      category: "NLP",
      icon: FiCpu,
      githubUrl: "https://github.com/example/sentiment-analysis",
      demoUrl: "https://sentiment-analyzer.vercel.app",
      highlights: ["Multi-langues", "API rapide", "Visualisations temps réel"]
    },
    {
      id: 6,
      title: "Pipeline MLOps Automatisé",
      description: "Infrastructure complète MLOps pour automatiser le déploiement et le monitoring de modèles de machine learning en production.",
      image: "/api/placeholder/400/250",
      technologies: ["MLflow", "Kubeflow", "Docker", "Kubernetes"],
      category: "MLOps",
      icon: FiCode,
      githubUrl: "https://github.com/example/mlops-pipeline",
      demoUrl: null,
      highlights: ["CI/CD complet", "Auto-scaling", "Monitoring avancé"]
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes <span className="text-gradient">Projets</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes projets en Data Science et Intelligence Artificielle
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-primary-600" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                      {project.demoUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Démo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">
              Envie d'en voir plus ? Consultez tous mes projets sur GitHub
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FiGithub className="w-5 h-5" />
              Voir tous mes projets
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;