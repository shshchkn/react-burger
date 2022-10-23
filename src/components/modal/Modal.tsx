import {useEffect} from 'react';
import {createPortal} from 'react-dom';
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './modal.module.scss';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import {TModal} from "../../utils/types";

const modalRoot = document.getElementById("modals");

const Modal = ({children, headerTitle, show, onClose}: TModal) => {

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => e.key === "Escape" ? onClose && onClose() : null;
    document.body.addEventListener("keydown", closeOnEscape);
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
      document.body.removeEventListener("keydown", closeOnEscape);
    }
  }, [show, onClose]);

  return createPortal(
    <>
      <div className={`${styles.popup} ${show ? styles.shown : ''}`}>
        <div className={styles.popup__header}>
          {headerTitle || null}
          <button className={styles.popup__close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        <div className={styles.popup__body}>
          {children}
        </div>
      </div>
      <ModalOverlay show={show} onClose={onClose}/>
    </>,
    modalRoot!
  );
}

export default Modal;
