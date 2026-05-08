/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        selects: 'var(--selects)',
        'text-selects': 'var(--text-selects)',
        terc: 'var(--terc)',
        verdeportal: 'var(--verdeportal)',
        azulrick: 'var(--azulrick)',
        'amarelo-morty': 'var(--amarelo-morty)',
        'borda-neon': 'var(--borda-neon)',
      },
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        gill: ['Gill Sans', 'Gill Sans MT', 'Calibri', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
