import React from "react";
import { connect } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Popup = ({ popupActive, onHide, addAutoToQueue }) => {
  const [fields, setFields] = React.useState({
    name: "",
    vin: "",
  });

  const handleChange = (prop) => (event) => {
    setFields({ ...fields, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addAutoToQueue({ ...fields, status: 0 });
    onHide();
  };

  return (
    <div className="popup">
      <Modal show={popupActive} onHide={onHide} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Добавление авто в очередь</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label className="mb-2">Имя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите ваше имя"
                required
                onChange={handleChange("name")}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="mb-2">Vin-номер:</Form.Label>
              <Form.Control
                type="text"
                placeholder="XWEH3130000012"
                required
                onChange={handleChange("vin")}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Закрыть
            </Button>
            <Button variant="primary" type="submit">
              Добавить
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAutoToQueue: (newAuto) =>
      dispatch({ type: "ADD_AUTO_TO_QUEUE", newAuto }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
