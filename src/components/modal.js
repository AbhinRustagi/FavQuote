import React from "react";
import styles from "./modal.module.css";
import Modal from "react-modal";
import { signIn, addToList } from "../lib/firebase";

Modal.setAppElement("#root");

const contentStyles = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  transform: "translate(-50%, -50%)",
};

export default function AuthModal() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState({ email: "", password: "" });
  const [item, setItem] = React.useState({ quote: "", book: "" });
  const [isAuth, setAuth] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleChange(e) {
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await signIn(input.email, input.password);

    if (res.ok) setAuth(true);
    else alert("Error logging in.");
  }

  async function handleAddition(e) {
    e.preventDefault();

    if (isAuth) {
      const res = await addToList(item.book, item.quote);

      if (res.ok) {
        alert("Added");
      } else {
        alert("There was an error.", res.message);
      }

      closeModal();
    }
  }

  return (
    <div>
      <button onClick={openModal} className={styles.addBtn}>
        Add More Quotes
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{ content: contentStyles }}
        contentLabel="Example Modal"
      >
        <h2>{isAuth ? "Add new Item" : "Log In"}</h2>
        <button className={styles.closeBtn} onClick={closeModal}>
          X
        </button>
        {!isAuth && (
          <form>
            <input
              className={styles.input}
              type="email"
              name="email"
              onChange={handleChange}
              value={input.email}
              placeholder="Email Address"
            />
            <input
              className={styles.input}
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              value={input.password}
            />
            <br />
            <button onClick={handleSubmit} className={styles.logInBtn}>
              Log In
            </button>
          </form>
        )}
        {isAuth && (
          <div>
            <input
              className={styles.input}
              type="book"
              name="book"
              placeholder="Book Name"
              onChange={(e) =>
                setItem((item) => ({
                  ...item,
                  [e.target.name]: e.target.value,
                }))
              }
              value={input.book}
            />
            <input
              className={styles.input}
              type="quote"
              name="quote"
              placeholder="Quote"
              onChange={(e) =>
                setItem((item) => ({
                  ...item,
                  [e.target.name]: e.target.value,
                }))
              }
              value={input.quote}
            />
            <br />
            <button onClick={handleAddition} className={styles.logInBtn}>
              Add to Database
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}
