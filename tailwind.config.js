module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', '/public/index.html'],
  theme: {
    extend: {
      spacing: {
        0.1: '0.063rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
