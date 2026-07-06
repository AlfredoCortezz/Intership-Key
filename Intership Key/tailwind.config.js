/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Soporte para modo oscuro por clase
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Albert Sans"', 'sans-serif'],
      },
      colors: {
        primary: '#006DFF',
        background: '#F5F5F5',
        green: '#31E083',
        'gray-light': '#E5E5E8',
        'gray-medium': '#CBCBC4',
        'gray-dark': '#7E7D8A',
        accent: '#8E4BFB',
        black: '#000000',
        // Colores base para tema oscuro (se sobreescriben en variables CSS o se usan utility classes)
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
      },
      borderRadius: {
        DEFAULT: '12px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px'
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
