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
      width: {
        544: '544px',
      },
      dropShadow: {
        xs: '-3px 4px 8px rgba(212, 226, 237, 0.8)',
      },
      borderWidth: {
        superThin: '0.1px',
        thin: '0.3px',
        halfPx: '0.5px',
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
        lightBlue: '#F8FDFD',
        mountainMain: '#8AB3D1',
        spanishGray: '#979797',
        borderColor: '#EDF0F1',
        descriptionText: '#96A7AF',
        happyThoughts: '#D0E0EC',
        daphne: '#1263A1',
        blueCola: '#007BDA',
        deActiveBlue: '#B3D8F4',
        woodCharcoal: '#464646',
        whiteout: '#FBFBFB',
        chocoboFeather: '#FBBD08',
        beluga: '#F1F1F1',
        flagstone: '#ACACAC',
        auberge: '#402F2F',
        meditative: '#96A7AF',
        cliffBlue: '#5A92BE',
        steelBlue: '#4182B4',
        clearVision: '#E8F0F6',
        maximumRed: '#D51F1F',
        seaSaltSherbet: '#FFF5F5',
        bubble: '#E8F6E8',
        plaster: '#EAEAEA',
        deutziaWhite: '#F8FDFD',
        brushBlue: '#D4E2ED',
        error: '#DF2E2E',
        firewatch: '#F28665',
        artistBlue: '#062D3E',
      },
      fontSize: {
        '10px': '.625rem',
      },
      screens: {
        xs: '360px',
        sm: '480px',
        md: '744px',
        lg: '980px',
        xl: '1440px',
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
        115: '1.15',
      },
      translate: {
        0.6: '0.16rem',
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
      formContainer: '0px 8px 0px #D4E2ED, inset 0px 3px 3px #D4E2ED',
      checkBox: '0px 1px 2px #ACACAC inset',
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
