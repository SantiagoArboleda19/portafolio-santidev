/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    // Mismos breakpoints que el CSS original: tablet 768px y desktop 1200px
    screens: {
      md: '768px',
      desktop: '1200px',
    },
    extend: {
      colors: {
        fondo: '#0F0B1A',
        superficie: '#1B1429',
        primario: '#8B5CF6',
        secundario: '#A78BFA',
        texto: '#EDE9FE',
        'texto-secundario': '#A39AAF',
      },
      fontFamily: {
        titulos: ['Montserrat', 'sans-serif'],
        textos: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};