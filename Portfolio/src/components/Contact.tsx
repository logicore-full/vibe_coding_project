import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getEmailProviderUrl = (email: string, subject: string, body: string) => {
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return null;

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const recipient = '2924190189@qq.com';

    // 为不同邮箱网站构建特定URL，实现自动编辑邮件内容的功能
    const providerMap: { [key: string]: string } = {
      'qq.com': `https://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=${recipient}?subject=${encodedSubject}&body=${encodedBody}`,
      '163.com': `https://mail.163.com/js6/main.jsp?sid=&df=mail163_letter#module=read.ReadModule%7C%7B%22area%22%3A%22compose%22%2C%22to%22%3A%22${recipient}%22%2C%22subject%22%3A%22${encodedSubject}%22%2C%22content%22%3A%22${encodedBody}%22%7D`,
      '126.com': `https://mail.126.com/js6/main.jsp?sid=&df=mail126_letter#module=read.ReadModule%7C%7B%22area%22%3A%22compose%22%2C%22to%22%3A%22${recipient}%22%2C%22subject%22%3A%22${encodedSubject}%22%2C%22content%22%3A%22${encodedBody}%22%7D`,
      'gmail.com': `https://mail.google.com/mail/u/0/?fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}&tf=cm`,
      'outlook.com': `https://outlook.live.com/mail/0/deeplink/compose?to=${recipient}&subject=${encodedSubject}&body=${encodedBody}`,
      'hotmail.com': `https://outlook.live.com/mail/0/deeplink/compose?to=${recipient}&subject=${encodedSubject}&body=${encodedBody}`,
      'sina.com': `https://mail.sina.com.cn/#module=write.WritemailModule%7C%7B%22type%22%3A%22new%22%2C%22isTemplate%22%3Afalse%2C%22to%22%3A%22${recipient}%22%2C%22subject%22%3A%22${encodedSubject}%22%2C%22content%22%3A%22${encodedBody}%22%7D`,
      'sohu.com': `https://mail.sohu.com/app/sendmail?to=${recipient}&subject=${encodedSubject}&content=${encodedBody}`,
      'foxmail.com': `https://mail.foxmail.com/js6/main.jsp?sid=&df=foxmail#module=read.ReadModule%7C%7B%22area%22%3A%22compose%22%2C%22to%22%3A%22${recipient}%22%2C%22subject%22%3A%22${encodedSubject}%22%2C%22content%22%3A%22${encodedBody}%22%7D`
    };

    return providerMap[domain] || null;
  };

  const handleSendEmail = () => {
    const { name, email, message } = formData;
    
    if (!name || !email || !message) {
      alert('请填写所有必填字段');
      return;
    }

    setShowModal(true);
  };

  const handleConfirmSend = () => {
    const { name, email, message } = formData;
    
    // 构建邮件主题和正文
    const subject = `Message from ${name}`;
    const body = `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // 获取对应邮箱网站的URL（包含自动编辑邮件内容的参数）
    const emailProviderUrl = getEmailProviderUrl(email, subject, body);
    
    if (emailProviderUrl) {
      try {
        // 打开对应邮箱网站
        const openedWindow = window.open(emailProviderUrl, '_blank');
        
        if (!openedWindow) {
          alert('无法打开邮箱网站，请检查您的浏览器设置是否允许弹出窗口。');
        } else {
          // 延迟提示用户
          setTimeout(() => {
            alert('系统已打开您的邮箱网站。\n\n如果您已登录邮箱，系统会自动打开邮件编辑页面并填充内容。如果未登录，请先登录后再发送邮件。\n\n提示：邮箱网站可能会有一些资源加载错误，这是正常现象，不影响您发送邮件。');
          }, 1000);
        }
      } catch (error) {
        console.error('打开邮箱网站时出错:', error);
        alert('打开邮箱网站时出错，请手动登录邮箱发送邮件给 2924190189@qq.com');
      }
    } else {
      // 如果无法识别邮箱服务商，提示用户手动登录邮箱发送邮件
      alert('无法识别您的邮箱服务商，请手动登录邮箱发送邮件给 2924190189@qq.com');
    }
    
    setShowModal(false);
  };

  const handleCancelSend = () => {
    setShowModal(false);
  };

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
          <h2 className="text-lg font-medium text-retro-orange mb-2">{t.contact.subtitle}</h2>
          <div className="w-16 h-1 bg-retro-dark mx-auto mb-6"></div>
          <h3 className="text-4xl font-bold text-retro-dark">{t.contact.title}</h3>
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
                  {t.contact.description}
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
                    <span className="text-retro-dark">2924190189@qq.com</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/logicore-full"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3 p-3 bg-retro-gray/50 rounded-lg hover:bg-retro-orange/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-retro-orange/10 rounded-full flex items-center justify-center text-retro-orange">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                    <span className="text-retro-dark">GitHub</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://login.weixin.qq.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-3 p-3 bg-retro-gray/50 rounded-lg hover:bg-retro-orange/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 bg-retro-orange/10 rounded-full flex items-center justify-center text-retro-orange">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                      </svg>
                    </div>
                    <span className="text-retro-dark">WeChat</span>
                  </motion.a>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-retro-gray/30 p-6 rounded-lg">
                  <h5 className="text-lg font-bold text-retro-dark mb-4">Send a Message</h5>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.name} 
                        className="w-full p-3 border border-retro-gray rounded-lg focus:outline-none focus:border-retro-orange focus:ring-2 focus:ring-retro-orange/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.email} 
                        className="w-full p-3 border border-retro-gray rounded-lg focus:outline-none focus:border-retro-orange focus:ring-2 focus:ring-retro-orange/20 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t.contact.form.message} 
                        rows={4} 
                        className="w-full p-3 border border-retro-gray rounded-lg focus:outline-none focus:border-retro-orange focus:ring-2 focus:ring-retro-orange/20 transition-all duration-300"
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={handleSendEmail}
                      className="w-full retro-button"
                    >
                      {t.contact.form.btnText}
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-retro-dark mb-4">跳转到邮箱网站</h3>
            <p className="text-retro-dark/70 mb-4">
              系统将根据您输入的邮箱地址跳转到相应的邮箱网站。
            </p>
            <p className="text-retro-dark/70 mb-6">
              如果您已登录邮箱，系统会自动打开邮件编辑页面并填充好邮件内容，您只需点击发送即可。如果未登录，请先登录后再发送邮件。
            </p>
            <p className="text-retro-dark/70 mb-6">
              收件人：<span className="font-bold text-retro-orange">2924190189@qq.com</span>
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleCancelSend}
                className="flex-1 px-6 py-3 border border-retro-gray rounded-lg text-retro-dark hover:bg-retro-gray/10 transition-colors duration-300"
              >
                取消
              </button>
              <button
                onClick={handleConfirmSend}
                className="flex-1 px-6 py-3 bg-retro-orange text-white rounded-lg hover:bg-retro-orange/90 transition-colors duration-300"
              >
                确认跳转
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Contact;
