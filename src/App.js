import React from "react";

import Container from "./components/Container";
import QuoteBox from "./components/QuoteBox";

import variables from "./styles/_variables.scss";

import { RandomColorProvider } from "./context/RandomColorContext";

function App() {
  console.log(variables);
  return (
    <RandomColorProvider>
      <Container>
        <QuoteBox />
      </Container>
    </RandomColorProvider>
  );
}

export default App;
