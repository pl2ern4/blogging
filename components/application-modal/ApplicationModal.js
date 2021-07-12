import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80vw',
      height: '90vh'
    },
    overlay: {
        backgroundColor: '#424242cf'
    }
  };
Modal.setAppElement('#__next');

const ApplicationModal = ({isOpen, handleClick, children}) =>{
    return <Modal
    isOpen={isOpen}
    style={customStyles}
    // preventScroll={true}
    // shouldReturnFocusAfterClose={true}
    // shouldCloseOnEsc={true}
    onRequestClose={handleClick}
  >{children}</Modal>
}

export default ApplicationModal;