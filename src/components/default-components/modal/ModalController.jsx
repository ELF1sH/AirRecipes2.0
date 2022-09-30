import React from 'react';
import PropTypes from 'prop-types';
import ModalView from './ModalView';

const ModalController = ({ isOpen, handleClose, children }) => (
  <ModalView
    isOpen={isOpen}
    handleClose={handleClose}
  >
    { children }
  </ModalView>
);

ModalController.defaultProps = {
  children: null,
};

ModalController.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ModalController;
