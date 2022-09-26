import React, { useEffect } from 'react'
import { fetchQuote } from './quoteMachineSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { QuoteRequestStatus } from './quoteMachine.interface'

function QuoteMachine (): JSX.Element {
  const quoteState = useAppSelector((state: any) => state.quotes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    void dispatch(fetchQuote())
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const interval = setInterval(async () => await dispatch(fetchQuote()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      {quoteState.status === QuoteRequestStatus.Success &&
        <h1>{quoteState.currentQuote.content}</h1>
      }
    </>
  )
}

export default QuoteMachine
