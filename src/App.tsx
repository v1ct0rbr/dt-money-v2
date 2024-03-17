import { ThemeProvider } from 'styled-components'

import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TransactionProvider } from './contexts/TransactionContext'
import Transactions from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

// Creating a namespaced theming object.

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}

export default App
