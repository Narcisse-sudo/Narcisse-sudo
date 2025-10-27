import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiPython, 
  SiR, 
  SiTensorflow, 
  SiPandas, 
  SiNumpy, 
  SiJupyter,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql,
  SiApachespark,
  SiTableau
} from 'react-icons/si';
import { FiDatabase, FiBarChart, FiCloud, FiCpu, FiTool } from 'react-icons/fi';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Langages de Programmation",
      icon: FiCpu,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95, icon: SiPython, color: "#3776ab" },
        { name: "R", level: 85, icon: SiR, color: "#276DC3" },
        { name: "SQL", level: 90, icon: FiDatabase, color: "#e97627" },
        { name: "Scala", level: 70, icon: FiCpu, color: "#dc322f" }
      ]
    },
    {
      title: "Machine Learning & IA",
      icon: FiCpu,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "TensorFlow", level: 85, icon: SiTensorflow, color: "#ff6f00" },
        { name: "Scikit-learn", level: 90, icon: FiCpu, color: "#f7931e" },
        { name: "PyTorch", level: 80, icon: FiCpu, color: "#ee4c2c" },
        { name: "XGBoost", level: 85, icon: FiCpu, color: "#1f4e79" }
      ]
    },
    {
      title: "Data Engineering",
      icon: FiDatabase,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Pandas", level: 95, icon: SiPandas, color: "#150458" },
        { name: "NumPy", level: 90, icon: SiNumpy, color: "#013243" },
        { name: "Apache Spark", level: 75, icon: SiApachespark, color: "#e25a1c" },
        { name: "Kafka", level: 70, icon: FiDatabase, color: "#231f20" }
      ]
    },
    {
      title: "Visualisation",
      icon: FiBarChart,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Tableau", level: 85, icon: SiTableau, color: "#e97627" },
        { name: "Power BI", level: 80, icon: FiBarChart, color: "#f2c811" },
        { name: "Plotly", level: 90, icon: FiBarChart, color: "#3f4f75" },
        { name: "Matplotlib", level: 85, icon: FiBarChart, color: "#11557c" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: FiCloud,
      color: "from-indigo-500 to-blue-500",
      skills: [
        { name: "AWS", level: 80, icon: SiAmazon, color: "#ff9900" },
        { name: "Google Cloud", level: 75, icon: SiGooglecloud, color: "#4285f4" },
        { name: "Docker", level: 85, icon: SiDocker, color: "#2496ed" },
        { name: "Kubernetes", level: 70, icon: SiKubernetes, color: "#326ce5" }
      ]
    },
    {
      title: "Bases de Données",
      icon: FiDatabase,
      color: "from-red-500 to-rose-500",
      skills: [
        { name: "PostgreSQL", level: 85, icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", level: 80, icon: SiMongodb, color: "#47a248" },
        { name: "Neo4j", level: 75, icon: FiDatabase, color: "#008cc1" },
        { name: "Redis", level: 70, icon: FiDatabase, color: "#dc382d" }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: SiAmazon
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2023",
      icon: SiGooglecloud
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022",
      icon: SiTensorflow
    },
    {
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft",
      year: "2022",
      icon: FiCpu
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeOut" }
    })
  };

  return (
    <section id="skills" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes <span className="text-gradient">Compétences</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un aperçu de mes compétences techniques et de mon expertise en Data Science
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <SkillIcon className="w-4 h-4" style={{ color: skill.color }} />
                              <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                            </div>
                            <span className="text-sm text-gray-600">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                              className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Skills Summary Stats */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold text-blue-600 mb-2"
                >
                  20+
                </motion.div>
                <div className="text-gray-700 font-medium">Technologies</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-bold text-green-600 mb-2"
                >
                  5+
                </motion.div>
                <div className="text-gray-700 font-medium">Années d'exp.</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl font-bold text-purple-600 mb-2"
                >
                  50+
                </motion.div>
                <div className="text-gray-700 font-medium">Projets</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-3xl font-bold text-orange-600 mb-2"
                >
                  4
                </motion.div>
                <div className="text-gray-700 font-medium">Certifications</div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Certifications & Formations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const CertIcon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CertIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                        <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                        <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;