import React from "react";
import styles from "./searchbar.module.css";

export default function Searchbar({ handleChange, query, refreshData }) {
  return (
    <div className={styles.container}>
      <input
        onChange={handleChange}
        value={query}
        className={styles.input}
        placeholder="Search by Quote or Book Name"
        name="query"
      />
      <button onClick={refreshData} className={styles.refreshBtn}>
        Refresh Data
      </button>
    </div>
  );
}
