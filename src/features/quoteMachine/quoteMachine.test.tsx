import React from 'react'
import { renderWithProviders } from '../../test-utils'
import QuoteMachine from './quoteMachine'
import { quotesApi } from './quotesAPI'
import { act } from 'react-dom/test-utils'

describe('QuoteMachine unit tests', () => {
  it('renders to the DOM', () => {
    act(() => { renderWithProviders(<QuoteMachine />) })
  })
  it('calls getQuote API once when the component is mounted', () => {
    const quotesAPI = jest.spyOn(quotesApi, 'getQuote')
    act(() => { renderWithProviders(<QuoteMachine />) })
    expect(quotesAPI).toHaveBeenCalledTimes(1)
  })
  it('polls the getQuote API asynchronously on the test interval', async () => {
    const quotesAPI = jest.spyOn(quotesApi, 'getQuote')
    act(() => { renderWithProviders(<QuoteMachine />) })
    await new Promise((res, rej) => setTimeout(res, 1000))
    await expect(quotesAPI).toHaveBeenCalledTimes(2)
  })
  // TODO: pass this test
  it.skip('renders a quote with the mock text after mounting', async () => {
    const { getByLabelText } = renderWithProviders(<QuoteMachine />)
    const quoteText = getByLabelText('quote-content-text')
    const testAuthor = getByLabelText('author-name-text')
    expect(quoteText).toBeVisible()
    expect(testAuthor).toBeVisible()
    expect(quoteText).toHaveTextContent('TEST_CONTENT')
    expect(testAuthor).toHaveTextContent('TEST_AUTHOR')
  })
})
