import React from 'react';
import { createPortal } from "react-dom";
import style from './Modal.module.css';

function Modal({ children, closeModal }) {
  return createPortal(
    <>
      <div className={style.modalBackDrop} onClick={closeModal}></div >
      <div className={style.modalContent}>{children}</div>
    </>
    , document.getElementById("modal"));
}

export default Modal;