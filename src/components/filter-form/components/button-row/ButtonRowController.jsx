import React from 'react';
import PropTypes from 'prop-types';
import ButtonRowView from './ButtonRowView';

const ButtonRowController = ({ handleBtnApplyClick, isFilterChanged }) => (
  <ButtonRowView
    handleBtnApplyClick={handleBtnApplyClick}
    isFilterChanged={isFilterChanged}
  />
);

ButtonRowController.propTypes = {
  isFilterChanged: PropTypes.bool.isRequired,
  handleBtnApplyClick: PropTypes.func.isRequired,
};

export default ButtonRowController;
