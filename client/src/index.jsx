import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './components/ui/Theme'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <Outlet />
      </ThemeProvider>
    </Provider>
  </>
)
