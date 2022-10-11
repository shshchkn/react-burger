import React, {useEffect} from 'react';
import {createPortal} from 'react-dom';

import styles from './modal.module.scss';

import ModalOverlay from '../modal-overlay/ModalOverlay';

const modalRoot = document.getElementById("modals");

type ModalTypes = {
  children: React.ReactNode,
  show: boolean,
  onClose?: () => void,
  headerTitle: string
}

const Modal = ({children, headerTitle, show, onClose}: ModalTypes) => {

  useEffect(() => {
    const closeOnEscape = (e: any) => e.key === "Escape" ? onClose && onClose() : null;
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289L12 10.5858L19.2929 3.29289C19.6834 2.90237 20.3166 2.90237 20.7071 3.29289C21.0976 3.68342 21.0976 4.31658 20.7071 4.70711L13.4142 12L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L12 13.4142L4.70711 20.7071C4.31658 21.0976 3.68342 21.0976 3.29289 20.7071C2.90237 20.3166 2.90237 19.6834 3.29289 19.2929L10.5858 12L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289Z" fill="currentColor"/>
            </svg>
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
