import { ArrowDownCircle, ArrowUpCircle, DollarSign } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { TransactionContext } from '../../contexts/TransactionContext'
import { formatCurrency } from '../../utils/currencyUtils'
import { SummaryCard, SummaryContainer } from './styles'

interface TransactionCalc {
  deposit: number
  withdraw: number
  total: number
}

export function Summary() {
  const theme = useTheme()

  const { transactions, sumary } = useContext(TransactionContext)
  const [transactionCalc, setTransactionCalc] = useState<TransactionCalc>({
    deposit: 0,
    withdraw: 0,
    total: 0,
  })

  useEffect(() => {
    const total = sumary.deposit - sumary.withdraw

    setTransactionCalc({
      deposit: sumary.deposit,
      withdraw: sumary.withdraw,
      total,
    })
  }, [transactions, sumary])

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowUpCircle size={32} color={theme['green-300']} />
        </header>
        <strong>{formatCurrency(transactionCalc.deposit, 'BRL')}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowDownCircle size={32} color={theme['red-300']} />
        </header>
        <strong>{formatCurrency(transactionCalc.withdraw, 'BRL')}</strong>
      </SummaryCard>
      <SummaryCard variant={transactionCalc.total < 0 ? 'red' : 'green'}>
        <header>
          <span>Total</span>
          <DollarSign size={32} color={theme.white} />
        </header>
        <strong>{formatCurrency(transactionCalc.total, 'BRL')}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
