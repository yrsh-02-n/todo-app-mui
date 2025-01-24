import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#eaeaea',
      paper: '#f4f1ff',
    },
    info: {
      main: '#4ec9ff',
    },
    success: {
      main: '#48d64f',
    },
    text: {
      primary: '#1976d2',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#1976d2',
      textAlign: 'center',
      marginBottom: '40px'
    },
  },
})

export default lightTheme
