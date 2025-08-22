/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Matching existing CSS custom properties
        main: 'var(--main)',
        dark: 'var(--dark)',
        light: 'var(--light)',
        flash: 'var(--flash)',
        flashTrans: 'var(--flashTrans)',
        grey: 'var(--grey)',
        'grey-bg': 'var(--grey-bg)',
        'yellow-bg': 'var(--yellow-bg)',
        orange: 'var(--orange)',
      },
      fontFamily: {
        lato: 'var(--lato)',
        nunito: 'var(--nunito)',
      },
      fontSize: {
        'h1': '7rem',
        'h2': '5rem',
        'h3': '4rem',
        'h4': '3rem',
        'h5': '2rem',
        // Base font sizes from globals.css
        base: '1.7rem', // body font-size from globals.css
        'base-xs': '62.5%', // html font-size from globals.css
      },
      screens: {
        'xs': '480px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1250px',
      },
      spacing: {
        // Common viewport-based spacing from globals.css
        container: '5vh 10vw', // .container padding from globals.css
      },
      borderRadius: {
        'button': '50px', // button border-radius from globals.css
      },
    },
  },
  plugins: [],
}

module.exports = config