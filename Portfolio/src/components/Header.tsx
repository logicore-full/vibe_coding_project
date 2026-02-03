import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-retro-white/90 backdrop-blur-md border-b border-retro-gray">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl font-bold"
        >
          <span className="text-retro-orange">F</span>ri
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex space-x-8"
        >
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a href="#home" className="hover:text-retro-orange transition-colors duration-300">首页</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a href="#about" className="hover:text-retro-orange transition-colors duration-300">关于我</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a href="#projects" className="hover:text-retro-orange transition-colors duration-300">项目</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a href="#contact" className="hover:text-retro-orange transition-colors duration-300">联系</a>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
