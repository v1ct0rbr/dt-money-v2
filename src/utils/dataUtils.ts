import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const pattern = 'd.M.yyyy'

function stringToDate(dateString: string): Date {
  // Parse the ISO string to a Date object
  const dateObject = parseISO(dateString)
  return dateObject
}

export const formatDate = (date: Date) => {
  return format(date, pattern, { locale: ptBR })
}

export const formatStringDate = (date: string) => {
  // const dateObject = parseISO(date)
  // return format(dateObject, pattern, { locale: ptBR })
  const dateString = date
  const dateResult = stringToDate(dateString)
  return formatDate(dateResult)
}
