import React from 'react'
import RootLayout from './RootLayout'
import { renderWithProviders } from './test-utils'

describe('App unit tests', () => {
  it('renders to the DOM', () => {
    renderWithProviders(<RootLayout />)
  })
})
