/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily: {
        "inter": ["var(--font-inter)"],
        "montserrat": ["var(--font-montserrat)"],
        "poppins": ["var(--font-poppins)"],
        "inconsolata": ["var(--font-inconsolata)"]
      },
      colors: {
        'bright-highlight': "#4F4FDF",
        "card": "rgba(32, 32, 75, 0.53)",
        'card-highlight': "#4F4FDF",
        'card-dark-highlight': "#4147B8",
        'card-component': "rgba(25, 47, 67, 0.25)",
        'dark-card': "rgba(217, 217, 217, 0.10)",
        'footer-background': "#1E1E1E",
      }
    },
  },
  plugins: [require("flowbite/plugin")],
}
