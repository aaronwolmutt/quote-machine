import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { quotesApi } from './quotesAPI'
import { QuoteMachineState } from './quoteMachine.interface'

export const fetchQuote =
  createAsyncThunk('quote/', async () => {
    const response = await quotesApi.getQuote()
    return response.data
  })

const initialState: QuoteMachineState = {
  error: false,
  status: 'loading'
}

export const quotesSlice = createSlice({
  name: 'quotes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      return { currentQuote: action.payload, status: 'success', error: false }
    })
    builder.addCase(fetchQuote.pending, (state, action) => {
      return { ...state, status: 'loading', error: false }
    })
    builder.addCase(fetchQuote.rejected, (state, action) => {
      return {
        ...state,
        status: 'failed',
        error: true,
        errorMessage: action.error.message
      }
    })
  }
})

export default quotesSlice.reducer
