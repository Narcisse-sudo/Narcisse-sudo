import { motion } from 'framer-motion';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { personalInfo, certifications } from '../constants';

const About = () => {
  const stats = [
    { label: 'Années d\'expérience', value: '4+', icon: FaUser },
    { label: 'Projets réalisés', value: '50+', icon: FaAward },
    { label: 'Modèles ML déployés', value: '15+', icon: FaExternalLinkAlt },
    { label: 'Certifications', value: certifications.length, icon: FaAward }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
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
            À propos de moi
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez mon parcours et mes compétences en Data Science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Passionnée par la Data Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Mon approche combine expertise technique et vision business pour créer des solutions 
                d'intelligence artificielle qui génèrent un impact mesurable. Je maîtrise l'ensemble 
                de la chaîne de valeur de la donnée : de la collecte et préparation des données 
                jusqu'au déploiement de modèles en production.
              </p>
            </div>

            {/* Informations de contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <FaEnvelope className="text-primary-600 dark:text-primary-400" size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <FaPhone className="text-primary-600 dark:text-primary-400" size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Téléphone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400" size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Localisation</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <FaUser className="text-primary-600 dark:text-primary-400" size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Statut</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Disponible</p>
                </div>
              </div>
            </div>

            {/* Bouton CV */}
            <motion.a
              href={personalInfo.cvUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <FaExternalLinkAlt />
              <span>Télécharger mon CV</span>
            </motion.a>
          </motion.div>

          {/* Statistiques et certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  className="card-glass p-6 text-center"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full w-fit mx-auto mb-4">
                    <stat.icon className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Certifications récentes
              </h4>
              <div className="space-y-4">
                {certifications.slice(0, 3).map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    className="card-glass p-4 hover-scale"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.name}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {cert.issuer} • {cert.date}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          ID: {cert.credentialId}
                        </p>
                      </div>
                      <motion.a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                      >
                        <FaExternalLinkAlt size={14} />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;