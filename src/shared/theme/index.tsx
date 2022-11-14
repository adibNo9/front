import { createTheme } from '@mui/material/styles'

export const Colors = {
  shadow: '#D0E0EC',
  activeTab: '#1263A1',
  activeButton: '#007BDA',
  creamBackground: '#FBFBFB',
  yellow: '#FBBD08',
  iconColor: '#FBBD08',
  background: '#F1F1F1',
  grayText: '#ACACAC',
  headingText: '#402F2F',
  descriptionText: '#96A7AF',
  activeFilter: '#5A92BE',
  blueText: '#4182B4',
  blueBackBox: '#E8F0F6',
  redSharp: '#D51F1F',
  incorrect: '#FFF5F5',
  correct: '#E8F6E8',
  emptyTest: '#EAEAEA',
  lightBgColor: '#F8FDFD',
  shadowColor: '#D4E2ED',
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
