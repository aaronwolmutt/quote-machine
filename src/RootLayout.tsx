import React from 'react'
import { Container, Grid } from '@mui/material'
import { Navigation } from './Navigation'
import QuoteMachine from './features/quoteMachine/quoteMachine'

function RootLayout (): JSX.Element {
  return (
   <>
    <Navigation />
    <Container fixed>
      <Grid container paddingTop={7}>
        <Grid alignContent={'center'}>
          <QuoteMachine />
        </Grid>
      </Grid>
    </Container>
   </>
  )
}
export default RootLayout
