
export interface QuoteMachineState {
  currentQuote?: Quote
  status: string
  error: boolean
  errorMessage?: string
}

export interface Quote {
  _id: string
  content: string
  author: string
  tags: string[]
  authorSlug: string
  length: number
  dateAdded: Date
  dateModified: Date
}
