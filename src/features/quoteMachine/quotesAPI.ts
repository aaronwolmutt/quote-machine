import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_QUOTES_API
})

export const quotesApi = {
  getQuote: async () => {
    return await api.get('/random')
  }
}
