export function formatCurrency(value: number, currency: 'BRL' | 'USD'): string {
  const numberFormat = currency === 'BRL' ? 'pt-BR' : 'en-US'
  return new Intl.NumberFormat(numberFormat, {
    style: 'currency',
    currency,
  }).format(value)
}
