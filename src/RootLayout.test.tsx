import React from 'react'
import RootLayout from './RootLayout'
import { renderWithProviders } from './test-utils'
import { createMemoryHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from './features/quoteMachine/quoteMachineSlice'
import { Provider } from 'react-redux'

describe('RootLayout tests', () => {
  it('renders to the DOM', () => {
    renderWithProviders(<RootLayout />)
  })
  it('the navigation bar is visible', () => {
    const { getByText } = renderWithProviders(<RootLayout />)
    const menuText = getByText('Quote Machine')
    expect(menuText).toBeInTheDocument()
  })

  it('navigates to the home path when pressing the home icon', async () => {
    const store = configureStore({ reducer: { quotes: quotesReducer } })
    const history = createMemoryHistory()
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter location={history.location} navigator={history}>
          <RootLayout />
        </BrowserRouter>
      </Provider>
    )
    const homeTab = getByText('Quote Machine')
    await userEvent.click(homeTab)
    expect(history.location.pathname).toBe('/')
  })
})
