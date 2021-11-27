import React from "react";

import { useRandomColor } from "../context/RandomColorContext";

import styles from "../styles/Author.module.scss";

function Author({ name }) {
  const color = useRandomColor();

  return (
    <h3 id="author" className={styles.author} style={{ color }}>
      {name}
    </h3>
  );
}

export default Author;
