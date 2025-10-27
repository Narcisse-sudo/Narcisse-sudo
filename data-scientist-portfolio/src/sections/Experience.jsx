import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiLocationMarker, HiCalendar, HiCheckCircle } from 'react-icons/hi';
import { EXPERIENCE, EDUCATION } from '../constants';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Combine and sort experience and education by year (most recent first)
  const timeline = [
    ...EXPERIENCE.map(item => ({ ...item, type: 'work' })),
    ...EDUCATION.map(item => ({ ...item, type: 'education' }))
  ].sort((a, b) => {
    // Extract year from period string (assuming format "YYYY - YYYY" or "YYYY - Present")
    const getStartYear = (period) => {
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    return getStartYear(b.period) - getStartYear(a.period);
  });

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const TimelineItem = ({ item, index }) => {
    const isWork = item.type === 'work';
    const IconComponent = isWork ? HiBriefcase : HiAcademicCap;
    const bgColor = isWork ? 'bg-primary-600' : 'bg-green-600';
    const borderColor = isWork ? 'border-primary-200' : 'border-green-200';

    return (
      <motion.div
        className="relative flex items-start mb-12 last:mb-0"
        variants={itemVariants}
      >
        {/* Timeline Line */}
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
        
        {/* Timeline Icon */}
        <motion.div
          className={`relative z-10 flex-shrink-0 w-12 h-12 ${bgColor} rounded-full flex items-center justify-center shadow-lg`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <IconComponent className="h-6 w-6 text-white" />
        </motion.div>

        {/* Content Card */}
        <motion.div
          className={`ml-8 flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 ${borderColor} hover:shadow-xl transition-all duration-300`}
          whileHover={{ x: 5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {isWork ? item.title : item.degree}
              </h3>
              <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                {isWork ? item.company : item.school}
              </h4>
            </div>
            <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center mb-1">
                <HiCalendar className="h-4 w-4 mr-1" />
                <span className="font-medium">{item.period}</span>
              </div>
              <div className="flex items-center">
                <HiLocationMarker className="h-4 w-4 mr-1" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Achievements for work experience */}
          {isWork && item.achievements && (
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Réalisations clés :
              </h5>
              <ul className="space-y-2">
                {item.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  >
                    <HiCheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Grade for education */}
          {!isWork && item.grade && (
            <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
              <HiAcademicCap className="h-4 w-4 mr-1" />
              {item.grade}
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Expérience & Formation
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mon parcours professionnel et académique qui m'a mené à devenir 
              un expert en data science et intelligence artificielle.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { 
                number: "5+", 
                label: "Années d'expérience", 
                icon: HiBriefcase,
                color: "from-blue-500 to-blue-600"
              },
              { 
                number: "3", 
                label: "Diplômes obtenus", 
                icon: HiAcademicCap,
                color: "from-green-500 to-green-600"
              },
              { 
                number: "3", 
                label: "Entreprises", 
                icon: HiBriefcase,
                color: "from-purple-500 to-purple-600"
              },
              { 
                number: "15+", 
                label: "Technologies maîtrisées", 
                icon: HiCheckCircle,
                color: "from-red-500 to-red-600"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-r ${stat.color} rounded-xl p-6 text-white text-center shadow-lg`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex justify-center mb-3"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <motion.div
                  className="text-2xl md:text-3xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm opacity-90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Prêt à mettre mon expertise au service de votre projet ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <motion.a
                href="#contact"
                className="btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactez-moi
              </motion.a>
              <motion.button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv-alex-martin.pdf';
                  link.download = 'CV_Alex_Martin.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="btn-secondary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiAcademicCap className="h-5 w-5 mr-2" />
                Télécharger CV
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;