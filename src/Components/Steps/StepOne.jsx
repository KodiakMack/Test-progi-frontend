import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const handleClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className=" ">
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="display-1">Welcome</h1>
              <p>To the progi test</p>
            </Col>
          </Row>
          <div className="mt-5">
            <Button
              className="mt-5 text-center"
              onClick={handleClick}
              variant="primary"
              type="submit"
            >
              Continue
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default StepOne;
