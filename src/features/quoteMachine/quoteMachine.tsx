import React, { useEffect, useState } from 'react'
import { fetchQuote } from './quoteMachineSlice'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Card, CardContent, Fade, Typography } from '@mui/material'

function QuoteMachine (): JSX.Element {
  const quoteState = useAppSelector((state: any) => state.quotes)
  const dispatch = useAppDispatch()
  const [fadeChecked, setFadeChecked] = useState(true)
  // @ts-ignore
  const pollingInterval = Number.parseInt(process.env.REACT_APP_QUOTE_POLLING_INTERVAL)
  useEffect(() => {
    void dispatch(fetchQuote())
  }, [])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const interval = setInterval(async () => {
      setFadeChecked(false)
      await dispatch(fetchQuote())
      setFadeChecked(true)
    }, pollingInterval)
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <>
      <Fade in={fadeChecked}>
        <Card
          aria-label={'quote-card'}
          variant={'outlined'}
        >
          <CardContent>
            <Typography
              aria-label={'quote-content-text'}
              variant={'h5'}
            >
              &quot;{ quoteState.currentQuote?.content }&quot;
            </Typography>
            <Typography
              aria-label={'author-name-text'}
              variant={'subtitle2'}
            >
              -{quoteState.currentQuote?.author}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </>
  )
}

export default QuoteMachine
