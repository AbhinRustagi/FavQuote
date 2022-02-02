import React from "react";
import styles from "./searchbar.module.css";

export default function Searchbar({ bookParams, quoteParams }) {
  return (
    <div className={styles.container}>
      <input
        onChange={(e) => {
          quoteParams.setQuote(e.target.value);
        }}
        value={quoteParams?.quote}
        className={styles.input}
        placeholder="Search by Quote"
      />
      <input
        onChange={(e) => bookParams.setBook(e.target.value)}
        value={bookParams?.book}
        className={styles.input}
        placeholder="Search by Book"
      />
    </div>
  );
}
