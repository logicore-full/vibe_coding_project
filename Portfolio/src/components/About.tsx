import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const About = () => {
  // 根据熟练程度返回对应的颜色
  const getLevelColor = (level: string) => {
    switch (level) {
      case '精通':
        return 'text-red-500';
      case '掌握':
        return 'text-orange-500';
      case '熟练':
        return 'text-green-500';
      default:
        return 'text-orange-500';
    }
  };

  // 根据熟练程度返回对应的背景颜色
  const getLevelBgColor = (level: string) => {
    switch (level) {
      case '精通':
        return 'bg-red-500';
      case '掌握':
        return 'bg-orange-500';
      case '熟练':
        return 'bg-green-500';
      default:
        return 'bg-orange-500';
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-lg font-medium text-orange-500 mb-2">About</h2>
          <div className="w-16 h-1 bg-gray-800 mx-auto mb-6"></div>
          <h3 className="text-4xl font-bold text-gray-800">About Me</h3>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-6">🎨</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Creative Developer</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a creative developer with a passion for blending retro aesthetics with modern technology. 
                I specialize in building unique web experiences that combine nostalgic design elements with 
                cutting-edge functionality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in frontend development, I create responsive, performant, and visually 
                appealing websites that stand out from the crowd.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-6">My Skills</h4>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex-1 min-w-[180px]"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-8 rounded-full ${getLevelBgColor(skill.level)}`}></div>
                      <span className="font-medium text-gray-800 whitespace-nowrap">{skill.name}</span>
                    </div>
                    <span className={`font-medium ${getLevelColor(skill.level)}`}>{skill.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
