import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { useState } from "react";

export function App() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
