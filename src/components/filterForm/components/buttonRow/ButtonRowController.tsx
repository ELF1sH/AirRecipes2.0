import React from 'react';

import ButtonRowView from './ButtonRowView';

interface ButtonRowControllerProps {
  isFilterChanged: boolean,
  handleBtnApplyClick: () => void,
  handleClearForm: () => void,
}

const ButtonRowController: React.FC<ButtonRowControllerProps> = ({
  isFilterChanged,
  handleBtnApplyClick,
  handleClearForm,
}) => (
  <ButtonRowView
    handleBtnApplyClick={handleBtnApplyClick}
    isFilterChanged={isFilterChanged}
    handleClearForm={handleClearForm}
  />
);

export default ButtonRowController;
