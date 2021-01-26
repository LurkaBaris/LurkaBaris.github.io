import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ popupIsActive }) => {
  const openPopup = () => {
    popupIsActive(true);
  };
  return (
    <header className="header">
      <Alert variant="success">
        <Alert.Heading className="mb-4">
          Запись на технический осмотр.
        </Alert.Heading>
        <Button variant="primary" className="mb-3" onClick={openPopup}>
          Добавить авто в очередь
        </Button>
        <div>
          <Link to="/queue" className="header__link mr-3 btn btn-info">
            Авто в очереди
          </Link>
          <Link to="/passed" className="header__link btn btn-info">
            Авто прошедшие ТО
          </Link>
        </div>
      </Alert>
    </header>
  );
};

export default Header;
