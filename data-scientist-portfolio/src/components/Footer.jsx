import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaKaggle, FaHeart } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_ITEMS } from '../constants';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    kaggle: FaKaggle
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">{PERSONAL_INFO.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Data Scientist passionné par l'intelligence artificielle et l'innovation. 
                Je transforme les données en insights stratégiques pour aider les entreprises 
                à prendre des décisions éclairées.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <HiMail className="h-4 w-4 mr-3 text-primary-400" />
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="hover:text-primary-400 transition-colors duration-200"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <HiPhone className="h-4 w-4 mr-3 text-primary-400" />
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="hover:text-primary-400 transition-colors duration-200"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <HiLocationMarker className="h-4 w-4 mr-3 text-primary-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
              <div className="flex space-x-4 mb-6">
                {Object.entries(socialIcons).map(([key, Icon]) => (
                  <motion.a
                    key={key}
                    href={SOCIAL_LINKS[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="btn-primary text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Retour en haut
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Tous droits réservés.
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Fait avec</span>
            <motion.div
              className="mx-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="h-4 w-4 text-red-500" />
            </motion.div>
            <span>et React + Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;