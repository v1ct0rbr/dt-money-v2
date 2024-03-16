import { Transaction } from '../reducers/TransactionReducer'
import { limitPerPage } from '../utils/params'

export interface TransactionResponse {
  data: Transaction[]
  first: number
  prev: number | null
  next: number | null
  last: number | null
  pages: number
  items: number
}
export interface SumaryResponse {
  deposit: number
  withdraw: number
}

const rootURL = `${import.meta.env.VITE_REACT_APP_API_URL}:${import.meta.env.VITE_REACT_APP_API_PORT}`
const transactionsUrl = `${rootURL}/transactions`
const sumaryUrl = `${rootURL}/sumary`

export default function useTransactionsRepository() {
  async function getTransactions(
    page: number,
    title = '',
  ): Promise<TransactionResponse> {
    const resquestURL = `${transactionsUrl}?${title ? `title=${title}` : ''}&_page=${page}&_per_page=${limitPerPage}`
    console.log(resquestURL)
    const response = await fetch(resquestURL)
    return response.json()
  }

  async function createTransaction(transaction: Transaction) {
    const response = await fetch(transactionsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    })
    return response.json()
  }

  async function removeTransaction(transactionId: number) {
    const response = await fetch(`${transactionsUrl}/${transactionId}`, {
      method: 'DELETE',
    })
    return response.json()
  }

  async function getTransactionsSumary(): Promise<SumaryResponse> {
    const response = await fetch(sumaryUrl)
    const result = response.json()

    return result
  }

  return {
    getTransactions,
    createTransaction,
    removeTransaction,
    getTransactionsSumary,
  }
}
