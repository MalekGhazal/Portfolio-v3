/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'malek-white': '#F5F7F8',
      'malek-yellow': '#F4CE14',
      'malek-green': '#495E57',
      'malek-dark': '#45474B',
    },
    fontFamily: {
      'bungee-shade': ['Bungee Shade', 'sans-serif'],
      'bungee-normal': ['Bungee', 'sans-serif'],
      'bungee-hairline': ['Bungee Hairline', 'sans-serif'],
      'source-code': ['Source Code Pro', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
};
