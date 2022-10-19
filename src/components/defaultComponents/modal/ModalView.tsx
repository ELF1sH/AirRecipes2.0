import React from 'react';

import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

import styles from './styles/Modal.module.scss';

import CloseIcon from '@mui/icons-material/Close';

interface ModalViewProps {
  isOpen: boolean,
  className: string,
  handleClose: () => Promise<void>,
  children?: React.ReactNode,
}

const ModalView: React.FC<ModalViewProps> = ({
  isOpen,
  handleClose,
  children,
  className = '',
}) => (
  <Modal
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div className={`${styles.modal_wrapper} ${className}`}>
      { children }
      <IconButton className={styles.close_btn} component="span" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </div>
  </Modal>
);

export default ModalView;
