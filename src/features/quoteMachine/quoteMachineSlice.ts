import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quotesApi } from './quotesAPI'
import { QuoteMachineState, QuoteRequestStatus } from './quoteMachine.interface'

export const fetchQuote =
  createAsyncThunk('quote/', async () => {
    const response = await quotesApi.getQuote()
    return response.data
  })

const initialState: QuoteMachineState = {
  error: false,
  status: QuoteRequestStatus.Loading
}

export const quotesSlice = createSlice({
  name: 'quotes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      return { currentQuote: action.payload, status: QuoteRequestStatus.Success, error: false }
    })
    builder.addCase(fetchQuote.pending, (state, action) => {
      return { ...state, status: QuoteRequestStatus.Loading, error: false }
    })
    builder.addCase(fetchQuote.rejected, (state, action) => {
      return {
        ...state,
        status: QuoteRequestStatus.Failed,
        error: true,
        errorMessage: action.error.message
      }
    })
  }
})

export default quotesSlice.reducer
