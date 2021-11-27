import React from "react";

import Container from "./components/Container";
import QuoteBox from "./components/QuoteBox";

import { RandomColorProvider } from "./context/RandomColorContext";

function App() {
  return (
    <RandomColorProvider>
      <Container>
        <QuoteBox />
      </Container>
    </RandomColorProvider>
  );
}

export default App;
