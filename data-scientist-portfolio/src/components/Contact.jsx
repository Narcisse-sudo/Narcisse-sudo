import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub, 
  FiTwitter,
  FiSend,
  FiCheck,
  FiAlertCircle 
} from 'react-icons/fi';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  // Configuration EmailJS - À personnaliser avec vos propres clés
  const emailjsConfig = {
    serviceId: 'YOUR_SERVICE_ID', // Remplacer par votre Service ID
    templateId: 'YOUR_TEMPLATE_ID', // Remplacer par votre Template ID
    publicKey: 'YOUR_PUBLIC_KEY' // Remplacer par votre Public Key
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Configuration temporaire pour la démo
      // Dans un vrai projet, configurez EmailJS avec vos vraies clés
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Une erreur est survenue. Veuillez réessayer ou me contacter directement.'
      });
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'jean.dupont@email.com',
      link: 'mailto:jean.dupont@email.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiPhone,
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      link: 'tel:+33123456789',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiMapPin,
      title: 'Localisation',
      value: 'Paris, France',
      link: null,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jean-dupont',
      color: 'hover:text-blue-600'
    },
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/jean-dupont',
      color: 'hover:text-gray-900'
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/jean_dupont',
      color: 'hover:text-blue-400'
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

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Restons en <span className="text-gradient">Contact</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une question, un projet ou simplement envie d'échanger ? 
              N'hésitez pas à me contacter !
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Informations de contact
              </h3>
              
              {/* Contact Cards */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="block"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div
                      key={info.title}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Suivez-moi sur les réseaux
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-gray-600 ${social.color} border border-gray-200`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability Notice */}
              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-green-800 font-medium">Disponible pour de nouveaux projets</p>
                    <p className="text-green-600 text-sm">Réponse généralement sous 24h</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Envoyez-moi un message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Votre nom complet"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Sujet de votre message"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Décrivez votre projet ou votre question..."
                  />
                </div>

                {/* Status Messages */}
                {formStatus.isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg border border-green-200"
                  >
                    <FiCheck className="w-5 h-5" />
                    <span>Message envoyé avec succès ! Je vous répondrai bientôt.</span>
                  </motion.div>
                )}

                {formStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg border border-red-200"
                  >
                    <FiAlertCircle className="w-5 h-5" />
                    <span>{formStatus.error}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                    formStatus.isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800'
                  } text-white`}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Note */}
              <p className="text-sm text-gray-500 mt-4">
                * Champs obligatoires. Vos données sont traitées de manière confidentielle.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;