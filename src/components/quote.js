import React from "react";
import styles from "./quote.module.css";

export default function Card({ quote, book }) {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>{quote}</p>
      <div>
        <hr className={styles.rule} />
        <p className={styles.book}>{book}</p>
      </div>
    </div>
  );
}
