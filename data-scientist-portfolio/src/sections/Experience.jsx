import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import TimelineItem from '../components/TimelineItem';
import { experience, education } from '../constants';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  // Combiner et trier par dates (plus récent en premier)
  const allItems = [...experience, ...education].sort((a, b) => {
    // Extraction de l'année de fin pour le tri
    const getEndYear = (period) => {
      if (period.includes('Présent')) return 2024;
      const match = period.match(/(\d{4})/g);
      return match ? parseInt(match[match.length - 1]) : 0;
    };
    return getEndYear(b.period) - getEndYear(a.period);
  });

  const workExperience = allItems.filter(item => item.type === 'work');
  const educationItems = allItems.filter(item => item.type === 'education');

  const getCurrentItems = () => {
    switch (activeTab) {
      case 'experience':
        return workExperience;
      case 'education':
        return educationItems;
      case 'all':
      default:
        return allItems;
    }
  };

  const tabs = [
    { id: 'all', label: 'Tout', icon: null, count: allItems.length },
    { id: 'experience', label: 'Expérience', icon: FaBriefcase, count: workExperience.length },
    { id: 'education', label: 'Formation', icon: FaGraduationCap, count: educationItems.length }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            Mon Parcours
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez mon évolution professionnelle et académique en Data Science
          </p>
        </motion.div>

        {/* Navigation par onglets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white dark:bg-gray-700 rounded-xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {tab.icon && <tab.icon size={16} />}
                <span>{tab.label}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeTab === tab.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Statistiques rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="card-glass p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {workExperience.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Expériences professionnelles
            </div>
          </div>
          
          <div className="card-glass p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              4+
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Années d'expérience
            </div>
          </div>
          
          <div className="card-glass p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {educationItems.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              Formations diplômantes
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          key={activeTab} // Force re-render pour les animations
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          {getCurrentItems().length > 0 ? (
            <div className="space-y-0">
              {getCurrentItems().map((item, index) => (
                <TimelineItem
                  key={`${item.type}-${item.id}`}
                  item={item}
                  index={index}
                  isLast={index === getCurrentItems().length - 1}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Aucun élément trouvé dans cette catégorie.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuons ensemble cette aventure
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Mon parcours m'a menée jusqu'ici, mais c'est avec vous que je souhaite 
              écrire la suite. Parlons de vos projets data !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Me contacter
              </motion.button>
              
              <motion.a
                href="/cv-marie-dubois.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Télécharger mon CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;