import backdrop from './backdrop.module.scss';

type BackdropProps = {
  onClose?: () => void,
  show: boolean
}

const Backdrop = ({onClose, show}: BackdropProps) => {
  return (
    <div className={`${backdrop.backdrop} ${show ? backdrop.shown : ''}`} onClick={onClose}></div>
  );
}

export default Backdrop;
