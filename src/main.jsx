import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import './style.css'
import App from './App.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: "#E58F7C",
    },

    secondary: {
      main: "#FFF6EF",
    },

    background: {
      default: "#A8D5D0",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#011638",
      secondary: "#023FA1",
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
