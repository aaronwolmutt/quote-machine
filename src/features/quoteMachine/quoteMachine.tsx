import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from './quoteMachineSlice'

function QuoteMachine (): JSX.Element {
  const quoteState = useSelector((state: any) => state.quotes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuote())
  }, [])

  useEffect(() => {
    const interval = setInterval(() => dispatch(fetchQuote()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      <h1>Quotes machine</h1>
    </>
  )
}

export default QuoteMachine
