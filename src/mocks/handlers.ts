import { rest } from 'msw'

const mockJson = {
  _id: '00',
  content: 'TEST',
  author: 'TEST',
  tags: ['TEST'],
  authorSlug: 'TEST',
  length: 0,
  dateAdded: '2019-02-13',
  dateModified: '2019-02-13'
}

export const handlers = [
  rest.get('https://api.quotable.io/random', (req, res, context) => {
    return res(
      context.status(200),
      context.json(mockJson)
    )
  })
]
