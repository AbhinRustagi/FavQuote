import React from "react";
import styles from "./searchbar.module.css";
import { IoMdRefresh } from "react-icons/io";

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
      <button onClick={refreshData}>
        <IoMdRefresh />
        Refresh Data
      </button>
    </div>
  );
}
