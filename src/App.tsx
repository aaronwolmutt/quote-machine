import React from 'react'
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { Route, Switch } from 'react-router-dom'
import QuoteMachine from './features/quoteMachine/quoteMachine'

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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <Switch>
          <Route path='/'>
            <QuoteMachine />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  )
}
export default App
