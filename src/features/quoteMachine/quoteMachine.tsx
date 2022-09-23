import React, { useEffect } from 'react'
import { fetchQuote } from './quoteMachineSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

function QuoteMachine (): JSX.Element {
  const quoteState = useAppSelector((state: any) => state.quotes)
  const dispatch = useAppDispatch()

  // @ts-expect-error
  useEffect(async () => {
    await dispatch(fetchQuote())
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
      <h1>{quoteState.currentQuote.content}</h1>
    </>
  )
}

export default QuoteMachine
