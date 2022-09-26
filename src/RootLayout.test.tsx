import React from 'react'
import RootLayout from './RootLayout'
import { renderWithProviders } from './test-utils'
import { createMemoryHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

describe('RootLayout tests', () => {
  it('renders to the DOM', () => {
    renderWithProviders(<RootLayout />)
  })
  it('the navigation bar is visible', () => {
    const { getByText } = renderWithProviders(<RootLayout />)
    const menuText = getByText('Quote Machine')
    expect(menuText).toBeInTheDocument()
  })
  // @ts-ignore
  it('navigates to the home path when pressing the home icon', async () => {
    const history = createMemoryHistory()
    // @ts-expect-error
    const { getByText } = render(
      <BrowserRouter location={history.location} navigator={history}>
        <RootLayout />
      </BrowserRouter>
    )
    const homeTab = getByText('Quote Machine')
    await userEvent.click(homeTab)
    expect(history.location.pathname).toBe('/')
  })
})
