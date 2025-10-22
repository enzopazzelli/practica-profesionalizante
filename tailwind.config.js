/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{app,pages,components,src}/**/*.{js,ts,jsx,tsx,mdx}', // Configuración más genérica
  ],
  theme: {
    extend: {
      colors: {
        'red-main': '#c32026',
        'blue-main': '#0093d3',
        'yellow-accent': '#fdb813',
        'black-main': '#000000',
        'white-main': '#FFFFFF',
        'red-darker': '#a01a1f',
        'blue-darker': '#007bb5',
        
        // Custom Colors from globals.css
        primary: {
          50: 'hsl(var(--color-primary-50))',
          100: 'hsl(var(--color-primary-100))',
          200: 'hsl(var(--color-primary-200))',
          300: 'hsl(var(--color-primary-300))',
          400: 'hsl(var(--color-primary-400))',
          500: 'hsl(var(--color-primary-500))',
          600: 'hsl(var(--color-primary-600))',
          700: 'hsl(var(--color-primary-700))',
          800: 'hsl(var(--color-primary-800))',
          900: 'hsl(var(--color-primary-900))',
        },
        secondary: {
          50: 'hsl(var(--color-secondary-50))',
          100: 'hsl(var(--color-secondary-100))',
          200: 'hsl(var(--color-secondary-200))',
          300: 'hsl(var(--color-secondary-300))',
          400: 'hsl(var(--color-secondary-400))',
          500: 'hsl(var(--color-secondary-500))',
          600: 'hsl(var(--color-secondary-600))',
          700: 'hsl(var(--color-secondary-700))',
          800: 'hsl(var(--color-secondary-800))',
          900: 'hsl(var(--color-secondary-900))',
        },
        accent: {
          50: 'hsl(var(--color-accent-50))',
          100: 'hsl(var(--color-accent-100))',
          200: 'hsl(var(--color-accent-200))',
          300: 'hsl(var(--color-accent-300))',
          400: 'hsl(var(--color-accent-400))',
          500: 'hsl(var(--color-accent-500))',
          600: 'hsl(var(--color-accent-600))',
          700: 'hsl(var(--color-accent-700))',
          800: 'hsl(var(--color-accent-800))',
          900: 'hsl(var(--color-accent-900))',
        },
        neutral: {
          50: 'hsl(var(--color-neutral-50))',
          100: 'hsl(var(--color-neutral-100))',
          200: 'hsl(var(--color-neutral-200))',
          300: 'hsl(var(--color-neutral-300))',
          400: 'hsl(var(--color-neutral-400))',
          500: 'hsl(var(--color-neutral-500))',
          600: 'hsl(var(--color-neutral-600))',
          700: 'hsl(var(--color-neutral-700))',
          800: 'hsl(var(--color-neutral-800))',
          900: 'hsl(var(--color-neutral-900))',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}