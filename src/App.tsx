import { ThemeProvider } from 'styled-components'

import { TransactionProvider } from './contexts/TransactionContext'
import Transactions from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

// Creating a namespaced theming object.

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
