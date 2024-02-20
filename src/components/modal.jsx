import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

function MyVerticallyCenteredModal({ show, onHide, modalData }) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
      show={show}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalData.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{modalData.body}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

MyVerticallyCenteredModal.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
  modalData: PropTypes.object,
};

export default MyVerticallyCenteredModal;