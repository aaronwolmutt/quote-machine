import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { AppStore, RootState } from './app/store'
// As a basic setup, import your same slice reducers
import quotesReducer from './features/quoteMachine/quoteMachineSlice'
import {QuoteRequestStatus} from "./features/quoteMachine/quoteMachine.interface";
import {BrowserRouter} from "react-router-dom";
import RootLayout from "./RootLayout";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      quotes: {
        status: QuoteRequestStatus.Loading,
        error: false
      }
    },
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { quotes: quotesReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}><BrowserRouter>{children}</BrowserRouter></Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
