import clsx from 'clsx';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';

interface Props {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  closeOnOverlayClick?: boolean;
}

const Modal = ({ children, onClose, open, closeOnOverlayClick = false }: Props) => {
  const overlayClass = clsx({
    [classes.overlay]: true,
    [classes.show]: open,
  });
  const contentClass = clsx({
    [classes.content]: true,
    [classes.show]: open,
  });

  const handleOverlayClick = () => {
    if (!closeOnOverlayClick) return;

    onClose();
  };

  return ReactDOM.createPortal(
    <>
      <div onClick={handleOverlayClick} className={overlayClass}></div>
      <div className={classes.container}>
        <div className={contentClass}>{children}</div>
      </div>
    </>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
