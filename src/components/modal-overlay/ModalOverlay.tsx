import styles from './modal-overlay.module.scss';

type ModalOverlayTypes = {
  onClose?: () => void,
}

const ModalOverlay = ({onClose}: ModalOverlayTypes) => {
  return (
    <div className={styles.backdrop} onClick={onClose}></div>
  );
}

export default ModalOverlay;
