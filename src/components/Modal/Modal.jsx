import { useEffect } from "react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

function Modal({ children, open }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={styles.modal}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
