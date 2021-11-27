import React from "react";
import styles from "../styles/Container.module.scss";

import { useRandomColor } from "../context/RandomColorContext";

function Container({ children }) {
  const color = useRandomColor();

  return (
    <section className={styles.container} style={{ backgroundColor: color }}>
      {children}
    </section>
  );
}

export default Container;
