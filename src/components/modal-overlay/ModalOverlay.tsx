import styles from './modal-overlay.module.scss';

type ModalOverlayTypes = {
  onClose?: () => void,
  show: boolean
}

const ModalOverlay = ({onClose, show}: ModalOverlayTypes) => {
  return (
    <div className={`${styles.backdrop} ${show ? styles.shown : ''}`} onClick={onClose}></div>
  );
}

export default ModalOverlay;
