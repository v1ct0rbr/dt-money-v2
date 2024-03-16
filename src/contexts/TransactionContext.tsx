import { ReactNode, createContext, useReducer } from 'react'
import {
  Transaction,
  TransactionReducer,
  TransactionState,
} from '../reducers/TransactionReducer'
import { SumaryResponse, TransactionResponse } from '../repository/transactions'

interface TransactionContextType {
  transactions: TransactionResponse
  activeTransaction: Transaction
  currentPage: number
  sumary: SumaryResponse
  updateTransactions: (
    transactionResponse: TransactionResponse,
    sumary: SumaryResponse,
  ) => void
}

export const TransactionContext = createContext({} as TransactionContextType)

interface TransactionContextProviderProps {
  children: ReactNode
}

const initialPage = 1

export function TransactionProvider({
  children,
}: TransactionContextProviderProps) {
  const initialState = {
    transactions: {} as TransactionResponse,
    activeTransaction: {} as Transaction,
    currentPage: initialPage,
    sumary: {} as SumaryResponse,
  } as TransactionState

  // const transactionsRepo = useTransactionsRepository()

  const [transactionState, dispatch] = useReducer(
    TransactionReducer,
    initialState,
  )

  function updateTransactions(
    transactionResponse: TransactionResponse,
    sumary: SumaryResponse,
  ) {
    dispatch({
      type: 'UPDATE_TRANSACTIONS',
      payload: { transactionResponse, sumary },
    })
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: transactionState.transactions,
        activeTransaction: transactionState.activeTransaction,
        currentPage: transactionState.currentPage,
        sumary: transactionState.sumary,
        updateTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

// Adicionando um hook personalizado para acessar o contexto
