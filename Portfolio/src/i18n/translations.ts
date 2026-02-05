export interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    btnText: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string[];
    skills: string;
  };
  projects: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    form: {
      name: string;
      email: string;
      message: string;
      btnText: string;
    };
    links: {
      email: string;
      github: string;
      wechat: string;
    };
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}

export const translations: Record<string, Translation> = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我',
      projects: '项目',
      contact: '联系',
    },
    hero: {
      title: '你好，我是 logicore',
      subtitle: '创意开发者 & AI 应用开发工程师',
      btnText: '了解更多',
    },
    about: {
      title: '关于我',
      subtitle: 'About',
      description: [
        '我是一名创意开发者，热衷于将复古美学与现代技术相结合。我专注于构建独特的网络体验，将怀旧的设计元素与尖端功能相结合。',
        '凭借多年的前端开发经验，我创建响应式、高性能且视觉吸引力强的网站，从人群中脱颖而出。',
      ],
      skills: '我的技能',
    },
    projects: {
      title: '我的项目',
      subtitle: 'Projects',
    },
    contact: {
      title: '联系我',
      subtitle: 'Contact',
      description: '如果您有任何问题或项目想法，请随时与我联系！',
      form: {
        name: '您的姓名',
        email: '您的邮箱',
        message: '您的消息',
        btnText: '发送消息',
      },
      links: {
        email: '邮箱',
        github: 'GitHub',
        wechat: '微信',
      },
    },
    footer: {
      rights: '© 2026 logicore. 保留所有权利。',
      privacy: '隐私政策',
      terms: '服务条款',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Hello, I\'m logicore',
      subtitle: 'Creative Developer & AI Application Developer',
      btnText: 'Learn More',
    },
    about: {
      title: 'About Me',
      subtitle: 'About',
      description: [
        'I\'m a creative developer with a passion for blending retro aesthetics with modern technology. I specialize in building unique web experiences that combine nostalgic design elements with cutting-edge functionality.',
        'With years of experience in frontend development, I create responsive, performant, and visually appealing websites that stand out from the crowd.',
      ],
      skills: 'My Skills',
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Projects',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Contact',
      description: 'If you have any questions or project ideas, feel free to reach out to me!',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        btnText: 'Send Message',
      },
      links: {
        email: 'Email',
        github: 'GitHub',
        wechat: 'WeChat',
      },
    },
    footer: {
      rights: '© 2026 logicore. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};
