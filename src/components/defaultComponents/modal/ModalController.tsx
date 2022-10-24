import React, { useEffect, useState } from 'react';

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

  const [localIsOpen, setLocalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) {
      setClassName(styles.disappear_animation);

      sleep(200)
        .then(() => {
          setClassName('');
          setLocalIsOpen(false);
        });
    } else {
      setLocalIsOpen(true);
    }
  }, [isOpen]);

  return (
    <ModalView
      isOpen={localIsOpen}
      handleClose={handleClose}
      className={className}
    >
      { children }
    </ModalView>
  );
};

export default ModalController;
