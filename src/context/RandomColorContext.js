import { createContext, useEffect, useState, useContext } from "react";

const RandomColorContext = createContext();
const RandomColorUpdateContext = createContext();

export function useRandomColor() {
  return useContext(RandomColorContext);
}

export function useRandomColorUpdate() {
  return useContext(RandomColorUpdateContext);
}

export function RandomColorProvider({ children }) {
  const [randomColor, setRandomColor] = useState("#fff");

  const generateRandomColors = () => {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(color);
    setRandomColor(color);
  };
  useEffect(() => {
    generateRandomColors();
  }, []);
  return (
    <RandomColorContext.Provider value={randomColor}>
      <RandomColorUpdateContext.Provider value={generateRandomColors}>
        {children}
      </RandomColorUpdateContext.Provider>
    </RandomColorContext.Provider>
  );
}
