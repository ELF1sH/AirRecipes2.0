import ModalView from './ModalView';

function ModalController({ isOpen, handleClose, children }) {
  return (
    <ModalView
      isOpen={isOpen}
      handleClose={handleClose}
      children={children}
    />
  );
}

export default ModalController;
