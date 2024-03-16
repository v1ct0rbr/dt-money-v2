import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowDownCircle, ArrowUpCircle, X } from 'lucide-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TransactionContext } from '../../contexts/TransactionContext'
import {
  CloseButton,
  Content,
  Overlay,
  SpanError,
  TransactionType,
  TransactionTypeButton,
  TransactionTypeContainer,
} from './styles'

const createTransactionFormSchema = z.object({
  title: z
    .string()
    .min(1, 'title is required')
    .regex(/^[A-Za-z]+$/i, 'Only letters are allowed'),
  amount: z.coerce.number().nonnegative('Amount is required'),
  category: z.string().min(1, 'Category is required'),
  createdAt: z.coerce.date(),
  type: z.enum(['deposit', 'withdraw']),
})

type createTransactionFormData = z.infer<typeof createTransactionFormSchema>

export function NewTransactionModal() {
  const { activeTransaction } = useContext(TransactionContext)
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<createTransactionFormData>({
    resolver: zodResolver(createTransactionFormSchema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
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
          <input type="text" placeholder="Título" {...register('title')} />
          {errors.title && <SpanError>{errors.title.message}</SpanError>}
          <input type="number" placeholder="Valor" {...register('amount')} />
          {errors.amount && <SpanError>{errors.amount.message}</SpanError>}
          <input
            type="text"
            placeholder="Categoria"
            {...register('category')}
          />
          {errors.category && <SpanError>{errors.category.message}</SpanError>}

          <input type="date" placeholder="Data" {...register('createdAt')} />
          {errors.createdAt && (
            <SpanError>{errors.createdAt.message}</SpanError>
          )}
          <TransactionTypeContainer {...register('type', { required: true })}>
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
          {errors.type && <SpanError>{errors.type.message}</SpanError>}
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
