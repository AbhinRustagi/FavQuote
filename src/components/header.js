import React from "react";
import Modal from "./modal";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>FavQuote</span>
        <Modal />
      </div>
    </header>
  );
}
