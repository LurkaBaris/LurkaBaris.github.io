import React from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import "./List.css";

const List = ({ data, type, changeStatusAuto, list }) => {
  return (
    <div className="list">
      <Alert variant="success">
        <Alert.Heading className="mb-4">
          {type === "queue" && "Автомобили в очереде"}
          {type === "passed" && "Автомобили прошедшие ТО"}
        </Alert.Heading>
        <div className="list__container mb-4">
          {data.map((item, index) => {
            return (
              <Card
                style={{ width: "15rem" }}
                key={index}
                className="mr-2 mb-2"
              >
                <Card.Body>
                  <Card.Title>
                    Имя: <span className="list__font-weight">{item.name}</span>
                  </Card.Title>
                  <Card.Text className="mb-4">
                    VIN: <span className="list__font-weight">{item.vin}</span>
                  </Card.Text>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      changeStatusAuto(list.indexOf(item));
                    }}
                  >
                    Изменить статус
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        <Link to="/" className="header__link mr-3 btn btn-primary">
          Главная
        </Link>
      </Alert>
    </div>
  );
};

const mapStateToProps = ({ list }) => {
  return {
    list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeStatusAuto: (indexAuto) =>
      dispatch({ type: "CHANGE_STATUS_AUTO", indexAuto }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
