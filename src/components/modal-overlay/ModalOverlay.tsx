import styles from './modal-overlay.module.scss';
import {TModalOverlay} from "../../services/types";
import {FC} from "react";

const ModalOverlay: FC<TModalOverlay> = ({onClose}) => {
  return (
    <div className={styles.backdrop} onClick={onClose}></div>
  );
}

export default ModalOverlay;
