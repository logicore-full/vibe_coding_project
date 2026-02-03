import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
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
          <h2 className="text-lg font-medium text-retro-orange mb-2">Contact</h2>
          <div className="w-16 h-1 bg-retro-dark mx-auto mb-6"></div>
          <h3 className="text-4xl font-bold text-retro-dark">Get In Touch</h3>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-retro-card p-8 border-retro"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="text-4xl mb-6">📞</div>
                <h4 className="text-2xl font-bold text-retro-dark mb-4">Contact Me</h4>
                <p className="text-retro-dark/70 mb-6">
                  If you have any questions or project ideas, feel free to reach out to me!
                </p>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:example@email.com"
                    whileHover={{ scale: 1.03, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3 p-3 bg-retro-gray/50 rounded-lg hover:bg-retro-orange/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-retro-orange/10 rounded-full flex items-center justify-center text-retro-orange">
                      📧
                    </div>
                    <span className="text-retro-dark">example@email.com</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3 p-3 bg-retro-gray/50 rounded-lg hover:bg-retro-orange/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-retro-orange/10 rounded-full flex items-center justify-center text-retro-orange">
                      💻
                    </div>
                    <span className="text-retro-dark">GitHub</span>
                  </motion.a>
                  
                  <motion.div
                    whileHover={{ scale: 1.03, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3 p-3 bg-retro-gray/50 rounded-lg hover:bg-retro-orange/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-retro-orange/10 rounded-full flex items-center justify-center text-retro-orange">
                      💬
                    </div>
                    <span className="text-retro-dark">WeChat</span>
                  </motion.div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-retro-gray/30 p-6 rounded-lg">
                  <h5 className="text-lg font-bold text-retro-dark mb-4">Send a Message</h5>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-3 border border-retro-gray rounded-lg focus:outline-none focus:border-retro-orange focus:ring-2 focus:ring-retro-orange/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full p-3 border border-retro-gray rounded-lg focus:outline-none focus:border-retro-orange focus:ring-2 focus:ring-retro-orange/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Your Message" 
                        rows={4} 
                        className="w-full p-3 border border-retro-gray rounded-lg focus:outline-none focus:border-retro-orange focus:ring-2 focus:ring-retro-orange/20 transition-all duration-300"
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full retro-button"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
