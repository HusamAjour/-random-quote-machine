import React from "react";

import { useRandomColor } from "../context/RandomColorContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Quote.module.scss";

function Quote(props) {
  const color = useRandomColor();

  return (
    <div className={styles.quoteBox} style={{ color: color }}>
      <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />{" "}
      <h1 className={styles.quote} id="text">
        {props.text}
      </h1>
    </div>
  );
}

export default Quote;
