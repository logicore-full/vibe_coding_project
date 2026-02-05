import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <section id="projects" className="py-24 bg-retro-white relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:28px_28px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-lg font-medium text-orange-500 mb-2">{t.projects.subtitle}</h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mb-6"></div>
          <h3 className="text-4xl font-bold text-gray-800">{t.projects.title}</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut", 
                delay: index * 0.1
              }}
              className="bg-retro-card border-retro overflow-hidden"
            >
              {/* Project image */}
              <div className="h-48 bg-gradient-to-br from-retro-blue/10 to-retro-orange/10 flex items-center justify-center relative overflow-hidden">
                <span className="text-retro-dark text-6xl font-bold opacity-20">{project.name[0]}</span>
                {/* Retro scanline effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[size:100%_4px]"></div>
              </div>
              
              {/* Project content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-retro-orange rounded-full"></div>
                  <h4 className="text-xl font-bold text-retro-dark">{project.name}</h4>
                </div>
                
                <p className="text-retro-dark/70 mb-6">{project.description}</p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-retro-gray text-retro-dark rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project link */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-retro-dark text-white rounded-lg font-medium hover:bg-retro-orange transition-colors duration-300"
                >
                  <span>View Project</span>
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
