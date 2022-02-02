import React from "react";
import styles from "./searchbar.module.css";

export default function Searchbar({ handleChange, query }) {
  return (
    <div className={styles.container}>
      <input
        onChange={handleChange}
        value={query}
        className={styles.input}
        placeholder="Search by Quote or Book Name"
        name="query"
      />
    </div>
  );
}
