import React from "react";

import {
  useRandomColor,
  useRandomColorUpdate,
} from "../context/RandomColorContext";

import styles from "../styles/NewQuote.module.scss";

function NewQuote(props) {
  const color = useRandomColor();
  const getNew = useRandomColorUpdate();

  return (
    <button
      id="new-quote"
      onClick={() => {
        props.getNewQuote();
        getNew();
      }}
      className={styles.quoteBtn}
      style={{ backgroundColor: color }}
    >
      New quote
    </button>
  );
}

export default NewQuote;
