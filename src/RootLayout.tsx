import React from 'react'
import { Container } from '@mui/material'
import { Navigation } from './Navigation'
import QuoteMachine from './features/quoteMachine/quoteMachine'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function RootLayout () {
  return (
    <Container fixed>
      <Navigation />
      <Container fixed>
        <QuoteMachine />
      </Container>
    </Container>
  )
}
export default RootLayout
