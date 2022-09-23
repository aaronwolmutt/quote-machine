import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import quotesReducer from './features/quoteMachine/quoteMachineSlice'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function render (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        quotes: quotesReducer
      },
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types,@typescript-eslint/explicit-function-return-type
  function Wrapper ({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react'
// override render method
// eslint-disable-next-line import/export
export { render }
