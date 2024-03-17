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
    const resquestURL = `${transactionsUrl}?${title ? `title=${title}` : ''}&_page=${page}&_per_page=${limitPerPage}&_sort=-createdAt`
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

  async function removeTransaction(transactionId: string) {
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

  async function updateSumaryByTransaction(
    currentSumary: SumaryResponse,
    transactionAdded: Transaction,
    mode: 'add' | 'remove',
  ): Promise<SumaryResponse> {
    console.log(transactionAdded)
    const newDeposit =
      currentSumary.deposit +
      (transactionAdded.type === 'deposit' ? transactionAdded.amount : 0) *
        (mode === 'add' ? 1 : -1)
    const newWithDraw =
      currentSumary.withdraw +
      (transactionAdded.type === 'withdraw' ? transactionAdded.amount : 0) *
        (mode === 'add' ? 1 : -1)
    const sumary = {
      deposit: newDeposit,
      withdraw: newWithDraw,
    } as SumaryResponse

    console.log(sumary)
    const response = await fetch(`${sumaryUrl}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sumary),
    })
    const result = response.json()

    return result
  }

  return {
    getTransactions,
    createTransaction,
    removeTransaction,
    getTransactionsSumary,
    updateSumaryByTransaction,
  }
}
