module.exports = {
  mode: 'jit',
  important: true,
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      borderWidth: {
        thin: '0.3px',
      },
      colors: {
        brand: {
          main: '#2E86DE',
          sec: '',
          font: '#003149', // main dark font
        },
        global: {
          orange: '#F26600',
          red: '#FF3B3B',
          green: '#06C270',
        },
        light: {
          50: '#FEFEFE',
          100: '#FAFAFC',
          200: '#F0F4F7', // border
          300: '#f6faff', // hover
        },
        dark: {
          50: '#DEDEDE',
          100: '#8F90A6',
        },
        gray: {
          100: '#F0F4F7',
          150: '#F4F4F4',
          200: '#F9F9F9',
          300: '#E6E6E6',
          350: '#E9ECEF',
          400: '#999999',
          500: '#D8D8D8',
          600: '#3A3A3A',
          700: '#292929',
          800: '#707070',
        },
        body: '#5A5A5A',
        heading: '#212121',
        input: '#1D1E1F',
        black: '#000',
        white: '#fff',
        linen: '#FBF1E9',
        linenSecondary: '#ECE7E3',
        olive: '#3D9970',
        maroon: '#B03060',
        brown: '#C7844B',
        placeholder: '#707070',
        borderBottom: '#f7f7f7',
        facebook: '#4267B2',
        facebookHover: '#395fad',
        google: '#4285F4',
        googleHover: '#307bf9',
        borderColor: '#EDF0F1',
        descriptionText: '#96A7AF',
        daphne: '#1263A1',
        deutziaWhite: '#F8FDFD',
        error: '#DF2E2E',
      },
      fontSize: {
        '10px': '.625rem',
      },
      screens: {
        sm: '480px',
        lg: '1025px',
        '2xl': '1500px',
        '3xl': '1780px',
      },
      spacing: {
        '430px': '430px',
        '450px': '450px',
        '500px': '500px',
        '64vh': '64vh',
      },
      minHeight: {
        '50px': '50px',
      },
      scale: {
        80: '0.8',
        85: '0.85',
        300: '3',
        400: '4',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
    boxShadow: {
      cart: '0 3px 6px rgba(0,0,0,0.12)',
      product: '0 6px 12px rgba(0,0,0,.08)',
      listProduct: '0 2px 4px rgba(0,0,0,.08)',
      navigation: '0 3px 6px rgba(0, 0, 0, 0.16)',
      navigationReverse: '0 -3px 6px rgba(0, 0, 0, 0.16)',
      header: '0 2px 3px rgba(0, 0, 0, 0.08)',
      vendorCard: '1px 1px 4px rgba(0, 0, 0, 0.12)',
      vendorCardHover: '0 6px 18px rgba(0, 0, 0, 0.12)',
      subMenu: '1px 2px 3px rgba(0, 0, 0, 0.08)',
      bottomNavigation: '0 -2px 3px rgba(0, 0, 0, 0.06)',
      cookies: '0 -2px 3px rgba(0, 0, 0, 0.04)',
      avatar: '0px 15px 30px rgba(0, 0, 0, 0.16)',
      packageCard: '-1px 2px 6px 0 rgba(212, 226, 237, 1)',
      textInput: '0px 2px 4px #D4E2ED inset',
    },
    fontFamily: {
      body: ["'Open Sans', sans-serif"],
      satisfy: ["'Satisfy', cursive"],
      segoe: ["'Segoe UI', sans-serif"],
      yekanBakh: ['yekanBakh'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('tailwindcss-rtl'),
  ],
  corePlugins: {
    preflight: false,
  },
}
