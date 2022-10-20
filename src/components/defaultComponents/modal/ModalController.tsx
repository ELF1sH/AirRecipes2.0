import React, { useState } from 'react';

import styles from './styles/Modal.module.scss';
import ModalView from './ModalView';
import { sleep } from '../../../helpers/asyncHelper';

interface ModalControllerProps {
  isOpen: boolean,
  handleClose: () => void,
  children?: React.ReactNode,
}

const ModalController: React.FC<ModalControllerProps> = ({
  isOpen,
  handleClose,
  children,
}) => {
  const [className, setClassName] = useState<string>('');

  const localHandleClose = async () => {
    setClassName(styles.disappear_animation);

    await sleep(200);
    handleClose();

    setClassName('');
  };

  return (
    <ModalView
      isOpen={isOpen}
      handleClose={localHandleClose}
      className={className}
    >
      { children }
    </ModalView>
  );
};

export default ModalController;
