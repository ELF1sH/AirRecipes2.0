import React from 'react';

import { IconButton, Modal as MuiModal } from '@mui/material';

import styles from './styles/Modal.module.scss';

import CloseIcon from '@mui/icons-material/Close';

interface ModalViewProps {
  isOpen: boolean,
  handleClose: () => void,
  children: React.ReactNode,
  className?: string,
}

const ModalView: React.FC<ModalViewProps> = ({
  isOpen,
  handleClose,
  children,
  className = '',
}) => (
  <MuiModal
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
  </MuiModal>
);

export default ModalView;
