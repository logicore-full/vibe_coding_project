/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-white': '#f8f8f8',
        'retro-gray': '#e0e0e0',
        'retro-dark': '#333333',
        'retro-orange': '#ff6b35',
        'retro-green': '#4ecdc4',
        'retro-blue': '#1a535c',
        'retro-accent': '#ff9f1c',
      },
      fontFamily: {
        'retro': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 10px rgba(255, 107, 53, 0.5)',
          },
          '100%': {
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.8)',
          },
        },
      },
    },
  },
  plugins: [],
}
