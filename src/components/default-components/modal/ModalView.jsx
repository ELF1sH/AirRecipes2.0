import React from 'react';
import { IconButton, Modal as MuiModal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import styles from './styles/Modal.module.scss';

const ModalView = ({ isOpen, handleClose, children }) => (
  <MuiModal
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    componentsProps={{
      backdrop: {
        sx: {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        },
      },
    }}
  >
    <div className={styles.modal_wrapper}>
      { children }
      <IconButton className={styles.close_btn} component="span" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </div>
  </MuiModal>
);

ModalView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ModalView;
