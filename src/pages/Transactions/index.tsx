import React, { FormEvent, useContext, useState } from 'react'
import Header from '../../components/Header'

import { Trash } from 'lucide-react'
import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'
import { ClickEvent, Pagination } from '../../components/Pagination'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionContext'
import useTransactionsRepository from '../../repository/transactions'
import { formatCurrency } from '../../utils/currencyUtils'
import { formatStringDate } from '../../utils/dataUtils'
import { limitPerPage } from '../../utils/params'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

const Transactions: React.FC = () => {
  const { transactions, loadTransactions, sumary } =
    useContext(TransactionContext)
  // const [items, setItems] = React.useState<Transaction[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [offset, setOffset] = React.useState(1)

  const transactionsRepo = useTransactionsRepository()
  const [filter, setFilter] = React.useState('')

  const fetchItems = async () => {
    loadTransactions(currentPage, filter)
  }

  React.useEffect(() => {
    fetchItems()
  }, [offset])

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault()

    setCurrentPage(1)
    fetchItems()
  }

  const handleDelete = (id: string) => {
    confirmAlert({
      title: 'Confirmar exclusão',
      message: 'Deseja excluir esta transação?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            transactionsRepo.removeTransaction(id).then(() =>
              transactionsRepo
                .updateSumaryByTransaction(
                  sumary,
                  transactions.data.find((item) => item.id === id)!,
                  'remove',
                )
                .then(() => {
                  fetchItems()
                  toast.success('Excluído com sucesso !', {
                    position: 'top-right',
                  })
                }),
            )
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    })
  }

  const handleChangePage = (event: ClickEvent) => {
    const newOffset = (event.selected + 1) * limitPerPage
    setCurrentPage(event.selected + 1)
    setOffset(newOffset)
  }

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm
          filter={filter}
          handleChangeFilter={handleChangeFilter}
          handleSearchSubmit={handleSearchSubmit}
        />

        <TransactionsTable>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>tipo</th>
              <th>Data</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {transactions.data &&
              transactions.data.map((item) => (
                <tr key={item.id}>
                  <td width="50%">{item.title}</td>
                  <td>
                    <PriceHighlight variant={item.type}>
                      {formatCurrency(item.amount, 'BRL')}
                    </PriceHighlight>
                  </td>

                  <td>{item.category}</td>
                  <td>{formatStringDate(item.createdAt)}</td>
                  <td>
                    <button type="button" onClick={() => handleDelete(item.id)}>
                      <Trash size={24} color="red"></Trash>{' '}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </TransactionsTable>

        <div className="pagination">
          <Pagination
            pageCount={transactions.pages}
            totalItems={transactions.items}
            handleChangePage={(e) => handleChangePage(e)}
          />
        </div>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions
