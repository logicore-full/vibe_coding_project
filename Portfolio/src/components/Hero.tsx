import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-retro-white relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mb-4"
            >
              <h2 className="text-lg font-medium text-retro-dark mb-2">Retro Design</h2>
              <div className="w-20 h-1 bg-retro-orange mb-6"></div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-retro-dark">Welcome to</span>
              <br />
              <span className="text-gradient">My Portfolio</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-lg text-retro-dark/80 mb-8 max-w-lg"
            >
              A blend of retro aesthetics and modern technology, creating unique digital experiences with a nostalgic touch.
            </motion.p>
            
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(255, 107, 53, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="retro-button inline-block"
            >
              View Projects
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative">
              {/* Retro device mockup */}
              <motion.div 
                className="w-80 h-96 bg-white border-4 border-retro-gray rounded-lg shadow-xl relative overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {/* Device top */}
                <div className="h-6 bg-retro-gray flex items-center justify-center gap-2 px-4">
                  <div className="w-3 h-3 rounded-full bg-retro-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                  <div className="w-3 h-3 rounded-full bg-retro-accent"></div>
                </div>
                
                {/* Screen */}
                <div className="h-[calc(100%-24px)] bg-gradient-to-br from-retro-blue/10 to-retro-orange/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <div className="text-lg font-medium text-retro-dark">Creative Developer</div>
                  </div>
                </div>
                
                {/* Device bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-retro-gray flex items-center justify-center">
                  <div className="w-24 h-1 bg-retro-dark/30 rounded-full"></div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-retro-orange rounded-full flex items-center justify-center text-white font-bold"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                !
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-retro-green rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
