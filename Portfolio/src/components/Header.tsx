import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Header = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();

  const languages = [
    { code: 'zh', name: '简体中文' },
    { code: 'en', name: 'English' }
  ];

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const selectLanguage = (language: { code: string; name: string }) => {
    setCurrentLanguage(language.code);
    setShowLanguageDropdown(false);
  };

  const getLanguageName = (code: string) => {
    return languages.find(lang => lang.code === code)?.name || '简体中文';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-retro-white/90 backdrop-blur-md border-b border-retro-gray">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-bold"
        >
          <span className="text-retro-orange">logic</span>ore
        </motion.div>
        <div className="flex items-center space-x-8">
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex space-x-8"
          >
            <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <a href="#home" className="hover:text-retro-orange transition-colors duration-300">{t.nav.home}</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <a href="#about" className="hover:text-retro-orange transition-colors duration-300">{t.nav.about}</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <a href="#projects" className="hover:text-retro-orange transition-colors duration-300">{t.nav.projects}</a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <a href="#contact" className="hover:text-retro-orange transition-colors duration-300">{t.nav.contact}</a>
            </motion.li>
          </motion.ul>
          
          {/* 语言切换下拉框 */}
          <div className="relative">
            <motion.button
              onClick={toggleLanguageDropdown}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 px-3 py-1 border border-retro-gray rounded-lg hover:bg-retro-gray/10 transition-colors duration-300"
            >
              <span>{getLanguageName(currentLanguage)}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </motion.button>
            
            {showLanguageDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-white border border-retro-gray rounded-lg shadow-lg z-50"
              >
                <ul className="py-1">
                  {languages.map((language) => (
                    <li key={language.code}>
                      <button
                        onClick={() => selectLanguage(language)}
                        className={`w-full text-left px-4 py-2 hover:bg-retro-gray/10 transition-colors duration-300 ${currentLanguage === language.name ? 'bg-retro-orange/10 text-retro-orange' : ''}`}
                      >
                        {language.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
