import React from 'react'
import App from './App'
import { render } from './test-utils'

describe('App unit tests', () => {
  it('renders to the DOM', () => {
    render(<App />)
  })
})
