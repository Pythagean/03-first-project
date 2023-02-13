import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./Modal.module.css";
import "../UI/Button";

function Modal(props) {
  const [showModal, setShowModal] = useState(true);

  function okButtonClickHandler() {
    setShowModal(false);
    props.setShowModal(false);
  }

  if (showModal) {
    return (
      <div id="modal-window" className={styles.modal}>
        <header className={styles.header}>
          <h2>Error</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.footer}>
          <Button onClick={okButtonClickHandler}>Ok</Button>
        </footer>
      </div>
    );
  }
}

export default Modal;
