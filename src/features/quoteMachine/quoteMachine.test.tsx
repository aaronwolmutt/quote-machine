import React from 'react'
import { renderWithProviders } from '../../test-utils'
import QuoteMachine from './quoteMachine'
import { quotesApi } from './quotesAPI'

describe('QuoteMachine unit tests', () => {
  it('renders to the DOM', () => {
    renderWithProviders(<QuoteMachine />)
  })
  it('calls getQuote API once when the component is mounted', () => {
    const quotesAPI = jest.spyOn(quotesApi, 'getQuote')
    renderWithProviders(<QuoteMachine />)
    expect(quotesAPI).toHaveBeenCalledTimes(1)
  })
  it('polls the getQuote API on 1 second intervals', async () => {
    const quotesAPI = jest.spyOn(quotesApi, 'getQuote')
    renderWithProviders(<QuoteMachine />)
    await new Promise((res, rej) => setTimeout(res, 1500))
    await expect(quotesAPI).toHaveBeenCalledTimes(2)
  })
})
