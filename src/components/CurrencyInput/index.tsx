import { NumericFormat, NumericFormatProps } from 'react-number-format'

function CurrencyInput(props: NumericFormatProps) {
  return (
    <NumericFormat
      {...props}
      decimalSeparator=","
      thousandSeparator="."
      decimalScale={2}
      fixedDecimalScale
    />
  )
}

export default CurrencyInput
