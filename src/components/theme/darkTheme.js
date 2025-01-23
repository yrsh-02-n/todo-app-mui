import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#58C4DC',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#000818',
      paper: '#1c1c1c',
    },
    info: {
      main: '#4ec9ff',
    },
    success: {
      main: '#48d64f',
    },
  },
})

export default darkTheme
