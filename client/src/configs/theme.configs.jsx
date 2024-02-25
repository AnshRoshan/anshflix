import { createTheme } from '@mui/material/styles'
import { colors } from '@mui/material'

export const themeModes = {
  dark: 'dark',
  light: 'light',
}

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette =
      mode === themeModes.dark
        ? {
            primary: {
              main: '#9b00ff',
              contrastText: '#ffffff',
            },
            secondary: {
              main: '#f44336',
              contrastText: '#ffffff',
            },
            background: {
              default: '#101010',
              paper: '#131313',
            },
          }
        : {
            primary: {
              main: '#9b00ff',
            },
            secondary: {
              main: '#f44336',
            },
            background: {
              default: '#ADD8E6',
            },
          }

    return createTheme({
      palette: {
        mode,
        ...customPalette,
      },
      components: {
        MuiButton: {
          // defaultProps: { disableElevation: true },
        },
      },
    })
  },
}

export default themeConfigs
