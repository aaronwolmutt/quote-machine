import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { createTheme, ThemeProvider } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'

const container = document.getElementById('root')!
const root = createRoot(container)

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffcdd2'
    },
    secondary: {
      main: '#e1f5fe'
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />
  }
])

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
)
