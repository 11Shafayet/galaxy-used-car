/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C6135',
        primaryLight: '#3AB579',
        secondary: '#242424',
        tertiary: '#90A3BF',
        danger: '#BA2223',
      },
    },
  },
  plugins: [],
};
