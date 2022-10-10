import React from 'react';
import PropTypes from 'prop-types';

import ButtonRowView from './ButtonRowView';

const ButtonRowController = ({ handleBtnApplyClick, isFilterChanged, handleClearForm }) => (
  <ButtonRowView
    handleBtnApplyClick={handleBtnApplyClick}
    isFilterChanged={isFilterChanged}
    handleClearForm={handleClearForm}
  />
);

ButtonRowController.propTypes = {
  isFilterChanged: PropTypes.bool.isRequired,
  handleBtnApplyClick: PropTypes.func.isRequired,
  handleClearForm: PropTypes.func.isRequired,
};

export default ButtonRowController;
