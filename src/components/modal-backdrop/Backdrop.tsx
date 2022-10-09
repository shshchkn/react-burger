import styles from './backdrop.module.scss';

type BackdropTypes = {
  onClose?: () => void,
  show: boolean
}

const Backdrop = ({onClose, show}: BackdropTypes) => {
  return (
    <div className={`${styles.backdrop} ${show ? styles.shown : ''}`} onClick={onClose}></div>
  );
}

export default Backdrop;
