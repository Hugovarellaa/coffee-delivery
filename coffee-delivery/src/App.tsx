import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./context/CartContext";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </div>
  )
}