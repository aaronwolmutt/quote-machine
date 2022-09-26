import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import quotesReducer from '../features/quoteMachine/quoteMachineSlice'

export const store = configureStore({
  reducer: {
    quotes: quotesReducer
  }
})
// @ts-expect-error
export type AppStore = ReturnType<typeof store>
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
