/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-main': '#c32026',
        'blue-main': '#0093d3',
        'yellow-accent': '#fdb813',
        'black-main': '#000000',
        'white-main': '#FFFFFF',
        neutral: {
          50: 'hsl(220, 10%, 98%)',
          100: 'hsl(220, 10%, 95%)',
          200: 'hsl(220, 10%, 90%)',
          300: 'hsl(220, 10%, 80%)',
          400: 'hsl(220, 10%, 60%)',
          500: 'hsl(220, 10%, 40%)',
          600: 'hsl(220, 10%, 30%)',
          700: 'hsl(220, 10%, 20%)',
          800: 'hsl(220, 10%, 15%)',
          900: 'hsl(220, 10%, 10%)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
