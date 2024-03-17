export function formatCurrency(value: number, currency: 'BRL' | 'USD'): string {
  const numberFormat = currency === 'BRL' ? 'pt-BR' : 'en-US'
  return new Intl.NumberFormat(numberFormat, {
    style: 'currency',
    currency,
  }).format(value)
}

export function convertToCurrency(value: string): number {
  return Number(value.replace(/\D/g, '')) / 100
}

export function convertStringToBRLCurrency(value: string): number {
  const formattedValue = value.replace(/\./g, '').replace(/,/g, '.')
  return Number(formattedValue)
}
