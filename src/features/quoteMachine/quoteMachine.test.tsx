import React from 'react'
import { render } from '../../test-utils'
import QuoteMachine from './quoteMachine'
import { quotesApi } from './quotesAPI'

describe('QuoteMachine unit tests', () => {
  it('renders to the DOM', () => {
    render(<QuoteMachine />)
  })
  it('calls getQuote API once when the component is mounted', () => {
    const quotesAPI = jest.spyOn(quotesApi, 'getQuote')
    render(<QuoteMachine />)
    expect(quotesAPI).toHaveBeenCalledTimes(1)
  })
  it('polls the getQuote API on 1 second intervals', async () => {
    const quotesAPI = jest.spyOn(quotesApi, 'getQuote')
    render(<QuoteMachine />)
    await new Promise((res, rej) => setTimeout(res, 1500))
    await expect(quotesAPI).toHaveBeenCalledTimes(2)
  })
})
