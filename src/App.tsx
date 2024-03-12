import { ThemeProvider } from "styled-components"

import Transactions from "./pages/Transactions"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"




// Creating a namespaced theming object.



function App() {


  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />

    </ThemeProvider>
  )
}

export default App
