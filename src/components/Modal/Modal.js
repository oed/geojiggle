import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Leaderboard from "@components/Leaderboard/Leaderboard";

function GeoJiggleModal(props) {
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Leaderboard />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GeoJiggleModal;