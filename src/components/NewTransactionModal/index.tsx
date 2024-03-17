import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'
import { TransactionContext } from '../../contexts/TransactionContext'
import { Transaction } from '../../reducers/TransactionReducer'
import useTransactionsRepository from '../../repository/transactions'
import { convertDateToISOString } from '../../utils/dataUtils'

import { NumericFormat } from 'react-number-format'
import { useContextSelector } from 'use-context-selector'
import { convertStringToBRLCurrency } from '../../utils/currencyUtils'
import {
  CloseButton,
  Content,
  InputContainer,
  Overlay,
  SpanError,
  TransactionType,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles'

const createTransactionFormSchema = z.object({
  title: z
    .string()
    .min(1, 'Título da transação é obrigatório')
    .max(100, 'O título deve ter no máximo 100 caracteres'),
  amount: z.string().max(10, 'Amount deve ter no máximo 10 caracteres'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  createdAt: z.coerce.date().refine((date) => date <= new Date(), {
    message: 'Data não pode ser maior que a data atual',
  }),

  type: z.string().refine((type) => type === 'deposit' || type === 'withdraw', {
    message: 'Tipo de transação inválido',
  }),
})

export type createTransactionFormData = z.infer<
  typeof createTransactionFormSchema
>

interface NewTransactionModalProps {
  handleClose: () => void
}

export function NewTransactionModal({ handleClose }: NewTransactionModalProps) {
  const { sumary, currentPage, loadTransactions } = useContextSelector(
    TransactionContext,
    (context) => {
      return {
        sumary: context.sumary,
        currentPage: context.currentPage,
        loadTransactions: context.loadTransactions,
      }
    },
  )

  const { createTransaction, updateSumaryByTransaction } =
    useTransactionsRepository()
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<createTransactionFormData>({
    resolver: zodResolver(createTransactionFormSchema),
    defaultValues: {
      type: 'deposit',
    },
  })

  const [year, month, day] = watch('createdAt')
    ? watch('createdAt').toString().split('-')
    : [0, 0, 0]

  const onSubmit = (data: createTransactionFormData) => {
    const newTransaction = {
      ...data,
      amount: convertStringToBRLCurrency(data.amount),
      id: crypto.randomUUID().toString(),
      createdAt: convertDateToISOString(
        new Date(Number(year), Number(month) - 1, Number(day)),
      ),
    } as Transaction
    createTransaction(newTransaction).then(() => {
      toast.success('Transação cadastrada com sucesso !', {
        position: 'top-right',
      })
      updateSumaryByTransaction(sumary, newTransaction, 'add')
        .then(() => {
          loadTransactions(currentPage, '')
        })
        .then(() => {
          reset()
          handleClose()
        })
    })
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X />{' '}
        </CloseButton>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <input type="text" placeholder="Título" {...register('title')} />
            {errors.title && <SpanError>{errors.title.message}</SpanError>}
          </InputContainer>
          <InputContainer>
            <Controller
              control={control}
              name="amount"
              render={({ field: { onChange, name, value } }) => (
                <NumericFormat
                  placeholder="Valor"
                  decimalScale={2}
                  decimalSeparator=","
                  thousandSeparator="."
                  name={name}
                  value={value}
                  onChange={onChange}
                />
              )}
            />

            {errors.amount && <SpanError>{errors.amount.message}</SpanError>}
          </InputContainer>
          <InputContainer>
            <input
              type="text"
              placeholder="Categoria"
              {...register('category')}
            />
            {errors.category && (
              <SpanError>{errors.category.message}</SpanError>
            )}
          </InputContainer>
          <InputContainer>
            <input type="date" placeholder="Data" {...register('createdAt')} />
            {errors.createdAt && (
              <SpanError>{errors.createdAt.message}</SpanError>
            )}
          </InputContainer>
          <InputContainer>
            <Controller
              control={control}
              name="type"
              render={({ field: { onChange, name, value } }) => (
                <TransactionTypeContainer
                  name={name}
                  value={value}
                  onValueChange={onChange}
                >
                  <TransactionType>
                    <TransactionTypeButton
                      value="deposit"
                      mode="deposit"
                      type="button"
                    >
                      <ArrowUpCircle size={24} />
                      Depositar
                    </TransactionTypeButton>
                    <TransactionTypeButton
                      value="withdraw"
                      mode="withdraw"
                      type="button"
                    >
                      <ArrowDownCircle size={24} />
                      Retirar
                    </TransactionTypeButton>
                  </TransactionType>
                </TransactionTypeContainer>
              )}
            />
            {errors.type && <SpanError>{errors.type.message}</SpanError>}
          </InputContainer>
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
