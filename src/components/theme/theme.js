import { createTheme } from '@mui/material/styles'

const theme = createTheme({
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
})

export default theme
