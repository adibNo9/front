import { createTheme } from '@mui/material/styles'

export const Colors = {
  happyThoughts: '#D0E0EC',
  daphne: '#1263A1',
  blueCola: '#007BDA',
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
}

export const theme = createTheme({
  typography: {
    fontFamily: 'yekanBakh',
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 480,
      md: 744,
      lg: 980,
      xl: 1440,
    },
  },
})
