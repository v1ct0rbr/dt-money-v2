import { SumaryResponse, TransactionResponse } from '../repository/transactions'

export type Transaction = {
  id: string
  title: string
  amount: number
  type: 'deposit' | 'withdraw'
  category: string
  createdAt: string
}

type TransactionActions = {
  type: 'UPDATE_TRANSACTIONS'
  payload: { transactionResponse: TransactionResponse; sumary: SumaryResponse }
}

export interface TransactionState {
  transactions: TransactionResponse
  activeTransaction: Transaction
  currentPage: number
  sumary: {
    deposit: number
    withdraw: number
  }
}

export const TransactionReducer = (
  state: TransactionState,
  action: TransactionActions,
) => {
  switch (action.type) {
    case 'UPDATE_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload.transactionResponse,
        sumary: action.payload.sumary,
      }

    default:
      return state
  }
}
