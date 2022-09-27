import { IconButton, Modal as MuiModal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import styles from './styles/Modal.module.scss';

function ModalView({ isOpen, handleClose, children }) {
  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.modal_wrapper}>
        { children }
        <IconButton className={styles.close_btn} component="span" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
    </MuiModal>
  );
}

ModalView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ModalView;
