import React from 'react'
import { Container } from '@mui/material'
import { Navigation } from './Navigation'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function RootLayout () {
  return (
    <Container fixed>
      <Navigation />
    </Container>
  )
}
export default RootLayout
