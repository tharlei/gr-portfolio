module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#1F1F1F',
        },
        gray: {
          100: '#E5E5E5',
          300: '#ABAAB2',
          500: '#9695AC',
          800: '#828290',
        },
        rose: {
          300: '#D3828F',
          500: '#B76E79',
        },
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      'abril-fatface': ['Abril Fatface', 'cursive'],
      mulish: ['Mulish', 'sans-serif'],
      amsterdam: ['Amsterdam Four', 'sans-serif'],
    },
  },
  plugins: [],
};
