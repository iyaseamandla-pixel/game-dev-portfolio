/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glow-cyan': '#00f0ff',
        'glow-purple': '#b829f7',
        'glow-pink': '#ff2a6d',
        'dark-bg': '#0a0a0f',
        'dark-card': '#13131f',
        'dark-surface': '#1c1c2e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 240, 255, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
