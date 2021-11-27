import React, { useEffect, useState } from "react";

import styles from "../styles/QuoteBox.module.scss";

import Quote from "./Quote";
import Author from "./Author";
import NewQuote from "./NewQuote";
import ShareQuote from "./ShareQuote";

import quotes from "../data/quotes.json";

function QuoteBox(props) {
  const [currentQuote, setCurrentQuote] = useState({ content: "", author: "" });
  console.log(currentQuote);
  //   const getRandomQuote = () => {
  //     setCurrentQuote(quotes.allQuotes[0]);
  //   };
  const getRandomQuote = async () => {
    console.log("currentIndex");
    let q = await fetch("https://api.quotable.io/random").then((res) =>
      res.json()
    );
    console.log(q);
    setCurrentQuote(q);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <>
      <div id="quote-box" className={styles.bgColor}>
        <Quote text={currentQuote.content} />
        <Author name={currentQuote.author} />
        <div className={styles.btnsContainer}>
          <ShareQuote
            text={currentQuote.content}
            author={currentQuote.author}
          />
          <NewQuote getNewQuote={getRandomQuote} />
        </div>
      </div>
    </>
  );
}

export default QuoteBox;
